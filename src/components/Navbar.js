import React, { Component } from "react";
import Logo from '../../resources/Lodge401.svg';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <img src={Logo} />
                <ul>
                    <li className="nav"><a className="active" onClick={() => console.log('click')}>Section One</a></li>
                    <li className="nav"><a onClick={() => console.log('click')}>Section Two</a></li>
                    <li className="nav"><a onClick={() => console.log('click')}>Section Three</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;