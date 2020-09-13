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
                    <img className="Logo" src={logo}/>
                </NavLink>
                <nav>
                    <ul className="NavLinks">
                        <li><NavLink to="/dashboard" className="DashboardLink"> Dashboard </NavLink></li>
                        <li><NavLink to="/leaderboard" className="LeaderboardLink"> Leaderboard </NavLink></li>
                        <li><NavLink to="/about" className="AboutLink"> About </NavLink></li>
                        <li><NavLink to="/contact" className="AboutLink"> Contact </NavLink></li>
                    </ul>
                </nav>
                {this.props.userId ?  <NavLink to="/" onClick = {this.props.logout} className="Login"> Logout </NavLink> : <NavLink to="/login" className="Login"> Login </NavLink>}
            </div>
        );
    }
}

export default NavBar;