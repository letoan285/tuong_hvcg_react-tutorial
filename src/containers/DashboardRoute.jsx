import { Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
// import HomePage from './pages/HomePage';
import ContactUs from '../pages/contact';
import Products from '../pages/products/Products';
import ProductDetail from '../pages/products/ProductDetail';
import Header from '../components/header/Header';
import Footer from '../components/footer';
import Register from '../pages/register';
import PageNotFound from '../components/notfound/PageNotFound';
import ProductListByCategory from '../pages/categories/ProductListByCategory';
import HomePage from '../pages/home/HomePage';
import Counters from '../pages/counter/Counter';
import MyHook from '../pages/hooks/MyHook';

const DashboardRoute = () => {
    const [product, setProduct] = useState({id: 0});
    const getProduct = (product) => {
        setProduct(product);
    }
    return (
        <React.Fragment>
            <Header product={product} />
            <Switch>
                <Route path="/products" exact render={() => <Products getProduct={getProduct} />} />
                <Route path="/" exact render={() => <HomePage />} />
                <Route path="/products/:id" render={() => <ProductDetail />} />
                <Route path="/counters" render={() => <Counters />} />
                <Route path="/hooks" render={() => <MyHook />} />
                <Route path="/categories/:id" render={() => <ProductListByCategory />} />
                <Route path="/contact-us" render={() => <ContactUs />} />
                <Route path="**" render={() => <PageNotFound />}/>
            </Switch>
            <Footer />
        </React.Fragment>
    );
}

export default DashboardRoute;