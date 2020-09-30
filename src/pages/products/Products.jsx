import Axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ProductItem from './ProductItem';
import { getOne, addToCart } from '../../redux/actions/action';
import { bindActionCreators } from 'redux';
import { getProductsApi } from '../../redux/actions/product.action';
import { getCategoriesApi } from '../../redux/actions/category.action';

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
        this.props.getProductsApi();
        this.props.getCategoriesApi();
        console.log('myProps', this.props)
        this.props.getOne({id: 100, name: 'product 100', price: 2000});

    }
    addToCart = (product) => {
        this.props.getProduct(product);
    }

    categoryList = () => {
       
    }


    componentDidUpdate() {
        console.log('componentDidUpdate 111');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount productList');
    }


    render() {

        console.log('myProps===', this.props)
        const { products } = this.props.productList;
        const { categories } = this.props.categoryList;
    
        if (!products.length) {
            return <>Loading...</>;
        }
        const productList = products.map((product) => {
            return (


                <ProductItem key={product.id} product={product} addCart={this.addToCart} />

            );
        });
       
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
                               categories.map((item) => {
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
        propsData: state.product,
        productList: state.productReducer,
        categoryList: state.categoryReducer
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        getOne,
        getProductsApi,
        getCategoriesApi
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Products);