import React from "react"
import { NavLink } from "react-router-dom";
import "./Sidebar.css"

const SideBar = () => {
  return (
    <div className="sidebar">
    <br/>
    <br/>
      <NavLink className="nav-button" exact to="/">
        Welcome Page
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
