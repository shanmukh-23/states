// import React, { useState, useEffect } from 'react';
// import { Button, Row } from 'reactstrap';
// import axios from 'axios';
// import '../Styling.css'
// const ChangingButton = () => {
//   const [ users, setUsers ] = useState([]);
//   const [ showDetails, setShowDetails ] = useState(false);
//   const [ showId,setShowID ] = useState(null);

//   const fetchUsers = async () => {
//     const response = await axios.get(`https://jsonplaceholder.typicode.com/users`); //api
//     setUsers(response.data);
//     console.log(response)
//   };

//   useEffect( () => {
//      fetchUsers()
//      },
//    [users] );
//   const handleClick = (event) => {
//     setShowID(event)
//      setShowDetails(!showDetails) };
//   return (
//     <div>
//       {
//         users.map((user,i) => (
//           <ul key={ user.id }>
//             <li>
//               <strong>{ user.name }</strong>
//               <div>
//                 <Button className = "btn"
//                   onClick={ ()=>{handleClick(i, showId ? false :true)} }
//                 >
//                   { i === showId && showDetails? "Close Additional Info" : "More Info"  }
//               </Button>
//                { i === showId && showDetails &&
//                  <div className="additional-info">
//                    <Row>
//                    <h2>  { `Email: ${ user.email }` }</h2>
//                    </Row>
//                    <Row>
//                    <h2> { `Phone: ${ user.phone }` }</h2>
//                    </Row>
//                    <Row>
//                      <h2>{ `Website: ${ user.website }` }</h2>
//                    </Row>
//                  </div>
//                }
//               </div>
//             </li>
//           </ul>
//         ))
//       }
//     </div>
//   )
// }
// export default ChangingButton