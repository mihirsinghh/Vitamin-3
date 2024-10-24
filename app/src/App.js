import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import {Route, Switch} from 'react-router-dom';
import Home from "./pages/Home";
import NotHome from "./pages/NotHome";


function App() {
  return (
    <div className="App">
      <Navbar/>
  
      <Switch>
        <Route path = "/home" component = {Home}/>
        <Route path = "/nothome" component = {NotHome}/>
      </Switch>

    </div>
  );
}

export default App;
