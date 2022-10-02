import React, {useEffect, useState} from 'react';
import cl from "./MainPage.module.css";
import SidebarMain from "../components/sidebar/sidebarMain/sidebarMain";
import UpperBar from "../components/upperBar/upperBar";

const MainPage = ({id, active, data}) => {
    const chats = data.mainHall;
    const voices = data.voiceChat;

    const [visible, setVisible] = useState('none')
    const [currentChat, setCurrentChat] = useState(chats[0])

    useEffect(() => {
        active === id ? setVisible("block") : setVisible("none")
    }, [active])

    return (
        <div id={id} style={{display: visible}} className={cl.mainPage}>
            <SidebarMain setCurrent={setCurrentChat} current={currentChat} chats={chats} voices={voices}/>

            <div className={cl.mainArea}>
                <UpperBar chat={currentChat}/>


            </div>
        </div>
    );
};

export default MainPage;