import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import NotFound from "./pages/NotFound.js";
import Confirmation from "./pages/Confirmation.js";
import Public from "./pages/Public.js"
import MySpin from "./modules/MySpin";

import "../utilities.css";

import { socket } from "../client-socket.js";

import { get, post } from "../utilities";
import Cookies from "universal-cookie";
const cookies = new Cookies();

/**
 * Define the "App" component as a class.
 */
class App extends Component {
  // makes props available in this component
  constructor(props) {
    super(props);
    this.state = {
      userId: undefined,
      tryingToLogin: true,
    };
    let self = this;
    if (cookies.get("token") != undefined && cookies.get("token").length > 0) {
      self.me();
    }
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id && cookies.get("token") != undefined) {
        // they are registed in the database, and currently logged in.
        this.me();
      } else if (!this.state.code) {
        this.setState({ tryingToLogin: false });
      }
    });
    socket.on("reconnect_failed", () => {
      this.setState({ disconnect: true });
    });
    socket.on("disconnect", (reason) => {
      if (reason === "io server disconnect") {
        this.setState({ disconnect: true });
      }
    });
  }

  login = (data) => {
    post("/api/login", data).then((res) => {
      cookies.set("token", res.token, { path: "/" });
      if (res.msg) {
        this.setState({ loginMessage: res.msg });
      }
      if (res.token) {
        this.setState({ loginMessage: "Success!" });
      }
      post("/api/initsocket", { socketid: socket.id }).then((data) => {
        if (data.init) this.me();
        else {
          this.setState({
            disconnect: true,
          });
        }
      });
    });
  };

  logout = () => {
    cookies.set("token", "", { path: "/" });
    post("/api/logout", {}).then((res) => {
      this.setState({ userId: undefined, tryingToLogin: false }, () => {
        window.location.href = "/";
      });
    });
  };

  me = () => {
    let token = cookies.get("token");
    get("/api/me", {}, token).then((res) => {
      if (!res.user) {
        this.logout();
        return;
      }
      this.setState({
        userId: res.user._id,
        schoolId: res.user.schoolId,
        name: res.user.name,
        loungeId: res.user.loungeId,
        pageIds: res.user.pageIds,
        isSiteAdmin: res.user.isSiteAdmin,
        email: res.user.email,
        visible: res.user.visible,
        allPages: res.allPages,
      });
    });
  };

  setVisible = (bool) => {
    post("/api/setVisible", { visible: bool }).then((data) => {
      if (data.setVisible) {
        this.setState({ visible: bool });
      }
    });
  };
  signup = (data) => {
    post("/api/signup", data).then((res) => {
      if (res.msg) {
        this.setState({ signUpMessage: res.msg });
      }
    });
  };

  handleLogout = () => {
    this.setState({ userId: undefined });
    post("/api/logout");
  };

  logState = () => {
    console.log(this.state);
  };

  render() {
    if (!this.state.userId) {
      if (this.state.tryingToLogin) return <MySpin />;
      return (
        <>
          <button onClick={()=>{this.logState()}}>log state</button>
          <Router>
            <Switch>
              <Confirmation path="/confirmation/:token"></Confirmation>
              <Public
                path="/"
                visible={true}
                login={this.login}
                logout={this.logout}
                me={this.me}
                signup={this.signup}
                loginMessage={this.state.loginMessage}
                signUpMessage={this.state.signUpMessage}
              />
              <NotFound default />
            </Switch>
          </Router>
        </>
      );
    }
    return <>
    <button onClick={()=>{this.logState()}}>log state</button>
    <button onClick = {() => {this.logout()}}>Logout</button>
    </>
  }
}

export default App;
