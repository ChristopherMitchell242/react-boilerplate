import React, {Component} from "react";

import Logo from '../../resources/Lodge401.svg';

class Navbar extends Component {

    render() {
        return (
            <div className={this.props.expandedNav ? 'navigation' : 'navigation solid'}>

                <div className={this.props.expandedNav ? 'expandedNavbar' : 'navbar'}>
                    <a href="#firstPage"><img src={Logo}/></a>
                </div>
                <div className={this.props.expandedNav ? 'expandedNavButtons' : 'navbuttons'}>
                    <li className="nav" data-menuanchor="thirdPage"><a  href="#fifthPage">Section Five</a></li>
                    <li className="nav" data-menuanchor="secondPage"><a href="#fourthPage">Section Four</a></li>
                    <li className="nav" data-menuanchor="firstPage"><a href="#thirdPage">Section Three</a></li>
                    <li className="nav" data-menuanchor="secondPage"><a href="#secondPage">Section Two</a></li>
                </div>

            </div>
        )
    }
}

export default Navbar;
