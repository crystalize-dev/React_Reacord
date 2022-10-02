import './App.css';
import SideBar from "./components/sidebar/SideBar";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import icon4 from "./img/icon4.png";
import {useState} from "react";
import MainPage from "./pages/MainPage";

function App() {
    const groups = [{id: "1", img: icon1},{id: "2", img: icon2},{id: "3", img: icon3},{id: "4", img: icon4}];
    const [active, setActive] = useState(null)

  return (
    <div className="wrapper">
      <SideBar active={active} setActive={setActive} groups={groups}/>
        <MainPage/>
    </div>
  );
}

export default App;
