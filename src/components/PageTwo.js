import React, { Component } from "react";

import img2 from "../../resources/GOPR1904.jpg";

class PageTwo extends Component {
    render() {
        return (
            <div className="section">
                <div className="background">
                    <img src={img2} />
                </div>
            </div>
        )
    }
}

export default PageTwo;