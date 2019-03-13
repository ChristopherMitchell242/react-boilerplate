import React, { Component } from "react";

import img1 from "../../resources/bg.jpg";

class PageOne extends Component {
    render() {
        return (
            <div className="section">
                <div className="background">
                    <img src={img1} />
                </div>
            </div>
        )
    }
}

export default PageOne;