import React from "react";
import Sign from "./sign";
import Myimage from './Logo.jpg'


const Main = () => {
    return (
    <React.Fragment>
        <div className="App">
            <header>
                <img className="logo" src= {Myimage} alt="logo"/>
                    <nav>
                        <ul className="navbar">
                            <li><a href="/Page.html">About Us</a> </li>
                            <li><a href="#">Career</a> </li>
                            <li><a href="#">Departments</a> </li>
                            <li><a href="./sign">sign in</a></li>
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