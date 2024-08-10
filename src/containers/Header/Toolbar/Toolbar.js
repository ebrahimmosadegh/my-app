import React,{useState} from "react";
import './Toolbar.css';
import Logo from "../../../components/logo/logo";
import MenuItems from "../MenuItems/MenuItems";
import Button from "../../../components/UI/button/button";
import Modal from "../../../components/UI/Modal/Modal";
import SignIn from "../../../components/user/signin/signin";
import SideDrawer from '../SideDrawer/SideDrawer';

const Toolbar=(props)=>{
    const [showModal,setShowModal] = useState(false)
    const [openSideDrawer,setOpenSideDrawer] = useState(false);
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
    return(
        <header className="Toolbar">
            <SideDrawer show={openSideDrawer} closeDrawer={closeDrawer} />
            <div onClick={DrawerHandler}>Hamberger Icon</div>
            <span className="showNav">
            <Logo height="80%" />
            </span>
            <span className="showNav">
            <nav>
                <MenuItems />
            </nav>
            </span>
            <span className="showNav">
            <Button btnType="danger" clicked={modalHandler}>
                login or register
                </Button>
            </span>
                    <Modal show={showModal} modalclosed={modalclosed}>
                    <SignIn />
                </Modal>
        </header>
    )
}
export default Toolbar;