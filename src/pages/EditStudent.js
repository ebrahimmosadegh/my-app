import React, { useEffect } from "react";
import Button from "../components/UI/button/button";
import './style/editStudent.css';
import { useParams } from "react-router";
const EditStudent = (props)=>{
    console.log(useParams());
    // useEffect(()=>{
    //     console.log(props);
        
    // },[])
    const editStudent = ()=>{
        alert('success')
    }
    return(
        <div className="NewPost">
            <h1>Edit Student</h1>
            <label>name and family:</label>
            <input type="text"  />
            <label>class:</label>
            <input type="number" />
            <label>call number:</label>
            <input type="number"  />
            <label>email:</label>
            <input type="email"  />
            <Button clicked={editStudent} btnType="danger">save</Button>
        
        </div>
    )
}
export default EditStudent;