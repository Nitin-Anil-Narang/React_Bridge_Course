import { useState } from "react";



function names (){
    console.log("State Setter");
    
    //slow Code
    return "Nitin"
}

const States1 = () =>{
    const values = useState(names())
    // const values = useState(()=>{

    //     console.log("State inline Setter ");

    //     return "Nitin"
        
    // })

    const name = values[0]
    const setName = values[1]

    //const [name ,setName] = useState()

    const handleClick = () =>{
        setName("IT and CS") 
    }

    return(
        <>
        <h1 onClick={handleClick}>Hi {name}</h1>
        </>
    )
}

export default States1