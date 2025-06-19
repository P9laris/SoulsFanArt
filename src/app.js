import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from "./barraNav";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
import Home from "./Home";
import Login from "./Login";
import Registro from "./registro"
import Perfil from "./perfil"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
    return (
    <Router>
        <Nav />
            <Routes>
                    <Route path= "/" element= { <Home/> }/>
                    < Route path = "/login" element={<Login/>}/>
                    <Route path = "/registro" element = { <Registro/>}/>
                    <Route path = "/perfil" element = {<Perfil/>}/>               
            </Routes>
    </Router>
    )
}

export default App ;