import React, { useState, useEffect } from 'react';
import { Container, Button, Row } from 'reactstrap';
import axios from 'axios';
 
const Something = () => {
  const [ users, setUsers ] = useState([]);
  const [ showDetails, setShowDetails ] = useState(false);
 
  const fetchUsers = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`); //api
    setUsers(response.data);
    console.log(response)
  };
 
  console.log("users",users)
 
  useEffect( () => {
     fetchUsers(users)
     },
   [users] );
 
  const handleClick = event => { setShowDetails(!showDetails) };
 
  return (
    <div>
      {
        users.map((user) => (
          <ul key={ user.id }>
            <li>
              <strong>{ user.name }</strong>
              <div>
                <Button onClick={ handleClick }>
                  { showDetails ? "Close Additional Info" : "More Info"  }
              </Button>
               { showDetails &&
                 <div className="additional-info">
                   <Row>
                     { `Email: ${ user.email }` }
                   </Row>
                   <Row>
                     { `Phone: ${ user.phone }` }
                   </Row>
                   <Row>
                     { `Website: ${ user.website }` }
                   </Row>
                   {/* <Row>
                     { `bs: ${ user.bs }` }
                   </Row> */}
                 </div>
               }
              </div>
            </li>
          </ul>
        ))
      }
    </div>
  )
}
 
export default Something


