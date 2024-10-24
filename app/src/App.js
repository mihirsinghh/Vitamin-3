import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home/Home.js";
import NotHome from "./pages/NotHome/NotHome.js";


function App() {
  return (
    <div className="App">
      <Navbar/>
  
      <Routes>
        <Route path = "/home" element = {<Home/>}/>
        <Route path = "/nothome" element = {<NotHome/>}/>
      </Routes>

    </div>
  );
}

export default App;
