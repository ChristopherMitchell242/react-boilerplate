import React, {Component} from "react";

import Logo from '../../resources/Lodge401.svg';

class Navbar extends Component {
    showSettings(event) {
        console.log(event);
        event.preventDefault();
    }

    render() {
        return (
            <div className={this.props.expandedNav ? 'navigation' : 'navigation solid'}>
                <div className={this.props.expandedNav ? 'expandedNavbar' : 'navbar'}>
                    <img src={Logo}/>
                </div>
                <div className={this.props.expandedNav ? 'expandedNavButtons' : 'navbuttons'}>
                    <li className="nav"><a onClick={() => console.log('click')}>Section Three</a></li>
                    <li className="nav"><a onClick={() => console.log('click')}>Section Two</a></li>
                    <li className="nav"><a className="active" onClick={() => console.log('click')}>Section One</a></li>
                </div>

            </div>
        )
    }
}

export default Navbar;