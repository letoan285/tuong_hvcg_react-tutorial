import React, { Component } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/index.js';
import './App.css';
import {  Route ,BrowserRouter as Router, Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactUs from './components/contact';
import Products from './components/products/Products';
import ProductDetail from './components/products/ProductDetail';

class App extends Component {
  constructor() {
    super();
    console.log('constructor 1');
    // this.callFunction();
    
  }

  componentDidMount(){
    console.log('componentDidMount ')
  }

  shouldComponentUpdate(){
    console.log('shouldComponentUpdate ');
  }
  componentDidUpdate(){
    console.log('componentDidUpdate ');
  }

  callFunction(){
    console.log('callFunction');
  }
  componentWillUnmount(){
    console.log('componentWillUnmount ');
  }


  render() {
    /// nho rat ro scope whitecard
    console.log('render 2')
    // console.log('this props', this.props);
    return (
      <Router>
      <div className="main-container">
        <Header />
        <Switch>
          <Route path="/products" exact render={() => <Products />}/>
          <Route path="/products/:id" render={() => <ProductDetail />}/>
          <Route path="/contact-us" render={() => <ContactUs />} />
          <Route path="/" exact render={() => <HomePage /> }/>

        </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;