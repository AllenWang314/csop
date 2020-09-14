import React, { Component } from "react";
import ProfilePic from "./ProfilePic.js"
import "./Pages.css";
import {get, post} from "../../utilities.js"
import { List, Empty, ConfigProvider, Row, Col } from "antd";


class Leaderboard extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
  }

  render() {
    console.log("Loaded leaderboard")
    return (
      <div className="content-container">
        <div className="Content">
          <h1 className="Title">Leaderboard</h1>
          <List
          dataSource={this.props.leaderboard}
          size="medium"
          renderItem={(user) => {
            return (
              <List.Item
                actions={
                  []
                }
              >
                <List.Item.Meta
                  avatar={<ProfilePic user={user} />}
                  title={user.name}
                  description={
                    "rating: "+user.rating
                  }
                />
              </List.Item>
            );
          }}
        />
        </div>
      </div>
    );
  }
}

export default Leaderboard;
