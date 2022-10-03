import React from 'react';
import cl from "./userElem.module.css";
import logo from "../../../img/logo.png";
import Round from "../../Round/Round";
import classes from "classnames";

const UserElem = ({name, role, status}) => {
    return (
        <div className={status === "online" ? cl.wrapper : classes(cl.wrapper, cl.offline)}>
            <Round width={35} height={35} img={logo} isLogo={true} active={false}/>
            <div className={cl.text}>
                <h1 className={name === "Me" ? cl.me : null}>{name}</h1>
            </div>
        </div>
    );
};

export default UserElem;