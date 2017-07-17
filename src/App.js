import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { indigo500 } from 'material-ui/styles/colors'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'

import Profile from './components/pages/Profile/Profile'
import Home from './components/pages/Home/Home'
import AuthVK from './components/pages/AuthVK/AuthVK'
import Poll from './components/pages/Poll/Poll'
import ProfileWidget from './components/ProfileWidget'
import apiMiddleware from './middleware/api'

const middleware = [ thunk, apiMiddleware ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))

const styles = {
  container: { marginTop: 50, marginLeft: 50, marginRight: 50 },
  appBar: { zIndex: 1301 },
  drawerPaddingTop: { height: 64 },
  wrapper: {
    WebkitOverflowScrolling: 'touch',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    position: 'relative',
    zIndex: 2,
    padding: '2.5rem 2.5rem 2.5rem 2.5rem'
  },
  main: {
    display: 'flex',
    position: 'relative',
    maxWidth: '100%',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    textAlign: 'left',
    boxShadow: '0rem 1.125rem 4.125rem 0rem rgba(0,0,0,0.451)',
    borderRadius: '0.625rem 0.625rem 0.625rem 0.625rem',
    transition: 'opacity 0.75s ease 0.125s,transform 0.75s ease 0.125s'
  },
  inner: {
    backgroundPosition: '0% 0%',
    backgroundRepeat: 'repeat',
    backgroundSize: 'cover',
    backgroundImage: 'linear-gradient(103deg, #EB816A 0%, #E6A87C 100%)',
    overflowX: 'hidden',
    position: 'relative',
    zIndex: 1,
    padding: '5rem 4rem',
    maxWidth: '100%',
    width: '38rem'
  }
}

const muiTheme = getMuiTheme({ palette: { primary1Color: indigo500 } })

class App extends Component {
  render () {
    const supportsHistory = 'pushState' in window.history

    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={muiTheme}>
          <Router basename='/' forceRefresh={!supportsHistory}>
            <div style={styles.wrapper}>
              <ProfileWidget />
              <div style={styles.main}>
                <div style={styles.inner}>
                  <Route exact path='/' component={Home} />
                  <Route path='/profile' component={Profile} />
                  <Route path='/authVK' component={AuthVK} />
                  <Route path='/poll' component={Poll} />
                </div>
              </div>
            </div>
          </Router>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default App
