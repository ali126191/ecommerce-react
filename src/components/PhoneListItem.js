import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cart';

const PhoneListItem = ({ name, price, quantity, id, dispatch }, props) => (
    <div>
        {name}: 
        {price}, 
        {quantity}-
        <button onClick={(e) => {
                dispatch(addToCart({ name, price, quantity, id }))
            }}
        >
          Add To Cart
        </button>
    </div>
)

const mapToState = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapToState)(PhoneListItem);