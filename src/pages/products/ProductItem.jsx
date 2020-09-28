import React from 'react';
import Button from '../../components/button';
import {Link} from 'react-router-dom';

import { connect } from 'react-redux';
import { addToCart } from '../../redux/action';
import { bindActionCreators } from 'redux';


const ProductItem = ({product, addCart, addToCart}) => {
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
                            <Button text="Buy Now" className="btn btn-primary mt-2 mr-2" onClick={() => addToCart(product)} />
                            <Button text="View More" className="btn btn-warning mt-2" onClick={() => ({})} />
                        </div>
                    </div>
                </div>

    );
}


const mapStateToProps = (state) => {
    return {
        cart: state
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        addToCart
    },
    dispatch
)
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);