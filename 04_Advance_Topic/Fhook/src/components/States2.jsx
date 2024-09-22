import { useState } from "react";

const States2 = () =>{
    const values = useState("React Class")
    const [age,setAge] = useState(24)
    

    const name = values[0]
    const setName = values[1]

    console.log("render");
    

    //const [name ,setName] = useState()

    const handleClick = () =>{
        setName("IT and CS") 
        setAge(age+1)
        setAge(age+1)
    }

    return(
        <>
        <h1 onClick={handleClick}>Hi {name} {age}</h1>
        </>
    )
}

export default States2