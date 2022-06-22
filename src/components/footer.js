import React from "react";

//Styles
// import "../styles/custom.css"
// import logo from "../images/logo.png"
// import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min.js'
// import 'font-awesome/css/font-awesome.min.css'

const Footer = () => {
    return(
        <>
        
        <footer className="page-footer">
             <div className="footer container">
                <div class="row">
                    <div class="col l12 s12">
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-facebook-square"></i>
                        <i class="fab fa-linkedin"></i>
                    </div>
                    <div className="copyright">
                        <p><i class="far fa-copyright"></i> 2021 All Rights Reserved. </p>
                    </div>
                </div>
             </div>
        </footer>
        </>
    )
}

export default Footer;