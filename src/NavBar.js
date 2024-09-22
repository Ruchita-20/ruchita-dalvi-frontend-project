import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css'; 


export default function NavBar() {
  return (
    <div style={{margin:'10px 40px'}}>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#080809', color: 'white' }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: 'white' }}>WeFo</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: 'white' }}>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" style={{ color: 'white' }}>Link</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: 'white' }}
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true" style={{ color: 'gray' }}>Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-light" type="submit">
                Start a project <i className="bi bi-arrow-up-right"></i>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
