import React, { Component } from "react";

import img2 from "../../resources/GOPR1904.jpg";


class PageTwo extends Component {
    render() {
        return (
            <div className="section">
                <img src={img2} />
                {/*<p>Section 2</p>*/}
            </div>
        )
    }
}

export default PageTwo;