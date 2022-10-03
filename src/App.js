import './App.css';
import SideBar from "./components/sidebar/sidebarLeft/SideBar";
import {useState} from "react";
import MainPage from "./pages/MainPage";
import {groups, users} from "./hardCode/hardCode";

function App() {
    const [active, setActive] = useState(null)

  return (
    <div className="wrapper">
      <SideBar active={active} setActive={setActive} groups={groups}/>
        {
            groups.map((group) => <MainPage key={group.name} id={group.name} active={active} data={group} users={users}/>)
        }
    </div>
  );
}

export default App;
