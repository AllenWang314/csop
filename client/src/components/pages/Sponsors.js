import React, { Component } from "react";

import "./Pages.css";
import "./Sponsors.css";

import JaneStreet from "./jane_street.png";
import SIG from "./sig.png";
import OldMissionCapital from "./old_mission_capital.png";
import FlowTraders from "./flow_traders.png";

class Sponsors extends Component {
    constructor(props) {
        super(props);
        // Initialize Default State
        this.state = {};
    }

    componentDidMount() {
        // remember -- api calls go here!
    }

    render() {
        return (
            <div className="content-container">
                <h1 className="Title">Sponsors</h1>
                <div className="sponsor-content">

                <h2>2021 Sponsors</h2>
                <p className="sponsor-p">Thanks to our sponsors of the 2021 Collegiate Series of Poker!
                    <div id="sponsor-logos">
                        <a className="item" href="https://www.janestreet.com/" target="_blank"><img src = {JaneStreet} className = "logo"/></a>
                        <a className="item" href="https://sig.com/" target="_blank"><img src = {SIG} className = "logo"/></a>
                        <a classnName="item" href="https://www.oldmissioncapital.com/" target="_blank"><img src = {OldMissionCapital} className = "logo"/></a>
                        <a className="item" href="https://www.flowtraders.com/" target="_blank"><img src = {FlowTraders} className = "logo"/></a>
                    </div>
                </p>

                <h2>Our Mission</h2>
                <p className="sponsor-p">CSOP's core mission is to bring together the poker communities across our nation's colleges and kindle a passion for learning mathematical and analytical skills at the core of poker and trading. In recent years, poker clubs have gained significant traction in several colleges across the United States. At an attempt to connect these communities, we created CSOP, the beginning of a national unified collegiate poker organization.

                We saw the creation of CSOP a necessary step to bring poker communities across colleges together. Though some groups such as the intercollege poker association were formed in past years, these organizations have been highly selective in colleges accepted and also limiting in the capacity for number of participants across schools. In CSOP's inaugural year, we plan to host a tournament open to all individuals at any university.
                </p>

                <h2>Funding</h2>
                <p  className="sponsor-p">
                    The primary source of funding for our organization is from corporate sponsors such as yourself. The funds we receive go towards technological support, event publicity, prizes for the top-placing individuals at our tournaments, and marketing materials such as branded swag distribution to all competitors.
                </p>

                <h2>Benefits</h2>
                <p  className="sponsor-p">
                    CSOP has only a single level of sponsorship. All of our sponsors get full access to the resume book of all participants across all universities, as well as free distribution of company-branded products. We also include the corporate logos of all sponsors on CSOP's social media networks, advertisements, and apparel. In future iterations of CSOP, we expect to be hosting workshops, company talks, and networking sessions. Sponsors this year will have priority towards hosting special events in future years.
                </p>

                <h2>Next Steps</h2>
                <p  className="sponsor-p">
                    If you're interested in learning more about sponsoring CSOP or have questions please contact us at <a href="mailto:official.csop@gmail.com">official.csop@gmail.com</a> to request to preview our sponsorship package or have a chat with our team! 
                </p>
                </div>
            </div>

        )
    }
}

export default Sponsors;