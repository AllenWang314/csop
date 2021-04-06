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
                        <li><NavLink to="/contact" className="AboutLink"> Contact </NavLink></li>
                        {/* <li><NavLink to="/structure" className="AboutLink"> Payout Structure </NavLink></li> */}
                        <li><NavLink to="/sponsors" className="AboutLink"> Sponsors </NavLink></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavBar;