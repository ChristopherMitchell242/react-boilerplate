import React, { Component } from "react";
import { ScrollPage, Section } from 'react-scrollpage';
import '../styles/App.css';
import img1 from '../../resources/chilling_out_back.png';
import img2 from '../../resources/GOPR1904.jpg';
import img3 from '../../resources/paddle_out.png';
import img4 from '../../resources/stormzy.png';

class App extends Component {

    render() {
        const options = {
            curPage: 1,           // inital page number, most 1
            totalPage: 3,         // totoal page number
            onPageChange: () => console.log('page changed'),         // callback function when page changed with curPage specifed
            delay: 1200           // delay between two scoll animation
        };
        return (
            <div>
                <h1>Header</h1>
                <ScrollPage{...options}>
                    <Section>
                        {/*<video autoPlay muted loop id="myVideo">*/}
                            <img src={img1} />
                            {/*<source src="../../resources/newport_surf.mp4" type="video/mp4" />*/}
                        {/*</video>*/}
                    </Section>
                    <Section>
                        <img src={img2} />
                    </Section>
                    <Section>
                        <img src={img3} />
                    </Section>
                </ScrollPage>
            </div>
        );
    }
}

export default App;
