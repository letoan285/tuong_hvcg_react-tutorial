import React from 'react';

export default function Product(props){
    return (
        <div className="row">
        <div className="col-4">
            <h2>Product {props.products[0].name}</h2>
            <img width={props.products[0].width} src={props.products[0].src}/>
            <strong>Price: {props.products[0].price}</strong>
            <button className="btn btn-primary float-left mt-2">Buy now</button>
            <button className="btn btn-warning float-right mt-2">View More..</button>
        </div>
     
        <div className="col-4">
            <h2>Product {props.products[1].name}</h2>
            <img width={props.products[1].width} src={props.products[1].src}/>
            <strong>Price: {props.products[1].price}</strong>
            <button className="btn btn-primary float-left mt-2">Buy now</button>
            <button className="btn btn-warning float-right mt-2">View More..</button>
        </div>
    
        <div className="col-4">
            <h2>Product {props.products[2].name}</h2>
            <img width={props.products[2].width} src={props.products[2].src}/>
            <strong>Price: {props.products[2].price}</strong>
            <button className="btn btn-primary float-left mt-2">Buy now</button>
            <button className="btn btn-warning float-right mt-2">View More..</button>
        </div>
        </div>
    );
}