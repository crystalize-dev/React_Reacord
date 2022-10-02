import React from 'react';
import cl from "./chatElem.module.css";
import Icon from "../Icon/Icon";
import classes from "classnames";

const ChatElem = ({name, visible, type}) => {
    return (
        <div className={visible ? cl.wrapper : classes(cl.wrapper, cl.invisible)}>
            <Icon>{type === "chat" ? "grid_3x3" : "volume_up"}</Icon>
            <p>{name}</p>
        </div>
    );
};

export default ChatElem;