import React, { Component } from "react";

import ReactFullpage from '@fullpage/react-fullpage';
import Zoom from 'react-reveal/Zoom';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import Navbar from './Navbar'

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                {/*<Zoom>*/}
                    {/*<Navbar/>*/}
                {/*</Zoom>*/}
                <ReactFullpage render={({ state, fullpageApi }) => {
                    return (
                        <div>
                            <ReactFullpage.Wrapper>
                                <PageOne />
                                <PageTwo />
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
