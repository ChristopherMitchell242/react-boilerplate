import React, { Component } from "react";
// import { ScrollPage, Section } from 'react-scrollpage';
import ReactFullpage from '@fullpage/react-fullpage';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import Navbar from './Navbar'

import '../styles/App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <ReactFullpage render={({ state, fullpageApi }) => {
                    return (
                        <ReactFullpage.Wrapper>
                            <PageOne/>
                            <PageTwo/>
                        </ReactFullpage.Wrapper>
                    );
                }}
                />
            </div>

        )
    }
}

export default App;
