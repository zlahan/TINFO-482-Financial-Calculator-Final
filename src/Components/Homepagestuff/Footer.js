import React from 'react';
import "./Home.css"
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    <br />
                    <div className="col">
                        <NavLink to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
                        <h2>Ram & Bytes</h2>
                        </NavLink>
                        <br />
                        <ul className="list">
                            <NavLink to="https://www.tacoma.uw.edu/">
                            <nav>University of Washington Tacoma</nav>
                            </NavLink>
                            <NavLink to="https://www.tacoma.uw.edu/home/contact-us">
                            <nav>253-692-4000</nav>
                            </NavLink>
                            <NavLink to=
                            "https://www.google.com/maps/place/University+of+Washington+Tacoma/@47.2454443,-122.4407048,1035m/data=!3m1!1e3!4m6!3m5!1s0x549055772da1305b:0x6f3b85e2bcf6e6bf!8m2!3d47.2454407!4d-122.4385161!16zL20vMDluZ2J6">
                            <nav>1900 Commerce St.</nav>
                            </NavLink>
                            <nav>Tacoma, WA</nav>
                        </ul>
                    </div>
                </div>
                
                <br />
                <div className="row">
                    <nav className="col-sm">
                        &copy;{new Date().getFullYear()} Ram & Bytes | ALL RIGHTS RESERVED | PRIVACY NOTICE | CONTACT US, BUT DON'T PLS
                    </nav>
                </div>
             </div> 
        </div>    
    )
}

export default Footer;