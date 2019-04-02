import ReactFullpage from '@fullpage/react-fullpage';
import React, {Component} from 'react';

import '../styles/App.css';
import Navbar from './Navbar';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import ParticleWrapper from './Particle';

class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            expandNav: true
        };
    }

    render () {
        const handlePageChange = (origin, dest, direction) => {
            dest.isFirst === true ? this.setState({expandNav: true}) : this.setState({expandNav: false});
        };

        const options = {
            scrollingSpeed: 1000,
            onLeave: (origin, dest, direction) => handlePageChange(origin, dest, direction),
            anchors: ['firstPage'],
            menu: '#nav_menu'
        };

        return (
            <div id="outer-container" className="outer-container">

                <ParticleWrapper/>

                <Navbar expandedNav={this.state.expandNav}/>
                <div id="page-wrap">
                    <ReactFullpage
                        {...options}
                        render={({state, fullpageApi}) => {
                            return (
                                <div>
                                    <ReactFullpage.Wrapper>
                                        <PageOne/>
                                        <PageTwo />
                                        {/*<PageThree />*/}
                                        {/*<PageFour />*/}
                                        {/*<PageFive />*/}
                                    </ReactFullpage.Wrapper>
                                </div>
                            );
                        }}
                    />
                </div>
            </div>
        );
    }
}

export default App;
