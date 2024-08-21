import React, { useEffect, useContext } from "react";
import Button from "../components/UI/button/button";
import './style/editStudent.css';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../context/Auth/authContext';
const EditStudent = (props)=>{
    const navigate = useNavigate();
    const {authenticated} = useContext(AuthContext);
    const useparamValue = useParams();
    const { id } = useparamValue;
    useEffect(()=>{
        if(!authenticated){
            navigate(`/`, { replace: true });
          }
        axios.get(`/posts/${id}`)
        .then(response=>{
            console.log(response.data)
        })
    },[id])
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