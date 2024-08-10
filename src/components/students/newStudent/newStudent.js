import React,{useState} from "react";
import classes from './newStudent.module.css'
import Button from "../../UI/button/button";
import WithClass from "../../hoc/WithClass";
import {useParams} from "react-router-dom";
const NewStudent=(props)=>{
    useState(()=>{
        console.log(props)
    },[])
    const{studentName,studentClass,studentPhoneNumber,studentEmail}= props;
    const{studentNameHandler,studentClassHandler,studentPhoneNumberHandler,studentEmailHandler}=props;
    let params = useParams();
    return(
        <React.Fragment >
            <h1>Add Student</h1>
            <label>Name & Family</label>
            <input type="text" value={studentName} onChange={studentNameHandler} />
            <label>Class</label>
            <input type="number" value={studentClass} onChange={studentClassHandler} maxLength={3} />
            <label>Call Number</label>
            <input type="number" value={studentPhoneNumber} onChange={studentPhoneNumberHandler} />
            <label>Email</label>
            <input type="email" value={studentEmail} onChange={studentEmailHandler} />
            <Button clicked={props.clicked} btnType="danger">Submit</Button>
        </React.Fragment>
    )
}
export default React.memo(WithClass(NewStudent, classes.newStudent));