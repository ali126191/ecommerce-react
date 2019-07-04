import React from 'react';
import Quantity from './Quantity';

const Checkout = (props) => {
    return (
      <div>
        <br/>
        <ol>
          {props.cart.map((phone, index) => {
            return (
              <li key={index}>{phone.name}
                <span> {phone.price}</span> 
                  <Quantity
                   phone={phone}
                   handleAddQuantity={props.handleAddQuantity}
                   handleMinusOneQuantity={props.handleMinusOneQuantity}
                   cart={props.cart}
                  /> 
                <span>Total</span>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }

export default Checkout