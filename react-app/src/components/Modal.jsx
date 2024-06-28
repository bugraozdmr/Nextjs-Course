import React from 'react'
import classes from './Modal.module.css'
import { useNavigate } from 'react-router-dom'

export default function Modal({children}) {
    const navigate = useNavigate(); 
    
    const closeHandler = () => {
        // kapatinca geri gidiyor
        navigate('/');
    }

    

  return (
    <>
    <div className={classes.backdrop} onClick={closeHandler} />
    <dialog open className={classes.modal}>
        {children}
    </dialog>
    </>
  )
}
