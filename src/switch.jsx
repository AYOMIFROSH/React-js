import React from "react";
import Sign from "./sign";
import { Link } from 'react-router-dom';

const Main = () => {
    return (
    <React.Fragment>
        <div className="App">
            {/*creating the navbar*/}
            <header>
                <img className="logo" src="Logo.jpg" alt="logo"/>
                <nav>
                    <ul className="navbar">
                        <li><a href="/Page.html">About Us</a> </li>
                        <li><a href="#">Career</a> </li>
                        <li><a href="#">Departments</a> </li>
                        <li><Link to="/sign.jsx">Sign in</Link></li>
                    </ul>
                </nav>
            </header>
            <div>
                <h1>First React App</h1>
            </div>
        </div>
    </React.Fragment>
    );
}

export default Main;