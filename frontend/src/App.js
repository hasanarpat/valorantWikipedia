import { BrowserRouter as 
  Router, 
  Routes, 
  Route
} from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import {Home} from "./Components/Home/Home";
import {Agents} from "./Components/Agents/Agents";
import { SingleAgent } from "./Components/SingleAgent/SingleAgent";
import {Weapons} from "./Components/Weapons/Weapons";
import {Weapon} from "./Components/Weapon/Weapon";
import {Maps} from "./Components/Maps/Maps";
import {Map} from "./Components/Map/Map";

function App() {
  return (
    <Router>
      <header className="primary-header">
        <div className="header-container">
          <img onClick={()=>{window.open("/","_self")}} src={logo} alt="logo" />
          <div className="bar">
            
            <ul>
            <li>
                <button className="nav-button">
                  <a href="/">HOME</a>
                </button>
              </li>
              <li>
                <button className="nav-button">
                  <a href="/agents">AGENTS</a>
                </button>
              </li>
              <li>
                <button className="nav-button">
                  <a href="/weapons">WEAPONS</a>
                </button>
              </li>
              <li>
                <button className="nav-button">
                  <a href="/maps">MAPS</a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/agents" element={<Agents />}/>
        <Route path="/agent/:id" element={<SingleAgent/>}/>
        <Route  path="/weapons" element={<Weapons/>} />
        <Route  path="/weapon/:id" element={<Weapon />}/>
        <Route  path="/maps" element={<Maps />} />
        <Route  path="/map/:id" element={<Map />}/>
      </Routes>
      <div className="footer"></div>
    </Router>
  );
}

export default App;
