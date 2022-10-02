import React, {useEffect, useState} from 'react';
import cl from "./MainPage.module.css";
import SidebarMain from "../components/sidebar/sidebarMain/sidebarMain";

const MainPage = ({id, active, data}) => {
    const [visible, setVisible] = useState('none')

    useEffect(() => {
        active === id ? setVisible("block") : setVisible("none")
    }, [active])

    const chats = data.mainHall;
    const voices = data.voiceChat;

    return (
        <div id={id} style={{display: visible}} className={cl.mainPage}>
            <SidebarMain chats={chats} voices={voices}/>

            <div className={cl.mainArea}>
                <div className={cl.header}>

                </div>
            </div>
        </div>
    );
};

export default MainPage;