import React, { Component } from "react";
import { ScrollPage, Section } from 'react-scrollpage';
import '../styles/App.css';

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
                        <video autoPlay muted loop id="myVideo">
                            <img src="../../resources/stormzy.png" type="video/mp4" />
                            {/*<source src="../../resources/newport_surf.mp4" type="video/mp4" />*/}
                        </video>
                    </Section>
                    <Section>
                        <img src="../../resources/chilling_out_back.png" type="video/mp4" />
                    </Section>
                    <Section>
                        <img src="../../resources/GOPR1904.jpg" type="video/mp4" />
                    </Section>
                </ScrollPage>
            </div>
        );
    }
}

export default App;
