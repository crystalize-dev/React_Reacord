import React from 'react';
import cl from "./sideBarRight.module.css";
import UserElem from "../../chat/userElem/userElem";

const SideBarRight = ({admins, online, offline}) => {
    return (
        <div className={cl.onlineArea}>
            <h1>FEARLESS LEADER - {admins.length}</h1>
            {
                admins.map((user) => <UserElem key={user.name} name={user.name} status={user.status} color={user.color}/>)
            }
            <h1>MEMBERS - {online.length}</h1>
            {
                online.map((user) => <UserElem key={user.name} name={user.name} status={user.status} color={user.color}/>)
            }
            <h1>OFFLINE - {offline.length}</h1>
            {
                offline.map((user) => <UserElem key={user.name} name={user.name} status={user.status} color={user.color}/>)
            }
        </div>
    );
};

export default SideBarRight;