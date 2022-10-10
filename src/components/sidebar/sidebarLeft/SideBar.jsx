import React, {useEffect} from 'react';
import cl from "./SideBar.module.css";
import Round from "../../Round/Round";
import logo from "../../../img/logo.png";
import add from "../../../img/add.png"
import classes from "classnames";

const SideBar = ({active, setActive, groups, setModal}) => {
    useEffect(() => {
        setActive(groups[0].id)
    }, [])

    const changeActive = (event) => {
        let curr = event.target.id;
        setActive(curr)
    }

    const resetActive = () => {
        setActive(groups[0].id)
    }

    return (
        <div className={cl.sideBar}>
            <div className={cl.logoArea}>
                <h1>Reacord</h1>
                <Round id={groups[0].id} img={logo} className={cl.roundLogo} isLogo={true} onClick={resetActive}/>
                <hr className={cl.line}/>
            </div>
            <div className={cl.groupsArea}>
                {
                    groups.map((group) => <div className={cl.roundArea}>
                                            <div className={active === group.id ? classes(cl.slider, cl.sliderFull) : cl.slider}/>
                                            <Round className={cl.round} color={group.color} active={active} id={group.id} key={group.id} img={group.logo} onClick={changeActive}/>
                                        </div>)
                }
                <Round className={cl.addGroup} active={false} img={add} isLogo={true} scale={0.3} onClick={() => setModal(true)}/>
                <div className={cl.overflow}/>
            </div>
        </div>
    );
};

export default SideBar;