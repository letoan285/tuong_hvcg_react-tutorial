import React, { Component } from 'react';
import Products from './components/Products';
import Header from './components/header/Header';
import Footer from './components/footer/index.js';
import './App.css';
import {  Route, Router, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUs from './components/contact';

class App extends Component {
  constructor() {
    super();
    
  }


  render() {
    /// nho rat ro scope
    return (
      <div className="main-container">
        <Header />
        <Switch>
          <Route path="/products" render={() => <Products />}/>
          <Route path="/" exact render={() => <HomePage /> }/>
          <Route path="/contact-us" render={() => <ContactUs />} />

        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;