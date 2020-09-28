import Axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';
import { getOne, addToCart } from '../../redux/action';
import { bindActionCreators } from 'redux';

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
        this.props.getOne({id: 100, name: 'product 100', price: 2000});
        console.log('didmount', this.props);
        console.log('componentDidMount 111');
        this.productList();

        this.categoryList();
        console.log('propssss 111', this.props.propsData);


    }
    addToCart = (product) => {
        this.props.getProduct(product);
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

        console.log('propssss ', this.props);
        const productList = this.state.products.map((product) => {
            return (


                <ProductItem key={product.id} product={product} addCart={this.addToCart} />

            );
        });
        if (!this.state.products.length) {
            return <>Loading...</>;
        }
        return (
            <div className="container">
                <div className="row">
                    <h2>Title: {this.state.buttonText} ---</h2>

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
const mapStateToProps = (state) => {
    return {
        propsData: state.product
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        getOne
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Products);