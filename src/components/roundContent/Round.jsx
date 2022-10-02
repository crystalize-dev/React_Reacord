import React from 'react';
import cl from "./Round.module.css";
import classes from "classnames"

const Round = ({id, img, className, active, isLogo=false, onClick}) => {

    const changeActive = (e) => {
        if (onClick) {
            onClick(e)
        }
    }

    return (
        <div onClick={(e) => changeActive(e)} className={active === id ? classes(cl.body, cl.active, className) : classes(cl.body, className)}>
            <img id={id} className={isLogo ? cl.logo : ""} src={img} alt=""/>
        </div>
    );
};

export default Round;