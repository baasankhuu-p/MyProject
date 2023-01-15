import React from "react";
import Logo from "../../image/circle-white-bg.webp"
import Nav from "../Nav";
const Header = (props) => {
    return(
        <header className="header fixed-top default-header">
        <div className="container">
          <nav className="navbar navbar-expand-lg p-0">
            <a className="navbar-brand" href="javascript:void()">
              <img
                src={Logo}
                alt="Logo"
                style={{height: 50}}
                className="img-fluid logo-transparent"
              />
              <img
                src={Logo}
                alt="Logo"
                style={{height: 50}}
                className="img-fluid logo-normal"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#fixedNavbar"
              aria-controls="fixedNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="togler-icon-inner">
                <span className="line-1"></span>
                <span className="line-2"></span>
                <span className="line-3"></span>
              </span>
            </button>
            <div
              className="collapse navbar-collapse main-menu justify-content-end"
              id="fixedNavbar"
            >
              <ul className="navbar-nav">
                <Nav 
                    listclass="nav-item"
                    linkclass="nav-link"
                    nav="1"
                    expanded = "true"
                    url="javascript:void()"
                    name = "Бидний тухай"
                />
                
                <Nav 
                    listclass="nav-item"
                    linkclass="nav-link"
                    nav="2"
                    url="javascript:void()"
                    name = "Үйлчилгээ"
                />
                <Nav 
                    listclass="nav-item"
                    linkclass="nav-link"
                    nav="3"
                    url="javascript:void()"
                    name = "Бүтээлүүд"
                />
                <Nav 
                    listclass="nav-item"
                    linkclass="nav-link"
                    nav="4"
                    url="javascript:void()"
                    name = "Блог"
                />
                <Nav 
                    listclass="nav-item"
                    linkclass="nav-link"
                    nav="5"
                    url="javascript:void()"
                    name = "Холбоо барих"
                />
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
}
export default Header;