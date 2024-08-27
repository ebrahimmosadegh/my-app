import React,{useState,useContext} from "react";
import { useNavigate } from "react-router";
import './Toolbar.css';
import Logo from "../../../components/logo/logo";
import MenuItems from "../MenuItems/MenuItems";
import Button from "../../../components/UI/button/button";
import Modal from "../../../components/UI/Modal/Modal";
import SignIn from "../../../components/user/signin/signin";
import SideDrawer from '../SideDrawer/SideDrawer';
import {AuthContext} from "../../../context/Auth/authContext";
import { ThemeContext } from "../../../context/Theme/themeContext";

const Toolbar=(props)=>{
    const navigate = useNavigate();
    const [showModal,setShowModal] = useState(false)
    const [openSideDrawer,setOpenSideDrawer] = useState(false);
    const authContext = useContext(AuthContext)
    const themeContext = useContext(ThemeContext);
    const {lightTheme, light, dark} = themeContext;
    const theme = lightTheme ?light:dark
    
    const modalHandler=()=>{
        setShowModal(true)
    }
    const modalclosed=()=>{
        setShowModal(false)
    }
    const DrawerHandler=()=>{
        setOpenSideDrawer(true)
    }
    const closeDrawer = ()=>{
        setOpenSideDrawer(false)
    }
    const logout = ()=>{
        authContext.dispatch({type:'logout'});
        navigate(`/`, { replace: true });
    }
    const themeHandler=()=>{
        themeContext.changeTheme();
    }
    let auth = false;
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo){
        auth = true
    }
    return(
        <header className="Toolbar" style={{background:theme.bg,color:theme.syntax}}>
            <SideDrawer show={openSideDrawer} closeDrawer={closeDrawer} />
            <div onClick={DrawerHandler}>Hamberger Icon</div>
            <span className="showNav" onClick={themeHandler}>
            <Logo height="80%" />
            </span>
            <span className="showNav">
            <nav>
                <MenuItems />
            </nav>
            </span>
            <span className="showNav">
            {auth?<Button btnType="danger" clicked={logout}>
                logout
                </Button>:<Button btnType="danger" clicked={modalHandler}>
                login or register
                </Button>}
            </span>
                    <Modal show={showModal} modalclosed={modalclosed}>
                    <SignIn />
                </Modal>
        </header>
    )
}
export default Toolbar;