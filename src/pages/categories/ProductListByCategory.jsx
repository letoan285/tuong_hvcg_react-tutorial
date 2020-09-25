import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
const ProductListByCategory = () => {
    const params = useRouteMatch();
    const [products, setProducts] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    console.log('params', params);
    useEffect(() => {
        const categoryId = params.params.id;
        setCategoryId(categoryId)
        Axios.get(`http://165.22.103.200:8081/api/categories/${categoryId}/products`).then((res) => {
            console.log('product list by category id', res.data);
            setProducts(res.data.data);
        })
    }, []);

    return (
        <>
            <h2> { products.length ? `Product By ${categoryId}` : 'No Product Found' }</h2>

            <div className="row">

                {
                   products.length > 0 && products.map((product) => {
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
                    })
                }
            </div>
        </>
    );
}

export default ProductListByCategory;