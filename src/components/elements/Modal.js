import React from "react";
import {Link} from 'react-router-dom'
import { useState } from 'react';
import styles from '../../assets/scss/core/elements/_modal.scss'
import main from './main'
import {useHistory } from 'react-router-dom';
// const [openPage, setOpenPage] = useState(false);


function Modal({closeModal}){
  const history = useHistory();

  const gotoMain = () =>{
    history.push('./main')
  }

  return(
    <center>
    <div className="modal-login-box">
      <div className="modal-login-container">
        <button className="modal-login-close" onClick={() => closeModal(false)}> X </button>
        <h1 className="title">Sign in</h1>
        <p>Login</p>
        <input placeholder="E-mail"></input>
        <p>Senha</p>
        <input placeholder="Senha"></input>
        <button className="modal-login-enter" onClick={gotoMain} >Entrar</button>
      </div>
    </div>
    </center>
  )
}


export default Modal