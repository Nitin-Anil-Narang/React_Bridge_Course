import { useState,useEffect } from "react"
const Child = () =>{
    const [name,setName] = useState("")
    const [age,setAge] = useState(0)

    useEffect(() => {
        console.log(here);
        
    },[])

    

    console.log("Render Child");

    return(
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <br />
            <br />
            <button onClick={() => setAge(currentAge => currentAge -1)}>-</button>
            {age}
            <button onClick={() => setAge(currentAge => currentAge + 1)}>+</button>
            <br />
            <br />

            My Name is {name} and I am {age} years old
        </div>
    )
    

}
export default (Child)