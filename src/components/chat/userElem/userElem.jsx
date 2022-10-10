import React from 'react';
import cl from "./userElem.module.css";
import logo from "../../../img/logo.png";
import Round from "../../Round/Round";
import classes from "classnames";

const UserElem = ({name, status, color}) => {
    return (
        <div className={status === "online" ? cl.wrapper : classes(cl.wrapper, cl.offline)}>
            <Round cursor={"default"} width={35} height={35} img={logo} isLogo={true} active={false}/>
            <div className={cl.text}>
                <h1 style={{color: color}}>{name}</h1>
            </div>
        </div>
    );
};

export default UserElem;