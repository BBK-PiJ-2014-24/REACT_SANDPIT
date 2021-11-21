import React from 'react';
import './Modal.css';

const Modal = (props) => {

    return (
        <div className='modal-container'>
            <div className='modal'>
                {props.children}
                <button onClick={props.handleModalClose}>Close</button>
            </div>
        </div>
    )

}

export default Modal;