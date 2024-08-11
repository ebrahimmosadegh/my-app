import React from 'react';
import './students.css';
import Button from '../../UI/button/button';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Student=(props)=>{
    // const rndNumber = Math.random();
    // if(rndNumber>0.8){
    //     throw new Error('یک جای کار میلنگه!')
    // }
    return(
        <div className="students">
            <label>student number: {props.id}</label>
            <label>name and family: {props.name}</label>
            <input type="text" value={props.name} onChange={props.nameChanged} />

            <label>class: {props.classNumber}</label>
            <input type="text" value={props.classNumber} onChange={props.classChanged} />

            <label>call number: {props.phoneNumber}</label>
            <input type="number" defaultValue={props.phoneNumber} />

            <label>email: {props.email}</label>
            <input type="email" defaultValue={props.email} />

            <label>score: {props.score}</label>
            <label>
            <Button
                btnType="danger"
                clicked={props.deleted}
            >
                delete
            </Button>
            {/* <Link to={"/student/"+ props.id}> */}
            <Button
                btnType="success"
                clicked={props.edited}
            >
                edit
            </Button>
            {/* </Link> */}
            
            </label>
        </div>
    )
}
export default React.memo(Student);
Student.propTypes={
    id:PropTypes.number.isRequired,
    name:PropTypes.string.isRequired,
    classNumber:PropTypes.number.isRequired,
    phoneNumber:PropTypes.number.isRequired,
    email:PropTypes.string.isRequired,
    deleted:PropTypes.func.isRequired
}