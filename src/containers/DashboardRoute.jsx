import { Route, Switch } from 'react-router-dom';
import React from 'react';
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
    return (
        <React.Fragment>
            <Header />
            <Switch>
                <Route path="/products" exact render={() => <Products />} />
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