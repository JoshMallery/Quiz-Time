import React from "react"
import { NavLink, Link } from "react-router-dom";
import "./Sidebar.css"

const SideBar = () => {

  return (
    <div className="sidebar">
      <NavLink className="nav-button" exact to="/">
        Home
      </NavLink>
      <br/>
      <br/>
      <NavLink className="nav-button" to="/settings">
        Trivia Settings
      </NavLink>
      <br/>
      <br/>
      <NavLink className="nav-button" to="/trivia">
        Play Trivia
      </NavLink>

    </div>
  )

}

export default SideBar;
