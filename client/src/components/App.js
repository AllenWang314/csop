import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Cookies from "universal-cookie";
import {
  Menu,
  Header,
  Responsive,
} from "semantic-ui-react";

import { get, post } from "../utilities";
import { socket } from "../client-socket.js";
import NotFound from "./pages/NotFound.js";
import Confirmation from "./pages/Confirmation.js";
import Login from "./pages/Login.js"
import About from "./pages/About.js"
import Splash from "./pages/Splash.js"
import Leaderboard from "./pages/Leaderboard.js"
import Dashboard from "./pages/Dashboard.js"
import Signup from "./pages/Signup.js"
import NavBar from "./modules/NavBar/NavBar.js"
import PasswordReset from "./pages/PasswordReset.js"
import PasswordEmail from "./pages/PasswordEmail.js"



import "../utilities.css";
import "./App.css";

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
      loaded: false // TODO: figure out a better way to handle loaded and rendering the login button
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
      } else {
        this.setState({loaded: true})
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
      this.setState({ userId: undefined }, () => {
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
        loaded: true,
      });
    });
  };

  signup = (data) => {
    post("/api/signup", data).then((res) => {
      if (res.msg) {
        this.setState({ signUpMessage: res.msg });
      }
    });
  };

  render() {
    console.log(this.state)
    return (
        <BrowserRouter>
          <div>
            <NavBar />
            <Switch>
              <Confirmation path ="/confirmation/:token"></Confirmation>
              <Route
                exact path="/about"
                render={() => {
                  return <About loggedIn={this.state.userId}/>;
                }}
              />
              <Route
                exact path="/test"
                render={() => {
                  return <NavBar />;
                }}
              />
              <Route
                exact path="/leaderboard"
                render={() => {
                  return <Leaderboard />;
                }}
              />
              <Route
                exact path="/dashboard"
                render={() => {
                  return <Dashboard />;
                }}
              />
              <Route
                exact path="/login"
                render={() => {
                  return <Login
                    visible={true}
                    login={this.login}
                    logout={this.logout}
                    me={this.me}
                    signup={this.signup}
                    loginMessage={this.state.loginMessage}
                    signUpMessage={this.state.signUpMessage}
                  />;
                }}
              />
              <Route
                exact path="/signup"
                render={() => {
                  return <Signup
                    visible={true}
                    login={this.login}
                    logout={this.logout}
                    me={this.me}
                    signup={this.signup}
                    loginMessage={this.state.loginMessage}
                    signUpMessage={this.state.signUpMessage}
                  />;
                }}
              />
              <PasswordEmail path ="/passwordemail"></PasswordEmail>
              <PasswordReset path ="/passwordreset/:token"></PasswordReset>
              <Route
                exact path="/"
                render={() => {
                  return <Splash />
                }}
              />
              <Route path='*' exact={true} render={() => {
                return <NotFound default />;
              }} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
