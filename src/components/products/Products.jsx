import React from 'react';
import { Link } from 'react-router-dom';

class Products extends React.Component {
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
            products: [
                {
                    id: 1,
                    name: 'iphone 12',
                    src: 'https://cdn.mos.cms.futurecdn.net/NSjDb8Q988u8D4c5uaRN3J.jpg',
                    width: 350,
                    price: 1200

                },
                {
                    id: 2,
                    name: 'iphone 10',
                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQvcvNCKTNAkSNOeucdEopIFfxJKxw2t9orcnXBHLZ4g8_wxL618_wqT171fPuIpor1_pujTxPh&usqp=CAc',
                    width: 350,
                    price: 1500

                },
                {
                    id: 3,
                    name: 'iphone 9',
                    src: 'https://cdn.mos.cms.futurecdn.net/NSjDb8Q988u8D4c5uaRN3J.jpg',
                    width: 350,
                    price: 1900

                },
                {
                    id: 4,
                    name: 'iphone 8',
                    src: 'https://cdn.mos.cms.futurecdn.net/NSjDb8Q988u8D4c5uaRN3J.jpg',
                    width: 350,
                    price: 1900

                },
                {
                    id: 5,
                    name: 'iphone 7',
                    src: 'https://cdn.mos.cms.futurecdn.net/NSjDb8Q988u8D4c5uaRN3J.jpg',
                    width: 350,
                    price: 1900

                },
                {
                    id: 6,
                    name: 'iphone 6',
                    src: 'https://cdn.mos.cms.futurecdn.net/NSjDb8Q988u8D4c5uaRN3J.jpg',
                    width: 350,
                    price: 1900

                }
            ]
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
        // setInterval(() => {
        //    this.setState({
        //     count: 78,
        //    })
        // }, 1000)
    }

    shouldComponentUpdate(prevProp, preveState) {
        console.log('shouldComponentUpdate', preveState);
        console.log('prevProp', prevProp);
        console.log('stateeeee', this.state)
        if(preveState != this.state){
            console.log('trueeeee')
            return false;
        } else {
            console.log('false')
            return true;

        }
    }
    componentDidUpdate() {
        console.log('componentDidUpdate ');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount productList');
    }


    render() {
        const productList = this.state.products.map((product) => {
            return (


                <div className="col-4 mt-4" key={product.id}>
                    <div className="card">
                        <div className="card-header">

                            <h2>Product {product.name}</h2>
                        </div>
                        <div className="card-body">

                            <Link to={`/products/${product.id}`}><img style={{ width: '100%' }} src={product.src} /></Link>
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
        return (
            <div className="container">
                <div className="row">
                    <h2>Title: {this.state.buttonText}</h2>

                </div>
                <div className="row">
                    {productList}
                </div>
            </div>
        );
    }


}

export default Products;