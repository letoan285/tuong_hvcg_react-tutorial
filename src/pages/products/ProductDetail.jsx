import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

// > 16.8 --> hooks ; dependency

const ProductDetail = (props) => {
    const history = useHistory();
    const params = useRouteMatch();
    const [product, setProduct] = useState({});



    useEffect(() => {
        const productId = params.params.id;
        getProduct(productId);
        

    }, []);

    const getProduct = (id) => {
        Axios.get(`http://165.22.103.200:8081/api/products/${id}`).then((res) => {
            setProduct(res.data);
        })
    }

    const handleGoBack = () => {
        history.push('/products');
    }
    
    return (
        <div className="container">

            <div className="row">
                <div className="col-12">
                    <img src={product.image} width="300"/>
                    <span>Name: {product.name}</span>
                    <span>Price: {product.price}</span>
                </div>
            </div>
            <button onClick={handleGoBack} className="btn btn-warning">Go Back</button>
        </div>
    );
}

export default ProductDetail;