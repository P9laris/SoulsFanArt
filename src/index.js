import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import reactDOM from "react-dom/client";
import Encabezado from "./encabezado";
import './index.css';
import Desplegables from './desplegables';
import Nav from "./barraNav";
import "bootstrap-icons/font/bootstrap-icons.css";

const root = reactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
        <Encabezado />
        <Nav />
        <Desplegables />  
  </>
  );


