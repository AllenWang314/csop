import React from 'react';
import './NavBar.css';
import { NavLink } from 'react-router-dom';
import logo from './CSOP Logo.png';


class NavBar extends React.Component {
    constructor(props) {
        super(props);
        // Initialize Default State
        this.state = {};
    }
    render() {
        return (
            <div className="NavBar">
                <NavLink to="/">
                    <img className="Logo" src={logo} />
                </NavLink>
                <nav>
                    <ul className="NavLinks">
                        <li><NavLink to="/about" className="AboutLink"> About </NavLink></li>
                        <li><NavLink to="/format" className="AboutLink"> Format </NavLink></li>
                        <li><NavLink to="/results" className="AboutLink"> Results </NavLink></li>
                        <li><NavLink to="/sponsors" className="AboutLink"> Sponsors </NavLink></li>
                        <li><NavLink to="/contact" className="AboutLink"> Contact </NavLink></li>
                        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSd_ir05nZz_Ztc_SeXoDDj1l4RmN0-9wbxgARsDbokrtfbsyQ/viewform?usp=sf_link" className="AboutLink">Sign Up</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;