import React from 'react';
import cl from "./chatElem.module.css";
import Icon from "../Icon/Icon";
import classes from "classnames";

const ChatElem = ({name, visible, type, active, setCurrent, obj}) => {

    return (
        <div className={visible ? active ? classes(cl.wrapper, cl.active) : cl.wrapper : active ? classes(cl.wrapper, cl.invisible, active) :  classes(cl.wrapper, cl.invisible)}
        onClick={type === "chat" ? () => setCurrent(obj) : null}>
            <Icon>{type === "chat" ? "grid_3x3" : "volume_up"}</Icon>
            <p>{name}</p>
        </div>
    );
};

export default ChatElem;