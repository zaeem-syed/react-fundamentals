import { useState } from "react";


function Child({sendData}){
    const [inputvalue,setInputValue]=useState("");
    const handleSend =()=>{
        sendData(inputvalue);
    }

    return (
        <div>
            <h2>Child component</h2>
            <input type="text"
             placeholder="type your message"
             value={inputvalue}
             onChange={(e)=>setInputValue(e.target.value)}
            
            
            />
            <button onClick={handleSend}>Send to the parent</button>
            </div>
    )
}


export default Child;