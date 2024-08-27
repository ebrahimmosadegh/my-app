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
            id={student.student_id}
            name={student.student_name}
            classNumber={student.student_class}
            phoneNumber={student.student_phone_number}
            email={student.student_email}
            classChanged={(event) => props.classChanged(event, student.id)}
            deleted={()=>props.deleted(student.student_id)}
            edited={()=>{props.edited(student.student_id, student.student_name, student.student_class, student.student_phone_number, student.student_email)}}
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