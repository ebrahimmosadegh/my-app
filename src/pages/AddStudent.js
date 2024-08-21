import React,{useState, useEffect, useContext} from 'react';
import NewStudent from '../components/students/newStudent/newStudent';
import {useNavigate } from 'react-router-dom';
import axios from 'axios';
import { AuthContext } from '../context/Auth/authContext';
const AddStudent = (props)=>{
  const navigate = useNavigate();
  const {authenticated} = useContext(AuthContext);
  useEffect(()=>{
      if(!authenticated){
        navigate(`/`, { replace: true });
      }
  },[])
  
  const[studentName,setStudentName]= useState('');
  const[studentClass,setStudentClass] = useState('');
  const[studentPhoneNumber,setStudentPhoneNumber] = useState('');
  const [studentEmail,setStudentEmail] = useState('');
  const[result,setResult] = useState(false);
  const[error,setError]= useState(false);
  const studentNameHandler=(event)=>{
    setStudentName(event.target.value)
  }
  const studentClassHandler=(event)=>{
    setStudentClass(event.target.value)
  }
  const studentPhoneNumberHandler=(event)=>{
    setStudentPhoneNumber(event.target.value)
  }
  const studentEmailHandler=(event)=>{
    setStudentEmail(event.target.value);
  }
  const addStudent=()=>{
    const data={
      title:'foo',
      body:'bar',
      userId: 1
    }
    axios.post('/posts',data)
    .then(response=>{
      console.log(response)
    }).catch(error=>{
      setError(true)
      console.log(error)
    })
    setResult(true)
  }
    let redirecting = null;
    // if(result){
    // navigate(`/`, { replace: true }); // <-- redirect
    // }
    let ErrorMessage = null;
    if(error){
      ErrorMessage = <h1 style={{textAlign:'center',color:'red'}}>seem error please try again</h1>
    }
    return(
      <React.Fragment>
        {ErrorMessage}
        {redirecting}
        <NewStudent
        studentName={studentName}
        studentClass={studentClass}
        studentPhoneNumber={studentPhoneNumber}
        studentEmail={studentEmail}
        studentNameHandler={studentNameHandler}
        studentClassHandler={studentClassHandler}
        studentPhoneNumberHandler={studentPhoneNumberHandler}
        studentEmailHandler={studentEmailHandler}
        clicked={addStudent}
        // {...props}
        
      />
      </React.Fragment>
        
    )
}
export default AddStudent;