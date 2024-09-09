import React,{useState} from "react";
import './animation.css';
import Button from "../UI/button/button";
const styles={
    transition:'all 1s ease-out'
}
const Transition =()=>{
    const[opacityState,setOpacity] = useState(1);
    const[scaleState,setScale] = useState(1);
    const onHide=()=>{
        setOpacity(0);
    }
    const onScale=()=>{
        setScale(scaleState>1?1:1.2)
    }
    return(
        <div className="box" style={{...styles,opacity:opacityState,transform:`scale(${scaleState})`}}>
            <h1>animation</h1>
            <h2>combine animations css with reactJS</h2>
            <div style={{display:'flex',flexFlow:'row',justifyContent:'center'}}>
                <Button btnType="danger" clicked={onHide}>Hide</Button>
                <Button btnType="danger" clicked={onScale}>Scale</Button>
            </div>
        </div>
    )
}
export default Transition;