import React, { Component } from "react";

import img from "../../resources/niseko-snow-forecasting-tips-01.jpg";

class PageTwo extends Component {
    render() {
        return (
            <div className="section">
                <div className="background">
                    <img src={img} />
                </div>
            </div>
        )
    }
}

export default PageTwo;