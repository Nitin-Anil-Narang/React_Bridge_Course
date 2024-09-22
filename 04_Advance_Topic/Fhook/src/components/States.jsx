import { useState } from "react";

const States = () =>{
    const values = useState("React Class")
    const name = values[0]
    const SetName = values[1]

    //const [name ,setName] = useState()

    const handleClick = () =>{
        SetName("It and Cs")
    }

    return(
        <>
        <h1 onClick={handleClick}>Hi {name}</h1>
        </>
    )
}

export default States