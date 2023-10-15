import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/header.css';
const Header = () => {

    const [activeTab, setActiveTab] = useState("Home");

    const location = useLocation();

    useEffect(() => {

        if (location.pathname === "/") {
            setActiveTab("Home");
        }
        else if (location.pathname === "/About") {
            setActiveTab("About");
        }
        else if (location.pathname === "/Registration") {
            setActiveTab("Registration");
        }
        else {
            setActiveTab("Report");
        }
    }

        , [location]);

    return (
        <div className='header'>
            <div className='logo'>
                Mycontact App
            </div>
            <div className="header-right">
                <Link to="/">
                    <p
                        className={`${activeTab === "Home" ? "active" : ""}`}
                        onClick={() => setActiveTab("Home")}
                    >Home</p>
                </Link>

                <Link to="About">

                    <p
                        className={`${activeTab === "About" ? "active" : ""}`}
                        onClick={() => setActiveTab("About")}
                    >About</p>
                </Link>

                <Link to="Registration">
                    <p
                        className={`${activeTab === "Registration" ? "active" : ""}`}
                        onClick={() => setActiveTab("Home")}
                    >Registration</p>
                </Link>

                <Link to="Report">
                    <p
                        className={`${activeTab === "Report" ? "active" : ""}`}
                        onClick={() => setActiveTab("Report")}
                    >Report</p>
                </Link>

            </div>
        </div>
    );
}
export default Header;