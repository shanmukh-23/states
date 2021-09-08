
import { useState } from "react";

const Mapping = () => {
    const [Mapping, setMapping] = useState([
        {
            id: 1,
            name: "kane",
            age: 23,
            hobbies: "cricket"

        },
        {
            id: 2,
            name: "richarhson",
            age: 25,
            hobbies: "volleyball"

        },
        {
            id: 3,
            name: "Marcos",
            age: 23,
            hobbies: "basketball"

        }
    ])
    return(
        <>
        {Mapping.map((maps)=>(
            <h2>{maps.name}<br/>{maps.hobbies}</h2>
        ))}
        </>
    )
}

export default Mapping