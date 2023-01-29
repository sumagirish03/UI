import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../hvlogo.png";

function Navbar() {
    return (
        <div className="header">
            <div className="leftSect">
                <Link to="/"><div className="flex logo">
                    <img src={logo} width="90%" height="90%" alt="" />
                </div></Link>
                <div className="flex menu">
                    <div className="flex nav-links">
                        <Link to="/" className="navSelected">
                            Dashboard
            </Link>
                        <Link to="/profile">Application Profile</Link>
                        <Link to="/appliedjobs">Applied Jobs</Link>
                        <div>Activity</div>
                        <div>Job Agent</div>
                    </div>
                </div>
            </div>

            <div className="flex right"></div>
        </div>
    );
}
export default Navbar;
