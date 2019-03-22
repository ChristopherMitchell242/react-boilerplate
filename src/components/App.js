import React, { Component } from "react";

import ReactFullpage from '@fullpage/react-fullpage';
// import Zoom from 'react-reveal/Zoom';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PageFive from './PageFive';
import Navbar from './Navbar'

import '../styles/App.css';

class App extends Component {
    render() {
        const options = {
            scrollingSpeed: 1000
         };
        return (
            <div>
                <Navbar />
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
        )
    }
}

export default App;
