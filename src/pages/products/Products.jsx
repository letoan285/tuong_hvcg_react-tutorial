import Axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

class Products extends React.Component {
    // const [name, setName] = useState({ text: 'Tuong Le' });
    constructor() {
        super();
        this.state = {
            title: 'Parent Title',
            count: 78,
            display: [],
            isDisplay: false,
            buttonText: 'Change Title',
            pageTitle: 'Product List',
            productSelected: 'default product',
            productDetail: {},
            posts: [],
            products: [],
            categories: []
        }
    }

    changeParentTitle = (productName) => {
        // changeTitle(productName);
    }
    viewMoreDetail = (product) => {
        // viewMore(product);
        console.log('this', this);
        this.setState(prev => {
            return {
                ...prev,
                buttonText: 'New Button Text'
            };
        })
    }
    componentDidMount() {
        console.log('didmount', this.props);
        console.log('componentDidMount 111');
        this.productList();

        this.categoryList();
       
    }
    productList = () => {
        Axios.get('http://165.22.103.200:8081/api/products').then((res) => {
            console.log('products', res);
            this.setState(prev => {
                return {
                    ...prev,
                    products: res.data
                }
            })
        })
    }
    categoryList = () => {
        Axios.get('http://165.22.103.200:8081/api/categories').then((res) => {

            this.setState(prev => {
                return {
                    ...prev,
                    categories: res.data
                }
            })
        })
    }


    componentDidUpdate() {
        console.log('componentDidUpdate 111');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount productList');
    }


    render() {
        console.log('render', this.state.posts);
        const productList = this.state.products.map((product) => {
            return (


                <div className="col-4 mt-4" key={product.id}>
                    <div className="card">
                        <div className="card-header">

                            <h2>Product {product.name}</h2>
                        </div>
                        <div className="card-body">

                            <Link to={`/products/${product.id}`}><img style={{ width: '100%' }} src={product.image} /></Link>
                            <strong>Price: {product.price}</strong>
                        </div>
                        <div className="card-footer">

                            <button className="btn btn-primary float-left mt-2" onClick={() => this.changeParentTitle(product.name)}>Buy now -- {product.name}</button>
                            <button className="btn btn-warning float-right mt-2" onClick={() => this.viewMoreDetail(product)}>View More..</button>
                        </div>
                    </div>
                </div>

            );
        });
        if (!this.state.products.length) {
            return <>Loading...</>;
        }
        return (
            <div className="container">
                <div className="row">
                    <h2>Title: {this.state.buttonText}</h2>

                </div>
                <div className="row">
                    <div className="col-3">
                        <ul className="list-group mt-4">
                            <li className="list-group-item active">Category</li>
                            {
                                this.state.categories.map((item) => {
                                    return (
                                    <li className="list-group-item" key={item.id}><Link to={`/categories/${item.id}`}>{item.name}</Link></li>
                                    );
                                })
                            }
                           

                        </ul>
                    </div>
                    <div className="col-9">
                        <div className="row">

                            {productList}
                        </div>
                    </div>

                </div>

            </div>
        );
    }


}

export default Products;