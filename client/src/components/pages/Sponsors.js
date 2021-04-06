import React, { Component } from "react";

import "./Pages.css";

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
                <h1 className="Title">Sponsorship</h1>
                <h2>Our Mission</h2>
                <div>CSOP's core mission is to bring together the poker communities across our nation's colleges and kindle a passion for learning mathematical and analytical skills at the core of poker and trading. In recent years, poker clubs have gained significant traction in several colleges across the United States such as MIT, Harvard, and Brown. At an attempt to connect these communities, we created CSOP, the beginning of a national unified collegiate poker organization.

                We saw the creation of CSOP a necessary step to bring poker communities across colleges together. Though some groups such as the intercollege poker association were formed in past years, these organizations have been highly selective in colleges accepted and also limiting in the capacity for number of participants across schools. In CSOP's inaugural year, we plan to host a tournament open to all individuals at any university.
                </div>

                <h2>Funding</h2>
                <div>
                    The primary source of funding for our organization is from corporate sponsors such as yourself. The funds we receive go towards technological support, event publicity, prizes for the top-placing individuals at our tournaments, and marketing materials such as branded swag distribution to all competitors.
                </div>

                <h2>Benefits</h2>
                <div>
                    CSOP has only a single level of sponsorship. All of our sponsors get full access to the resume book of all participants across all universities, as well as free distribution of company-branded products. We also include the corporate logos of all sponsors on CSOP's social media networks, advertisements, and apparel. In future iterations of CSOP, we expect to be hosting workshops, company talks, and networking sessions. Sponsors this year will have priority towards hosting special events in future years.
                </div>

                <h2>Next Steps</h2>
                <div>
                    If you're interested in learning more about sponsoring CSOP or have questions please contact us at <a href="mailto:official.csop@gmail.com">official.csop@gmail.com</a> to request to preview our sponsorship package or have a chat with our team! 
                </div>
            </div>

        )
    }
}

export default Sponsors;