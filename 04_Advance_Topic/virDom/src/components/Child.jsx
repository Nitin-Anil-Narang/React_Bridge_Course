import { useState } from "react"
const Child = () =>{
    const [name,setName] = useState("")

    

    console.log("Render Child");

    return(
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <br />
            My Name is {name}.
        </div>
    )
    

}
export default (Child)