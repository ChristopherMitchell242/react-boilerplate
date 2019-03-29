import React, { Component } from "react";

import ReactFullpage from '@fullpage/react-fullpage';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PageFive from './PageFive';
import Navbar from './Navbar'

import '../styles/App.css';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expandNav: true
        };
    }

    render() {
        const handlePageChange  = (origin, dest, direction) => {
            dest.isFirst === true ? this.setState({expandNav: true}) : this.setState({expandNav: false})
        };

        const options = {
            scrollingSpeed: 1000,
            onLeave: (origin, dest, direction) => handlePageChange(origin, dest, direction)
        };

        return (
            <div id="outer-container">
                <Navbar expandedNav={this.state.expandNav} />
                <div id="page-wrap">
                    <ReactFullpage
                        {...options}
                        render={({ state, fullpageApi }) => {
                            return (
                                <div>
                                    <ReactFullpage.Wrapper>
                                        <PageOne />
                                        <PageTwo />
                                        <PageThree />
                                        <PageFour />
                                        <PageFive />
                                    </ReactFullpage.Wrapper>
                                </div>
                            );
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default App;
