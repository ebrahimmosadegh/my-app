import React from "react";
import Modal from "../UI/Modal/Modal";
const ErrorHandler = (WrappedComponent)=>{
    return(props)=>{
        return(
            <React.Fragment>
                <Modal show={true}>
                    i think not working a thing .!
                </Modal>
                <WrappedComponent {...props} />
            </React.Fragment>
        )
    }
}
export default ErrorHandler;