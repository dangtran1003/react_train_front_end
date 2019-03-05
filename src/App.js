import React, { Component, Fragment } from 'react';
import DefaultComponent from './components/DefaultComponent'
import UserList from './components/UserList'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './utils/history'
import './App.css'


  const UnauthenticatedComponent = (
    <Fragment>
            <Switch>
                <Route path="/signup" component={UserList} />
                <Route path="/" component={DefaultComponent} />
                <Route path="/reset-password" component={DefaultComponent} />
                <Redirect to="/" />
            </Switch>
    </Fragment>
)
class App extends Component {
  render() {
    const routers = UnauthenticatedComponent
    return (
      <Router history={history}>{routers}</Router>
    );
  }
}

export default App;
