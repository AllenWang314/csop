import React, { Component } from "react";

import "./Pages.css";
import "./Format.css";
import payout from './payout.png';
import blinds from './blinds.png';

class Format extends Component {
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
                <h1 className="Title">Format</h1>
                <div className="format-content">
                <h2>Tournament Structure</h2>
                <p className="format-p"> The variant of Poker played will be No Limit Hold'em. Starting chip counts will be 10,000 per player with no rebuys, and blinds begin at 15/30 with ante 4. There will be a 5 minute break every hour, and a 60 minute time bank for those who take longer to think. The event will be held as a turbo speed tournament on PokerStars, and first 13 levels of the blind structure are shown below:
                </p>

                <img id="blinds" src={blinds} alt="Blind Structure"/>

                <h2>Prize Payout</h2>
                <p  className="format-p">
                    The total prize pool for CSOP is $10,000. The payout will be distributed in an exponential tournament payout manner that reflects the chip distribution similar to tourments held on PokerStars. Approximately the top 15% of placings will be paid out. Specific payment details are to come after the final number of attendees is confirmed. We anticipate there being ~300 attendees accepted this year, with 45 places paid, and the 1st place taking about $2000. A graph of the payout structure is shown below:
                </p>
                <img id="prize-payout" src={payout} alt="Payout Structure"/>


                <h2>Swag Information</h2>
                <p  className="format-p">
                    Attendees will be asked to fill out a form to provide a US mailing address to receive their free shipment of swag.
                </p>
                </div>
            </div>

        )
    }
}

export default Format;