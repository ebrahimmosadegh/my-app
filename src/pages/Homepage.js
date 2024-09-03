import React,{useState, useEffect, useRef, useContext} from 'react';
import Students from '../components/students/students';
import Button from '../components/UI/button/button';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/UI/spinner/spinner';
import ErrorHandler from '../components/hoc/ErrorHandler';
import { AuthContext } from '../context/Auth/authContext';
import { StudentsContext } from '../context/Students/studentsContext';
import axios from '../axios';
import { type } from '@testing-library/user-event/dist/type';
const HomePage = (props)=>{
    const {authenticated} = useContext(AuthContext);
    const inputEl = useRef(null);
    const [searchBarValue,setSearchBarValue] = useState('');
    
    const [arrayHolder,setArrayHolder] = useState([]);
    const[toggle,setToggle]=useState(false);
    const[loading,setLoading]= useState(false);
    const{dispatch,studentsState} = useContext(StudentsContext)
    const searchFilterFunction=(event)=>{
        const itemData = arrayHolder.filter((item)=>{
        const itemData = item.student_name.toUpperCase();
        const textData = event.target.value.toUpperCase();
        return itemData.indexOf(textData)>-1
          
        })
        // setStudents(itemData);
        dispatch({type:'search',payload:itemData});
        setSearchBarValue(event.target.value)
    
      }
      useEffect(()=>{
        
        inputEl.current.focus();
        // console.log(props);
        setLoading(true)
        // ip: http://192.168.43.112
        fetch('http://localhost/student/showStudent.php')
        .then((response)=>response.json())
        .then((responseJson)=>{
          setLoading(false);
          dispatch({type:'fetch',payload:responseJson});
          setArrayHolder(responseJson);
        })
        // axios.get('/posts')
        // .then(response=>{
        //   console.log(response.data)
        //   const students = response.data.slice(0,3);
        //   const updatedStudents = students.map(student=>{
        //     return{
        //       ...student,
        //       score:20
        //     }
        //   })
        //    setStudents(updatedStudents);
        //    setLoading(false)
        // })
      },[])
      // useEffect(()=>{

      // },[studentsState])
      
      const deleteStudent=(id)=>{
        if(!authenticated){
          alert('not allow this ')
          return false;
        }
        else{
          fetch('http://localhost/student/deleteStudent.php',{
            method:'POST',
            headers:{
              'Accept' : 'application/json',
              'Content-Type':'application/json',
            },
            body:JSON.stringify({
              student_id:id
            })
          }).then((response)=>response.json())
            .then((responseJson)=>{
              dispatch({type:'remove', id:id})
            }).catch((error)=>{
              alert(error)
            })
        // console.log(id)
        // setStudents(students)
        }
        
      }
      const toggleHandler=()=>{
        setToggle(!toggle)
      }
      const navigate = useNavigate();
      const edited = (id,name,classNumber,phoneNumber,email)=>{
          navigate(
            '/student/'+ id,
            {
              state:{
                id:id,
                name:name,
                classNumber:classNumber,
                phoneNumber:phoneNumber,
                email:email
              }
          }
        );
      };
    return(
        <React.Fragment>
            <input type="text" value={searchBarValue} onChange={searchFilterFunction} className="search-bar" ref={inputEl} style={{marginTop:'70px'}} />
            <Button
                btnType="success"
                clicked={toggleHandler}
                >
                    diffrent show 
            </Button>
            {
              loading ?<Spinner />:
              <Students
                studentsList={studentsState}
                deleted={deleteStudent}
                toggle={toggle}
                edited={edited}
            />
            }
        </React.Fragment>
    )
}
export default React.memo(HomePage);
// export default React.memo(ErrorHandler(HomePage));