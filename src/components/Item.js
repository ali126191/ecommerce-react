import React from 'react'

const Item = (props) => {
    return (
      <div>
        <li>
          {props.phone.name}
          <span> ${props.phone.price} </span>
          <button 
            className="button"
            onClick={() => {
            props.handleAddToCart(props.phone.name, props.phone.price)
            console.log(props.phone.name, props.phone.price, 'name and price')
          }}> Add to cart</button>
        </li>  
      </div>
    )
}

export default Item;