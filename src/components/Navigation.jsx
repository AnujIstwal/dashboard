import React from "react";
import { NavLink } from "react-router-dom";

//importing svg icons
import Logo from "../assets/Logo.svg";
import Admin from "../assets/Group 1.svg";
import Calendar from "../assets/icon_calendar.svg";
import Cog from "../assets/icon_cog.svg";
import Home from "../assets/icon_home.svg";
import People from "../assets/icon_people.svg";

const navStyle = (isActive) => {
    return {
        color: "white",
        backgroundColor: isActive ? "#4e4e4e" : "#181818",
        textDecoration: "none",
    };
};

const Navigation = () => {
    return (
        <div className="navbar">
            <img src={Logo} alt="Logo" className="logo" />
            <div className="admin-group">
                <img src={Admin} alt="Logo" width={60} />
                <h2>Anuj Kumar</h2>
            </div>

            <nav className="nav-bar">
                <NavLink
                    to="/"
                    style={({ isActive }) => navStyle(isActive)}
                    className="nav-bar-item"
                >
                    <div className="nav-bar-item">
                        <img src={Home} alt="Icon" width={20} />
                        <li>Dashboard</li>
                    </div>
                </NavLink>

                <NavLink
                    to="/customer"
                    style={({ isActive }) => navStyle(isActive)}
                    className="nav-bar-item"
                >
                    <div className="nav-bar-item">
                        <img src={People} alt="Icon" width={20} />
                        <li>Customers</li>
                    </div>
                </NavLink>

                <NavLink
                    to="/solution"
                    style={({ isActive }) => navStyle(isActive)}
                    className="nav-bar-item"
                >
                    <div className="nav-bar-item">
                        <img src={Calendar} alt="Icon" width={20} />
                        <li>Solution</li>
                    </div>
                </NavLink>

                <NavLink
                    to="/setting"
                    style={({ isActive }) => navStyle(isActive)}
                    className="nav-bar-item"
                >
                    <div className="nav-bar-item">
                        <img src={Cog} alt="Icon" width={20} />
                        <li>Setting</li>
                    </div>
                </NavLink>
            </nav>
        </div>
    );
};

export default Navigation;
