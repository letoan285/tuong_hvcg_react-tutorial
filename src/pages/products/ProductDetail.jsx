import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { getProductDetailApi } from '../../redux/actions/product.action';
import { connect } from 'react-redux';


const ProductDetail = (props) => {
    const history = useHistory();
    const params = useRouteMatch();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const productId = params.params.id;

        props.getProductById(productId);

    }, []);


    const handleGoBack = () => {
        history.push('/products');
    }

    return (
        <div className="container">

            <div className="row">
                <div className="col-12">
                    <img src={product.image} width="300" />
                    <span>Name: {props.productItem.product.id}</span>---
                    <span>Price: {product.price}</span>
                </div>
            </div>
            <button onClick={handleGoBack} className="btn btn-warning">Go Back</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        productItem: state.productReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getProductById: (id) => {
            dispatch(getProductDetailApi(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);