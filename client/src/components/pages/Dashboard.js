import React, { Component } from "react";
import "./Pages.css";
import "./Splash.css";
import { post } from "../../utilities";
import { socket } from "../../client-socket.js";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    // Initialize Default State
    this.state = {};
  }

  componentDidMount() {
    // remember -- api calls go here!
    post("/api/getGame").then((data)=>{
      this.setState({game: data.game})
    })
    
    socket.on("userQueued", (data) => {
      this.setState({game: data.game})
    })

    socket.on("userLeft", (data) => {
      this.setState({game: data.game})
    })

    socket.on("gameStart", (data) => {
      this.setState({game: data.game})
    })

    socket.on("disconnect", (data) => {
      this.dequeue()
    })
  }

  queue = () => {
    post("/api/queue", {}).then((data)=> {
      this.setState({game: data.game})
    })
  }

  dequeue = () => {
    post("/api/dequeue", {gameId: this.state.game._id}).then((data)=> {
      this.setState({game: undefined})
    })
  }

  render() {
    console.log("Loaded dashboard")
    return (
      <div className = "content-container">
        <div className="Content">
          <h1 className="Title">Dashboard</h1>
          <div className="placeholder">
            Coming soon!
          </div>
          <button onClick = {()=>{console.log(this.state)}}>logstate</button>
          {this.state.game && this.state.game.status === "inQueue" ? <button onClick = {this.dequeue}>Remove Queue</button> :
          (this.state.game && this.state.game.status === "inGame" ? <div>In Game</div> :
          <button onClick = {this.queue}>Queue</button>)}
        </div>
      </div>
    );
  }
}

export default Dashboard;
