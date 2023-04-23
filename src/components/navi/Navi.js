import React, { useEffect, useRef, useState } from "react";
import "./Navi.scss";
import iplik from "../../assets/iplik.png";
import turkey from "../../assets/turkey.png";
import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
} from "reactstrap";
const Navi = () => {
  const windowWidth = useRef(window.innerWidth);
  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);
  useEffect(() => {
    if (windowWidth.current > 600) {
      function scrollFunction() {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          document.getElementById("logo").style.width = "25%";
          document.getElementById("logo").style.height = "90%";
          document.getElementById("navbar-main").style.background = "gray";
          document.getElementById("navbar-main").style.opacity = "0.96";
          document.getElementById("navbar-main").style.height = "10vh";
        } else {
          document.getElementById("logo").style.width = "30%";
          document.getElementById("navbar-main").style.opacity = "1";
          document.getElementById("navbar-main").style.height = "15vh";
          document.getElementById("logo").style.height = "70%";
          document.getElementById("navbar-main").style.background =
            "linear-gradient(180deg, rgba(255,255,255,0.8323704481792717) 0%, rgba(255,255,255,0.3) 100%)";
          document.getElementById("navbar-main").style.opacity = "1";
        }
      }
      window.onscroll = function () {
        scrollFunction();
      };
    }
  }, []);
  return (
    <div>
      {windowWidth.current >= 600 ? (
        <div id="navbar-main">
          <div id="logo">
            <img id="iplik-logo" src={iplik} alt="logo"></img>
          </div>
          <div></div>
          <div></div>

          <NavLink
            to="/"
            id="navlink"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "black",
            })}
          >
            Ana Sayfa
          </NavLink>
          <NavLink
            to="/aboutus"
            id="navlink"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "black",
            })}
          >
            Kurumsal
          </NavLink>
          <NavLink
            to="/production"
            id="navlink"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "black",
            })}
          >
            Üretim
          </NavLink>
          <NavLink
            to="/media"
            id="navlink"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "black",
            })}
          >
            Medya
          </NavLink>
          <NavLink
            to="/contact"
            id="navlink"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "black",
            })}
          >
            İletişim
          </NavLink>

          <div className="nav-btn">
            <img id="flag" src={turkey} alt="turkey flag"></img>
          </div>
        </div>
      ) : (
        <Navbar id="mobile-navbar" color="faded" light>
         
         
              <img id="iplik-logo" src={iplik} alt="logo"></img>
           
       
          <NavbarToggler id="nav-tog" onClick={toggleNavbar} className="me-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem style={{marginTop:'2em'}}>
                <NavLink
                  to="/"
                  id="navlink"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                  }) }
                  
                >
                  Ana Sayfa
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/aboutus"
                  id="navlink"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                  })}
                >
                  Kurumsal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/production"
                  id="navlink"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                  })}
                >
                  Üretim
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/media"
                  id="navlink"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                  })}
                >
                  Medya
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/contact"
                  id="navlink"
                  style={({ isActive }) => ({
                    color: isActive ? "orange" : "black",
                  })}
                >
                  İletişim
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </div>
  );
};

export default Navi;
