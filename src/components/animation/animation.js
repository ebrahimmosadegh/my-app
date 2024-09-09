import React,{useState} from "react";
import './animation.css';
import Button from "../UI/button/button";
const Animation =()=>{
    const[slideState,setSlide] = useState(false);
    const[flipState,setFlip] = useState(false);
    const onSlide=()=>{
        setSlide(true);
        setFlip(false);
    }
    const onFlip=()=>{
        setSlide(false);
        setFlip(true);
    }
    return(
        <div className={`box ${slideState?'slide':null} ${flipState?'flip':null}`}>
            <h1>animation</h1>
            <h2>combine animations css with reactJS</h2>
            <div style={{display:'flex',flexFlow:'row',justifyContent:'center'}}>
                <Button btnType="danger" clicked={onSlide}>Slide</Button>
                <Button btnType="danger" clicked={onFlip}>Flip</Button>
            </div>
        </div>
    )
}
export default Animation;