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
import About from "./pages/About.js"
import Contact from "./pages/Contact.js"
import Structure from "./pages/Structure.js"
import Sponsors from "./pages/Sponsors.js"
import Splash from "./pages/Splash.js"
import NavBar from "./modules/NavBar/NavBar.js"



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
    // let self = this;
    // if (cookies.get("token") != undefined && cookies.get("token").length > 0) {
    //   // self.me();
    // }
  }

  componentDidMount() {
    get("/api/whoami").then((user) => {
      if (user._id && cookies.get("token") != undefined) {
        // they are registed in the database, and currently logged in.
        this.me();
      } else {
        this.setState({ loaded: true })
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

  render() {
    return (
      <BrowserRouter>
        <div>
          <NavBar></NavBar>
          <Switch>
            <Confirmation path="/confirmation/:token"></Confirmation>
            <Route
              exact path="/about"
              render={() => {
                return <About loggedIn={this.state.userId} />;
              }}
            />

            <Route
              exact path="/contact"
              render={() => {
                return <Contact />;
              }}
            />
            <Route
              exact path="/structure"
              render={() => {
                return <Structure />;
              }}
            />
            <Route
              exact path="/sponsors"
              render={() => {
                return <Sponsors />;
              }}
            />
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
