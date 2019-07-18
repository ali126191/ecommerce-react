import React from 'react';
import { connect } from 'react-redux';
import { updateItemQuantity, removeCartItem } from '../actions/cart';

const CartItems = (props) => (
    <div>
        {props.cart.map((phone, index) => (
            <div key={phone.id}>
                {phone.name}-
                {phone.quantity}
                <button 
                    onClick={() => {
                        props.dispatch(updateItemQuantity(phone.id, { quantity: 1 }))
                        console.log('clicked to add')
                    }}
                >
                    Add quantity
                </button>
                <button 
                    onClick={() => {
                        if (phone.quantity > 0) {
                            props.dispatch(updateItemQuantity(phone.id, { quantity: -1 }))
                            
                        }
                    }}
                >
                     Decrease quantity
                </button>
                <button onClick={() => {
                    props.dispatch(removeCartItem(phone.id))
                }}>
                    Delete
                </button>
            </div>
        ))}
        
    </div>
)

const mapStateToProps = (state) => {
    function getUnique(arr, comp) {
        const unique = arr.map(e => e[comp])
           // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e]).map(e => arr[e]);
        
         return unique;
      }

    return {
        cart: getUnique(state.cart, 'id')
    }
}

export default connect(mapStateToProps)(CartItems);