import React from 'react';
import cl from "./messageElem.module.css";
import Round from "../../Round/Round";
import logo from "../../../img/logo.png"

const MessageElem = ({message, sender, color}) => {
    return (
        <div className={cl.wrapper}>
            <Round width={40} height={40} img={logo} isLogo={true} active={false}/>
            <div className={cl.textArea}>
                <h1 style={{color: color}}>{sender}</h1>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default MessageElem;