import React, { Component } from "react";
import Collapsible from 'react-collapsible';

import "./Pages.css";
import "./About.css";

class About extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    console.log("Loaded about")
    return (
      <div className="content-container">
          <h1 className="Title">FAQs</h1>
          <div id="faq-container">
            <div className="collapsible-container">
              <Collapsible
                trigger={<div className="faq-trigger">What is CSOP?</div>}
                openedClassName="faq-active"
                triggerClassName="faq-title"
                triggerOpenedClassName="faq-title-active"
                contentInnerClassName="faq-content">
                <p className="faq-answer">The goal of CSOP is to create a collegiate scene for poker just like any other sport. Colleges nation-wide can participate throughout each season. Players can play in 6 player Sit-N-Go (SNG) tournaments throughout the season and climb leagues/elo. At the end of each season, the top people will be invited to a large, multi-day national finals tournament. It will be filmed, have commentators, reward cash prizes, etc.</p>
              </Collapsible>
            </div>
            <div className="collapsible-container">

              <Collapsible
                trigger={<div className="faq-trigger">When is CSOP?</div>}
                openedClassName="faq-active"
                triggerClassName="faq-title"
                triggerOpenedClassName="faq-title-active"
                contentInnerClassName="faq-content">
                <p className="faq-answer">The first season will be in Fall 2020. The season will last from ~September to ~April/May. Each season will last a school year.</p>
              </Collapsible>
            </div>
            <div className="collapsible-container">

              <Collapsible
                trigger={<div className="faq-trigger">What is the CSOP ranking system? </div>}
                openedClassName="faq-active"
                triggerClassName="faq-title"
                triggerOpenedClassName="faq-title-active"
                contentInnerClassName="faq-content">
                <p className="faq-answer">Throughout the season, players will play in a series of 6 player SNG tournaments that will affect their overall rank. The ranking system is an adaptation of popular MOBA, FPS, and Battle Royale games (League of Legends, CS:GO, PUBG, etc.). There are 6 total leagues to rank players: Bronze, Silver, Gold, Platinum, Diamond, and Master. Each player in a league will have a certain amount of league points (LP) ranging from 0 to 100. </p>
                <p className="faq-answer">The goal is to gain more LP to advance to the next league (i.e. hitting 100+ LP advances to the next league like Bronze to Silver). For now, we will only be having hard rankings (1, 2, 3, etc.) instead of leagues.</p>
              </Collapsible>
            </div>
            <div className="collapsible-container">
              <Collapsible
                trigger={<div className="faq-trigger">How do players climb the CSOP ranks?</div>}
                openedClassName="faq-active"
                triggerClassName="faq-title"
                triggerOpenedClassName="faq-title-active"
                contentInnerClassName="faq-content">
                <p className="faq-answer">As mentioned in previous answers, the format for ranked games will be 6 player SNG tournaments. If you’re not familiar with what a Sit-N-Go tournament is, it’s basically like a regular poker tournament except you start with 6 players in this case. Take a look here for more information. </p>
                <p className="faq-answer">Players will play SNG games with other people that have a similar rank to them through a matchmaking system using matchmaking rating (MMR), which is different from LP. After every ranked SNG game (which will take on average 45min to 1hr), players gain/lose LP based on their placement (i.e. 1st gets most LP, 6th loses most LP). In order to mitigate the disadvantages of players who play fewer matches, the LP gain/loss after every game will also depend on how often you are playing. For each game you play in a row, the amount of points gained or lost is decreased (i.e. if you play 4-5 times a month, your gain/loss weighs a bit more than if you play 12 times a month).</p>
              </Collapsible>
            </div>
            <div className="collapsible-container">
              <Collapsible
                trigger={<div className="faq-trigger">How do players play SNG tournaments?</div>}
                openedClassName="faq-active"
                triggerClassName="faq-title"
                triggerOpenedClassName="faq-title-active"
                contentInnerClassName="faq-content">
                <p className="faq-answer">There will be certain “match days” each week in a season. For example, suppose we have Tuesday from 7-10pm, Saturday from 1-6pm, and Sunday from 1-6pm as match days. During these times, and only during then, CSOP players can queue up onto our system to play ranked SNG games. Matchmaking will be done on our servers, and it involves finding players with similar MMR (an invisible rating system different from leagues/LP). As more colleges join CSOP, we will add more match days until players can queue up at any time. After a match is found, the nine players will go to their poker table and play. Failing to connect to their match will automatically get a 6th place LP loss. After finishing the match, every player will gain/lose LP accordingly. </p>
              </Collapsible>
            </div>
            <div className="collapsible-container">
              <Collapsible
                trigger={<div className="faq-trigger">How do ranks carry over in different seasons?</div>}
                openedClassName="faq-active"
                triggerClassName="faq-title"
                triggerOpenedClassName="faq-title-active"
                contentInnerClassName="faq-content">
                <p className="faq-answer">After the end of every season, players will lose their ranking. However, at the start of a new season, players can play a series of “placement matches” to get a provisional rank. The provisional rank will be based on several factors including how well a player does in their placement matches and their previous season’s rank.</p>
              </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
