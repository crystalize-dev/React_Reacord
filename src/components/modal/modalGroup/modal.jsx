import React, {useState} from 'react';
import cl from "./modal.module.css";
import Icon from "../../Icon/Icon";
import Round from "../../Round/Round";
import logo from "../../../img/logoWhite.png"
import {createGroup, getRandomColor} from "../../../hardCode/utility";
import classes from "classnames";

const Modal = ({modal, setModal, groups, setGroups}) => {

    const [color, setColor] = useState(getRandomColor())
    const [serverName, setServerName] = useState("");
    const [rotate, setRotate] = useState(0)
    const [buttonError, setButtonError] = useState(false)

    const addGroup = (e) => {

        e.preventDefault();

        if (serverName === "") return

        setGroups([...groups, createGroup(String(groups.length + 1), serverName, color, logo)])

        setServerName("")
        setModal(false)
    }

    const changeColor = () => {
        setRotate(rotate + 360)
        setColor(getRandomColor())
    }

    const checkName = (e) => {
        setServerName(e.target.value)

        if (serverName.length > 20) setButtonError(true)
        else setButtonError(false)
    }


    return (
        <div className={modal ? cl.wrapper : classes(cl.wrapper, cl.invisible)} onMouseDown={() => setModal(false)}>
            <form onSubmit={(e) => addGroup(e)} className={cl.window} onMouseDown={(e) => e.stopPropagation()}>
                <Icon onClick={() => setModal(false)}>close</Icon>
                <div className={cl.textArea}>
                    <h1>CREATE YOUR OWN GROUP</h1>
                    <p>personalize you server by choosing it's name. It can be changed at any time!</p>
                </div>

                <Round color={color} img={logo} width={80} height={80} active={false} isLogo={true}/>
                <Icon style={{transform: `rotate(${rotate}deg)`}} onClick={changeColor}>refresh</Icon>

                <div className={cl.inputArea}>
                    <p>Servers name</p> <p className={buttonError ? cl.error : classes(cl.error, cl.errorHide)}>Server name must be less than 20 symbols!</p>
                    <input value={serverName} onChange={(e) => checkName(e)} type="text" placeholder="My server"/>
                </div>

                <div className={cl.buttonsArea}>
                    <button onClick={() => setModal(false)}>Back</button>
                    <button className={buttonError ? cl.disabled : null} disabled={buttonError} onClick={addGroup}>Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default Modal;