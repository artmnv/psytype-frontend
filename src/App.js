import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import { indigo500 } from "material-ui/styles/colors";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import reducer from "./reducers";

import Profile from "./components/pages/Profile/Profile";
import Home from "./components/pages/Home/Home";
import AuthVK from "./components/pages/AuthVK/AuthVK";

const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const store = createStore(reducer, applyMiddleware(...middleware));

const styles = {
  container: {
    marginTop: 50,
    marginLeft: 50,
    marginRight: 50
  },
  appBar: {
    zIndex: 1301
  },
  drawerPaddingTop: {
    height: 64
  }
};

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: indigo500
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { open: true };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  render() {
    const supportsHistory = "pushState" in window.history;

    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router basename="/" forceRefresh={!supportsHistory}>
            <div>
              <AppBar
                style={styles.appBar}
                title="Психософия"
                onLeftIconButtonTouchTap={this.handleToggle}
              />
              <div style={styles.container}>
                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/authVK" component={AuthVK} />
              </div>
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
