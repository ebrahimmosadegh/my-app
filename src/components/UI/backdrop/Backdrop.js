import React from "react";
import './Backdrop.css';
const Backdrop=(props)=>(
    props.show?<div className="Backdrop" onClick={props.modalclosed}></div>:null
)
export default Backdrop