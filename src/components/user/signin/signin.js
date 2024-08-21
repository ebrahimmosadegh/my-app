import React,{useState, useEffect, useContext} from "react";
import reactapplogo from '../../../assets/images/reactapp-logo.png';
import reloadimage from '../../../assets/images/reload_image.jpg';
import './signin.css'
import Button from "../../UI/button/button";
import {AuthContext} from "../../../context/Auth/authContext";
import { type } from "@testing-library/user-event/dist/type";
const SignIn = (props)=>{
    const[randomNumber1,setRandomNumber1]= useState(0);
    const[randomNumber2,setRandomNumber2]= useState(0);
    const[sumHolder,setSumHolder]= useState(0);
    const[captchaValue,setCaptchaValue] = useState(0);
    const[errorMessage,setErrorMessage] = useState('');
    const[username,setUsername] = useState('');
    const[password,setPassword] = useState('');
    const {dispatch} = useContext(AuthContext);
    useEffect(()=>{
        generateCaptcha();
    },[])
    const generateCaptcha=()=>{
        let number1 = Math.floor(Math.random()*10)+1;
        let number2 = Math.floor(Math.random()*10)+1;
        setRandomNumber1(number1);
        setRandomNumber2(number2);
        let sum = number1 + number2;
        setSumHolder(sum);
    }
    const captchaHandeler=(event)=>{
        setCaptchaValue(Number(event.target.value));
    }
    const validate=()=>{
        if(username===''){
            setErrorMessage('username empty');
            return false;
        }
        else if(!username.includes('@') || !username.includes('.')){
            setErrorMessage('username invalid');
            return false;
        }
        else if(password ===''){
            setErrorMessage('password empty');
            return false;
        }
        else if(password.length < 4){
            setErrorMessage('password < 4');
            return false;
        }
        setErrorMessage('');
        return true;
    }
    const loginHandler=()=>{
        if(sumHolder===captchaValue){
            setErrorMessage('');
            const validateResult = validate();
            if(validateResult){
                fetch('http://192.168.43.112/student/user_login.php',{
                    method:'POST',
                    headers:{
                        'Accept':'application/json',
                        'Content-Type':'application/json',
                    },
                    body:JSON.stringify({
                        email:username,
                        password:password
                    })
                }).then((response)=>response.json())
                    .then((responseJson)=>{
                        if(responseJson==="Data Matched"){
                            dispatch({type:'login', payload:username});
                        }
                        else{
                            setErrorMessage(responseJson)
                        }
                    }).catch((error)=>{
                        alert(error)
                    })
            }
        }
        else{
            setErrorMessage('captcha Invalid');
            return false;
        }
    }
    const usernameHandler=(event)=>{
        setUsername(event.target.value);
    }
    const passwordHandler=(event)=>{
        setPassword(event.target.value);
    }
    return(
    <React.Fragment>
        <p style={{color:'red',fontSize:'56'}}>{errorMessage}</p>
        <img src={reactapplogo} alt="react app" />
        <input type="text" placeholder="username" value={username} onChange={usernameHandler} />
        <input type="password" placeholder="password" value={password} onChange={passwordHandler} />
        <div className="captcha_view">
            <img src={reloadimage} alt="reloaded image" onClick={generateCaptcha} />
            <input type="text" onChange={captchaHandeler} />
            <p>{randomNumber1} + {randomNumber2} =</p>
        </div>
        <Button btnType="danger" clicked={loginHandler}>login</Button>
    </React.Fragment> 
    )
}
export default React.memo(SignIn);