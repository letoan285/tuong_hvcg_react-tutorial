import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/index.js';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import PageNotFound from './components/notfound/PageNotFound';
import Login from './pages/login';
import DashboardRoute from './containers/DashboardRoute';
import Register from './pages/register';

class App extends Component {
  constructor() {
    super();
    console.log('constructor 1');
    // this.callFunction();

  }

  componentDidMount() {
    console.log('componentDidMount ')
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate ');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate ');
  }

  callFunction() {
    console.log('callFunction');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount ');
  }


  render() {
    return (
      <Router>
        <div className="main-container mb-4" >
          <Switch>
            <Route path="/login" exact render={() => <Login />} />
            <Route path="/register" exact render={() => <Register />} />
            <Route path="/" render={() => <DashboardRoute />} />
            
          </Switch>
         
        </div>
      </Router>
    );
  }
}

export default App;