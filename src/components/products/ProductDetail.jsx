import React, { useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

// > 16.8 --> hooks ; dependency

const ProductDetail = (props) => {
    const history = useHistory();
    const params = useRouteMatch();
    const [name, setName] = useState({ text: 'Tuong Le' });
    const [state, setState] = useState(0);
    const [products, setProducts] = useState([
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
    ]);



 
    const productItem = products.filter((item) => item.id == params.params.id)[0];


    useEffect(() => {
        // console.log();
        console.log('params 2', params.params.id);
        // const id = params.
        

        console.log('productItem', productItem);


    }, []);

    const handleGoBack = () => {
        history.push('/products');
    }
    
    return (
        <div className="container">

            <div className="row">
                <div className="col-12">
                    <img src={productItem.src} width="300"/>
                    <span>Name: {productItem.name}</span>
                    <span>Name: {productItem.price}</span>
                </div>
            </div>
            <button onClick={handleGoBack} className="btn btn-warning">Go Back</button>
        </div>
    );
}

export default ProductDetail;