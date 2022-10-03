import React from 'react';
import cl from "./upperBar.module.css";
import Icon from "../Icon/Icon";

const UpperBar = ({chat}) => {
    return (
        <div className={cl.upperBar}>
            <div className={cl.textArea}>
                <Icon>grid_3x3</Icon>
                <h1>{chat.chat}</h1>
                <hr/>
                <h2>{chat.description}</h2>
            </div>
            <div className={cl.iconsArea}>
                <Icon>notifications</Icon>
                <Icon>push_pin</Icon>
                <Icon>group</Icon>
                <input placeholder={"Search"}/>
                <Icon>search</Icon>
                <Icon>download</Icon>
                <Icon>alternate_email</Icon>
                <Icon>help</Icon>
                <div className={cl.overflow}/>
            </div>
        </div>
    );
};

export default UpperBar;