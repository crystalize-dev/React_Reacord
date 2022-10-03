import React, {useEffect, useState} from 'react';
import cl from "./MainPage.module.css";
import SidebarMain from "../components/sidebar/sidebarMain/sidebarMain";
import UpperBar from "../components/upperBar/upperBar";
import Icon from "../components/Icon/Icon";
import MessageElem from "../components/chat/messageElem/messageElem";
import UserElem from "../components/chat/userElem/userElem";
import SideBarRight from "../components/sidebar/sideBarRight/sideBarRight";

const MainPage = ({id, active, data, users}) => {
    const chats = data.mainHall;
    const voices = data.voiceChat;

    const online = users.filter(user => (user.status === "online" && user.role !== "admin"))
    const admins = users.filter(user => user.role === "admin")
    const offline = users.filter(user => user.status === "offline")

    const [visible, setVisible] = useState('none')
    const [currentChat, setCurrentChat] = useState(chats[0])
    const [inputMessage, setInputMessage] = useState('')

    useEffect(() => {
        active === id ? setVisible("block") : setVisible("none")
    }, [active])

    const submit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(currentChat);
        setInputMessage('')
    }

    return (
        <div id={id} style={{display: visible}} className={cl.mainPage}>
            <SidebarMain setCurrent={setCurrentChat} current={currentChat} chats={chats} voices={voices}/>

            <div className={cl.mainArea}>
                <UpperBar chat={currentChat}/>

                <div className={cl.mainChatArea}>
                    <form className={cl.chatArea} onSubmit={(e) => submit(e)}>
                        <div className={cl.messageArea}>
                            {
                                currentChat.messages.map((message) => <MessageElem key={message.message} sender={message.sender} message={message.message}/>)
                            }
                        </div>
                        <Icon>add_circle</Icon>

                        <input type="text"
                               placeholder={"Message"}
                               value={inputMessage}
                               onChange={(e) => setInputMessage(e.target.value)}/>
                    </form>

                    <SideBarRight online={online} admins={admins} offline={offline}/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;