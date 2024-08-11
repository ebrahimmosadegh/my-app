import React,{useState, useEffect, useRef} from 'react';
import Students from '../components/students/students';
import Button from '../components/UI/button/button';
import { useNavigate } from 'react-router-dom';
import Spinner from '../components/UI/spinner/spinner';
import axios from 'axios';
const HomePage = (props)=>{
    const inputEl = useRef(null);
    const [searchBarValue,setSearchBarValue] = useState('');
    const[studentsState,setStudents]=useState([
        {id:0,name:'Mahdi',classNumber:204,phoneNumber:1234,email:'reactapp@gmail.com'},
        {id:1,name:'Alireza',classNumber:214,phoneNumber:12345,email:'reactapp@gmail.com'},
        {id:2,name:'Ali',classNumber:224,phoneNumber:123456,email:'reactapp@gmail.com'},
        {id:3,name:'Amirhossien',classNumber:234,phoneNumber:1234567,email:'reactapp@gmail.com'},
      ]);
    const [arrayHolder,setArrayHolder] = useState([]);
    const[toggle,setToggle]=useState(false);
    const[loading,setLoading]= useState(false);
    
    const searchFilterFunction=(event)=>{
        const itemData = arrayHolder.filter((item)=>{
        const itemData = item.name.toUpperCase();
        const textData = event.target.value.toUpperCase();
        return itemData.indexOf(textData)>-1
          
        })
        setStudents(itemData);
        setSearchBarValue(event.target.value)
    
      }
      useEffect(()=>{
        setArrayHolder(studentsState);
        inputEl.current.focus();
        // console.log(props);
        setLoading(true)
        axios.get('/posts')
        .then(response=>{
          console.log(response.data)
          const students = response.data.slice(0,3);
          const updatedStudents = students.map(student=>{
            return{
              ...student,
              score:20
            }
          })
           setStudents(updatedStudents);
           setLoading(false)
        })
      },[])
      const nameChangeHandler=(event,id)=>{
        const studentIndex = studentsState.findIndex(student=>{
          return student.id===id;
        })
        //console.log(studentIndex);
        const student={...studentsState[studentIndex]};
        //console.log(student);
        student.name=event.target.value;
        const students = [...studentsState];
        students[studentIndex]=student;
        setStudents(students);
      }
      const deleteStudent=(id)=>{
        const students=[...studentsState];
        students.splice((id),1);
        axios.delete(`/posts/${id}`)
        .then(response=>{
            console.log(response)
        })
        console.log(id)
        setStudents(students)
      }
      const toggleHandler=()=>{
        // console.log(toggle)
        setToggle(!toggle)
      }
      const navigate = useNavigate();
      const edited = (id)=>{
          // console.log(props);
          // props.history.push('/student/'+id);
          navigate('/student/'+ id)
      }
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
                nameChanged={nameChangeHandler}
                deleted={deleteStudent}
                toggle={toggle}
                edited={edited}
            />
            }
            
        </React.Fragment>
    )
}
export default React.memo(HomePage);