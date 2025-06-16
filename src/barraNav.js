import React from "react"
import { Link } from "react-router-dom";


function Nav() {
    return (
<nav class="navbar navbar-expand-lg bg-body-tertiary container mt-4 ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          < Link class="nav-link" aria-current="page" to = "/">Home</Link>
        </li>
        <li class="nav-item">
          <a className="nav-link" >Features</a>
        </li>
        <li class="nav-item">
          <Link className="nav-link" to = "/Login">Iniciar Sesión</Link>
        </li>
      </ul>
      <span class="navbar-text">
        
      </span>
      <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit"><i className="bi bi-search"></i></button>
    </form>
    </div>
  </div>
</nav>
    );
}
export default Nav