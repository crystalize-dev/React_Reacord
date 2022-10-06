import React, {useEffect, useState} from 'react';
import cl from "./modal.module.css";
import Icon from "../Icon/Icon";
import Round from "../Round/Round";
import logo from "../../img/logo.png"
import {createGroup, getRandomColor} from "../../hardCode/utility";
import classes from "classnames";

const Modal = ({modal, setModal, groups, setGroups}) => {

    const [color, setColor] = useState(getRandomColor())
    const [serverName, setServerName] = useState("");
    const [rotate, setRotate] = useState(0)

    const addGroup = (e) => {

        e.preventDefault();

        if (serverName === "") return

        setGroups([...groups, createGroup(String(groups.length + 1), color, logo)])

        setServerName("")
        setModal(false)
    }

    const changeColor = () => {
        setRotate(rotate + 360)
        setColor(getRandomColor())
    }

    return (
        <div className={modal ? cl.wrapper : classes(cl.wrapper, cl.invisible)} onMouseDown={() => setModal(false)}>
            <form onSubmit={(e) => addGroup(e)} className={cl.window} onMouseDown={(e) => e.stopPropagation()}>
                <Icon onClick={() => setModal(false)}>close</Icon>
                <div className={cl.textArea}>
                    <h1>Create your own group!</h1>
                    <p>personalize you server by choosing it's name. It can be changed at any time!</p>
                </div>

                <Round color={color} img={logo} width={80} height={80} active={false} isLogo={true}/>
                <Icon style={{transform: `rotate(${rotate}deg)`}} onClick={changeColor}>refresh</Icon>

                <div className={cl.inputArea}>
                    <p>Servers name</p>
                    <input value={serverName} onChange={(e) => setServerName(e.target.value)} type="text" placeholder="My server"/>
                </div>

                <div className={cl.buttonsArea}>
                    <button onClick={() => setModal(false)}>Back</button>
                    <button onClick={addGroup}>Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default Modal;