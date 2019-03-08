import React, { Component, Fragment } from 'react';
import DefaultComponent from './components/DefaultComponent'
import UserList from './components/UserList'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import history from './utils/history'
import './App.css'
import UserDetail from './components/UserDetail';


  const UnauthenticatedComponent = (
    <Fragment>
            <Switch>
                <Route path="/list/:page" component={UserList} />
                <Route path="/modify/:id" component={UserDetail} />
                <Route path="/" component={DefaultComponent} />
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
