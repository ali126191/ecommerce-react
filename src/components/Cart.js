import React from 'react'

const Cart = (props) => {
    if (props.cart.length > 0) {
      return <p>Cart: {props.cart.length}</p>
    }
    return (
      <div>
        <br/>
        Cart is empty
        <br/>
        <br/>
      </div>
    )
}

export default Cart;