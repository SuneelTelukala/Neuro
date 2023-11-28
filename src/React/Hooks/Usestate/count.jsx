import { useState } from "react"

 export function Plus(){
    const[count,setCount]=useState(0);
    const[theme,settheme]=useState('Blue');
    function Decrese(){
        setCount(prevCount=>prevCount-1)
    }
    function Increse(){
        setCount(prevCount=>prevCount+1)
    }
    return(
        <div className="container-fluid">
             <button onClick={Decrese}>-</button>
             <span>{count}</span>
             <span>{'Blue'}</span>
             <button onClick={Increse}>+</button>

        </div>
    )
 }