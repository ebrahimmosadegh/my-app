import React, { useEffect, useContext, useState } from "react";
import Button from "../components/UI/button/button";
import './style/editStudent.css';
import { useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { AuthContext } from '../context/Auth/authContext';
const EditStudent = (props)=>{
    const navigate = useNavigate();
    const { state } = useLocation();
    const {authenticated} = useContext(AuthContext);
    const useparamValue = useParams();
    // const { id } = useparamValue;
    // useEffect(()=>{
    //     if(!authenticated){
    //         navigate(`/`, { replace: true });
    //       }
    //     axios.get(`/posts/${id}`)
    //     .then(response=>{
    //         console.log(response.data)
    //     })
    // },[id])
    // console.log(props.location.state)
//   console.log(state);
// const {id,name,classNumber,phoneNumber,email} = state;
console.log(state.classNumber)
const[student_name,setName] = useState(state.name);
const[student_classNumber,setNumber] = useState(state.classNumber);
const[student_phoneNumber,setPhoneNumber] = useState(state.phoneNumber);
const[student_email,setEmail] = useState(state.email);
const [message,setMessage]= useState('');


    const editStudent = ()=>{
        fetch('http://localhost/student/updateStudent.php',{
            method:'POST',
            headers:{
                'Accept' : 'applicaion/json',
                'Content-Type':'application/json',
            },
            body:JSON.stringify({
                student_id:state.id,
                student_name:student_name,
                studet_class:student_classNumber,
                student_phone_number:student_phoneNumber,
                student_email:student_email
            })
        }).then((response)=>response.json())
            .then((responseJson)=>{
                if(responseJson==='succefull'){
                    props.history.replace('/')
                }
                else{
                    setMessage(responseJson)
                }
            }).catch((error)=>{
                setMessage(error)
            })
       
    }
    return(
        <div className="NewPost">
            <h1>Edit Student</h1>
            <h2>{message}</h2>
            <label>name and family:</label>
            <input type="text" value={student_name} onChange={(event)=>setName(event.target.value)} />
            <label>class:</label>
            <input type="number" value={student_classNumber} onChange={(event)=>setNumber(event.target.value)} />
            <label>call number:</label>
            <input type="number" value={student_phoneNumber} onChange={(event)=>setPhoneNumber(event.target.value)} />
            <label>email:</label>
            <input type="email" value={student_email} onChange={(event)=>setEmail(event.target.value)} />
            <Button clicked={editStudent} btnType="danger">save</Button>
        
        </div>
    )
}
export default EditStudent;