import React from "react";
import { Helmet } from "react-helmet";

//Styles
import "../styles/custom.css"
import logo from "../images/logo.png"
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js'

const Navigation = () => {
    return(
        <>
        <Helmet>
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" 
            integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
        </Helmet>
        <div className="navbar-fixed">
             <nav>
                <div className="nav-wrapper container">
                    <a href="/" className="brand-logo">
                        <img src={logo} width="100px"/>
                    </a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/about">About</a></li>
                        <li><a href="">Statistics</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a class="waves-effect waves-light btn-small">
                            Membership</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        </>
    )
}

export default Navigation;