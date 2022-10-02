import React, {useEffect, useState} from 'react';
import cl from "./SideBar.module.css";
import Round from "../../Round/Round";
import logo from "../../../img/logo.png";

const SideBar = ({active, setActive, groups}) => {
    const [offset, setOffset] = useState(10)

    useEffect(() => {
        setActive(groups[0].name)
    }, [])

    const changeActive = (event) => {
        let curr = event.target.id;
        setOffset(10 + ((50 + 10)*(parseInt(curr) - 1)))
        setActive(curr)
    }

    const resetActive = () => {
        setOffset(10)
        setActive(groups[0].name)
    }

    return (
        <div className={cl.sideBar}>
            <div className={cl.logoArea}>
                <h1>Reacord</h1>
                <Round id={groups[0].name} img={logo} className={cl.roundLogo} isLogo={true} onClick={resetActive}/>
                <hr className={cl.line}/>
            </div>
            <div className={cl.groupsArea}>
                <div className={cl.slider} style={{marginTop: offset}}/>
                {
                    groups.map((group) => <Round active={active} id={group.name} key={group.name} img={group.logo} onClick={changeActive}/>)
                }

                <div className={cl.overflow}>
                </div>
            </div>
        </div>
    );
};

export default SideBar;