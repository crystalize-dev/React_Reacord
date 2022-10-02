import React, {useEffect, useState} from 'react';
import cl from "./SideBar.module.css";
import Round from "../roundContent/Round";
import logo from "../../img/logo.png";

const SideBar = ({active, setActive, groups}) => {
    const [offset, setOffset] = useState(10)

    useEffect(() => {
        setActive(groups[0].id)
    }, [])

    const changeActive = (event) => {
        let curr = event.target.id;
        setOffset(10 + ((50 + 10)*(parseInt(curr) - 1)))
        setActive(curr)
    }

    const resetActive = () => {
        setOffset(10)
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
                <div className={cl.slider} style={{marginTop: offset}}/>
                {
                    groups.map((group) => <Round active={active} id={group.id} key={group.id} img={group.img} onClick={changeActive}/>)
                }

                <div className={cl.overflow}>
                </div>
            </div>
        </div>
    );
};

export default SideBar;