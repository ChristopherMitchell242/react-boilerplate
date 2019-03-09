import React, { Component } from "react";
import Logo from '../../resources/Lodge401.svg';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar" style={{position: 'fixed', top: 0, zIndex: 100}}>
                <ul>
                    <li>
                        <img className="filter-green" src={Logo} />
                    </li>
                    <li className="nav"><button onClick={() => console.log('click')}>Section One</button></li>
                    <li className="nav"><button onClick={() => console.log('click')}>Section Two</button></li>
                    <li className="nav"><button onClick={() => console.log('click')}>Section Three</button></li>
                </ul>
            </div>
        )
    }
}

export default Navbar;