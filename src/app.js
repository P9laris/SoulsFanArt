import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Nav from "./barraNav";
import reactDOM from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import './index.css';
import Home from "./Home";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route, Form } from "react-router-dom";


function App() {
    return (
    <Router>
        <Nav />
            <Routes>
                    <Route path= "/" element= { <Home/> }/>
                    < Route path = "/login" element={<Login/>}/>
               
            </Routes>
    </Router>
    )
}

export default App ;