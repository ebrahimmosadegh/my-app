import React, {useState} from "react";
const Clickers =()=>{
    const[count,setCount]= useState(0)
    const increase = ()=>{
        setCount(count+1)
    }
    const decrease = ()=>{
        setTimeout(()=>{
            setCount(count-1);
        },500)
    }
    return(
        <div>
            <button onClick={increase}>up</button>
            <button onClick={decrease}>down</button>
            <span data-testid="count">
                {count}
            </span>
        </div>
    )
}
export default Clickers;