import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MiniCart from '../cart/MiniCart';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const Header = ({product,cart }) => {
    const [myCart, setmyCart] = useState([]);
    useEffect(() => {
        setmyCart([...cart.cart]);
    }, [cart])
    return (
        <>
         <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Shop</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">

                <li className="nav-item">
                    <Link className="nav-link" to="/products">Product List</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/contact-us">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/counters">Counter</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/hooks">Hooks </Link>
                </li>

                </ul>
                <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                </form>
                <li className="nav-item">
                    <Link className="nav-link" to="/hooks"><MiniCart cart={myCart} product={product}/> </Link>
                </li>
            </div>
            </nav>
        </>
    );
}
const mapStateToProps = (state) => {
    return {
        cart: state
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
    },
    dispatch
)

export default connect(mapStateToProps, mapDispatchToProps)(Header);