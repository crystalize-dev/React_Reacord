import './App.css';
import SideBar from "./components/sidebar/sidebarLeft/SideBar";
import {useState} from "react";
import MainPage from "./pages/MainPage";
import {groups1, users} from "./hardCode/hardCode";
import Modal from "./components/modal/modalGroup/modal";

function App() {
    const [active, setActive] = useState(null)
    const [modal, setModal] = useState(false)
    const [groups, setGroups] = useState(groups1)

    return (
        <div className="wrapper">
            <Modal setGroups={setGroups} modal={modal} setModal={setModal} groups={groups}/>
            <SideBar active={active} setActive={setActive} groups={groups} setModal={setModal}/>
            {
                groups.map((group) => <MainPage key={group.id} id={group.id} active={active} data={group}
                                                users={users}/>)
            }
        </div>
    );
}

export default App;
