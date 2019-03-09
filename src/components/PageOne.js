import React, { Component } from "react";

import img1 from "../../resources/chilling_out_back.png";

class PageOne extends Component {
    render() {
        return (
            <div className="section">
                <img src={img1} />
                {/*<p>Section 1 (welcome to fullpage.js)</p>*/}
                {/*<button onClick={() => fullpageApi.moveSectionDown()}>*/}
                {/*Click me to move down*/}
                {/*</button>*/}
            </div>
        )
    }
}

export default PageOne;