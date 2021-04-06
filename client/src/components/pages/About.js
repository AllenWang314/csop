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
    return (
      <div className="content-container">
        <h1 className="Title">FAQs</h1>
        <div id="faq-container">
          <div className="collapsible-container">
            <Collapsible
              trigger={<p className="faq-trigger">What is CSOP?</p>}
              openedClassName="faq-active"
              triggerClassName="faq-title"
              triggerOpenedClassName="faq-title-active"
              contentInnerClassName="faq-content">
              <p className="faq-answer">
                The primary goal of CSOP is to create a collegiate scene for poker, akin
                to how there is a collegiate scene for various sports. A secondary goal of CSOP
                is to foster an intercollegiate poker community for cultivating interest in poker.
                College students nation-wide can participate throughout
                each season. The inaugural 2021 season will consist of a single one-day tournament
                for the top 300 <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_ir05nZz_Ztc_SeXoDDj1l4RmN0-9wbxgARsDbokrtfbsyQ/viewform?usp=sf_link">applicants</a> to battle it out.
                </p>
            </Collapsible>
          </div>
          <div className="collapsible-container">

            <Collapsible
              trigger={<p className="faq-trigger">When is CSOP?</p>}
              openedClassName="faq-active"
              triggerClassName="faq-title"
              triggerOpenedClassName="faq-title-active"
              contentInnerClassName="faq-content">
              <p className="faq-answer">
                This inaugural season will take place on Saturday, May 8.
                The format will be a single, one-day tournament with 300 entries.
                Future seasons will last from ~September to ~April/May. Each season will last a school year.
              </p>
            </Collapsible>
          </div>
          <div className="collapsible-container">
            <Collapsible
              trigger={<p className="faq-trigger">How do players qualify for the tournament?</p>}
              openedClassName="faq-active"
              triggerClassName="faq-title"
              triggerOpenedClassName="faq-title-active"
              contentInnerClassName="faq-content">
              <p className="faq-answer">
                Future years will have qualifications for our final tournament. For our first year, interested college students who want to participate in the final tournament on May 8th should apply <a href="https://docs.google.com/forms/d/e/1FAIpQLSd_ir05nZz_Ztc_SeXoDDj1l4RmN0-9wbxgARsDbokrtfbsyQ/viewform?usp=sf_link">here</a>.
                Players who are accepted should expect to receive an email by April 24th with details on how to participate.
              </p>
            </Collapsible>
          </div>
          <div className="collapsible-container">
            <Collapsible
              trigger={<p className="faq-trigger">How do I win prizes?</p>}
              openedClassName="faq-active"
              triggerClassName="faq-title"
              triggerOpenedClassName="faq-title-active"
              contentInnerClassName="faq-content">
              <p className="faq-answer">
                The top finishers from the tournament will each receive cash prizes, totaling in 10k!
                A prize payout structure will be posted on our website at a later date. 
                In addition, all participants will have food provided and receive free swag from our <a href="/sponsors">sponsors</a>.
              </p>
            </Collapsible>
          </div>
          <div className="collapsible-container">
            <Collapsible
              trigger={<p className="faq-trigger">How can I help organize CSOP?</p>}
              openedClassName="faq-active"
              triggerClassName="faq-title"
              triggerOpenedClassName="faq-title-active"
              contentInnerClassName="faq-content">
              <p className="faq-answer">
                If you're interested in joining our team or becoming a campus representative, please contact us at <a href="mailto:official.csop@gmail.com">official.csop@gmail.com</a>.
              </p>
            </Collapsible>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
