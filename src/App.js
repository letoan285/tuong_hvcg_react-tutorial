import React, {Component} from 'react';
import Product from './components/Products.js';
import Header from './components/Header';
// let x = 9;


// const getjsx = (props) => {
//   return (
//   <h1>Get JSX Outside {props.name} {props.address}</h1>
//   );
// }

const Getjsx = (props) => {
  let myProps = 'Hello';
  return (
    <>
  <h1>Get JSX Outside Component {props.myProps.name} --- {props.title}</h1>
  {props.isDisplay ? 'Hello Tuong' : 'Goodbye Tuong'}
    </>
  );
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      title: 'Parent Title',
      count: 78,
      display: [],
      isDisplay: false,
      products: [
        {
          name: 'iphone 12',
          src: 'https://cdn.mos.cms.futurecdn.net/NSjDb8Q988u8D4c5uaRN3J.jpg',
          width: 350,
          price: 1200
  
        },
        {
          name: 'iphone 10',
          src: 'https://cdn.mos.cms.futurecdn.net/NSjDb8Q988u8D4c5uaRN3J.jpg',
          width: 350,
          price: 1500
  
        },
        {
          name: 'iphone 9',
          src: 'https://cdn.mos.cms.futurecdn.net/NSjDb8Q988u8D4c5uaRN3J.jpg',
          width: 350,
          price: 1900
  
        }
      ]
    }
  }

  // x = 999;
  render(){
  const person = {
    name: 'Tuong',
    address: 'USA'
  }
    /// nho rat ro scope
    return (
      <div className="container">
       <Getjsx myProps={person} title={this.state.title} isDisplay={this.state.isDisplay}/>
        <Header />
        <hr />
        <Product products={this.state.products}/>
      </div>
    );
  }
}

export default App;