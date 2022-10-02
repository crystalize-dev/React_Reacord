import React, {useState} from 'react';
import cl from "./sidebarMain.module.css";
import Icon from "../../Icon/Icon";
import classes from "classnames";
import ChatElem from "../../chat/chatElem";

const SidebarMain = ({chats, voices, current, setCurrent}) => {
    const [fullSizeChat, setFullSizeChat] = useState(true)
    const [fullSizeVoice, setFullSizeVoice] = useState(true)

    return (
        <div className={cl.sidebar}>
            <div className={cl.header}>
                <h1>Friends</h1>
                <Icon>more_horiz</Icon>
            </div>
            <div className={cl.chatArea}>
                <div>
                    <div className={cl.expandHeader} onClick={() => setFullSizeChat(!fullSizeChat)}>
                        <Icon>{fullSizeChat ? "expand_more" : "expand_less"}</Icon>
                        <h1>MAIN HALL</h1>
                    </div>
                    <div className={fullSizeChat ? cl.chat : classes(cl.chat, cl.invisible)}>
                        {
                            chats.map((chat) => <ChatElem obj={chat} setCurrent={setCurrent} active={current.chat === chat.chat} name={chat.chat} visible={fullSizeChat} type={"chat"}/>)
                        }
                    </div>
                </div>
                <div className={cl.voice}>
                    <div className={cl.expandHeader} onClick={() => setFullSizeVoice(!fullSizeVoice)}>
                        <Icon>{fullSizeVoice ? "expand_more" : "expand_less"}</Icon>
                        <h1>VOICE CHAT</h1>
                    </div>
                    <div className={fullSizeVoice ? cl.voiceBlock : classes(cl.voiceBlock, cl.invisible)}>
                        {
                            voices.map((voice) => <ChatElem name={voice.voice} visible={fullSizeVoice} type={"voice"}/>)
                        }
                    </div>
                </div>
                <div className={cl.overflow}/>
            </div>
        </div>
    );
};

export default SidebarMain;