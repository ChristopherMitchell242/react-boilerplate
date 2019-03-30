import React, {Component} from "react";

import Logo from '../../resources/Lodge401.svg';

class Navbar extends Component {

    render() {
        return (
            <div className={this.props.expandedNav ? 'navigation' : 'navigation solid'}>

                <div className={this.props.expandedNav ? 'expandedNavbar' : 'navbar'}>
                    <a href="#firstPage"><img src={Logo}/></a>
                </div>
                <ul id="nav_menu" className={this.props.expandedNav ? 'expandedNavButtons' : 'navbuttons'}>
                    <li className="nav" data-menuanchor="fifthPage"><a  href="#fifthPage">Section Five</a></li>
                    <li className="nav" data-menuanchor="fourthPage"><a href="#fourthPage">Section Four</a></li>
                    <li className="nav" data-menuanchor="thirdPage"><a href="#thirdPage">Section Three</a></li>
                    <li className="nav" data-menuanchor="secondPage"><a href="#secondPage">Section Two</a></li>
                </ul>

            </div>
        )
    }
}

export default Navbar;
