import React from 'react';
import cl from "./Round.module.css";
import classes from "classnames"

const Round = ({id,
               img,
               className,
               active=false,
               isLogo=false,
               onClick,
               width=50,
               height=50,
               scale = 1,
               color,
               cursor}) => {

    const changeActive = (e) => {
        if (onClick) {
            onClick(e)
        }
    }

    if (color) isLogo = true;

    return (
        <div draggable={false} onClick={(e) => changeActive(e)} className={active === id ? classes(cl.body, cl.active, className) : classes(cl.body, className)}
        style={{width: width, minWidth: width, height: height, minHeight: height, background: color, cursor: cursor}}>
            <img draggable={false} id={id} className={isLogo ? cl.logo : ""} src={img} alt="" style={{transform: `scale(${scale})`}}/>
        </div>
    );
};

export default Round;