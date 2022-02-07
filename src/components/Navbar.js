import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { SidebarData } from "./SidebarData";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  function ShowSidebar() {
    return setSidebar(!sidebar);
  }
  console.log(sidebar);
  return (
    <>
      <div className="navbar">
        <NavLink to="#" className="menu-bars">
          <FaBars onClick={ShowSidebar} style={{ color: "white" }} />
        </NavLink>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={ShowSidebar}>
          <li className="navbar-toggle">
            <NavLink to="#" className="menu-bars">
              <AiOutlineClose style={{ color: "white" }} />
            </NavLink>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink to={item.path}>
                  {item.icon}
                  <span style={{ color: "white" }}>{item.title}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
