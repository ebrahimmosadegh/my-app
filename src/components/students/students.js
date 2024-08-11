import React,{useEffect} from "react";
import Student from "./student/student";
import './student/students.css'
import PropTypes from 'prop-types';

const Students = (props) => {
    useEffect(()=>{
        // console.log('change')
    },[props.studentsList])
    let studentsList =(
        props.studentsList.map((student, index) =>
        <Student
            key={index}
            id={student.id}
            name={student.name}
            classNumber={student.classNumber}
            phoneNumber={student.phoneNumber}
            email={student.email}
            score={student.score}
            nameChanged={(event) => props.nameChanged(event, student.id)}
            classChanged={(event) => props.classChanged(event, student.id)}
            deleted={()=>props.deleted(student.id)}
            edited={()=>{props.edited(student.id)}}
        />
    )

    )
    if (props.toggle) {
        return (
            <div className="students-section">
                {
                  studentsList
                }
            </div>
        )
    }
    return (studentsList)
}
export default React.memo(Students);
Students.propTypes={
    studentsList:PropTypes.array.isRequired,
    nameChanged:PropTypes.func.isRequired,
    classChanged:PropTypes.func.isRequired,
    toggle:PropTypes.bool.isRequired,
}