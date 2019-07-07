import React from 'react'

const Item = (props) => {
    return (
      <span className="item">
        <button 
        className="item__button"
        onClick={() => {
        props.handleAddToCart(props.phone.name, props.phone.price)
        }}> Add</button>
          <img className="item__image" src="https://react-phone-e-commerce-project.netlify.com/img/product-1.png" alt=""/>
        <span className="item__row">
          <span className="item__name">{props.phone.name}</span>
          <span className="item__price"> ${props.phone.price} </span>
        </span>
      </span>
    )
}

export default Item;