import React from 'react';
import cl from "./Round.module.css";
import classes from "classnames"

const Round = ({id, img, className, active, isLogo=false, onClick, width=50, height=50}) => {

    const changeActive = (e) => {
        if (onClick) {
            onClick(e)
        }
    }

    return (
        <div draggable={false} onClick={(e) => changeActive(e)} className={active === id ? classes(cl.body, cl.active, className) : classes(cl.body, className)}
        style={{width: width, minWidth: width, height: height, minHeight: height}}>
            <img draggable={false} id={id} className={isLogo ? cl.logo : ""} src={img} alt=""/>
        </div>
    );
};

export default Round;