import React from 'react';

const MiniCart = ({product, cart}) => {
    console.log('cart mini', cart)
    return (
    <span>ID - : {cart.length}</span>
    );
}

export default MiniCart;