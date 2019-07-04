
import React from 'react'
import Item from './Item';

const Items = (props) => {
    return (
      <div>
        <ol>Phones: {props.phones.map((phone, index) => {
          return <Item handleAddToCart={props.handleAddToCart} phone={phone} key={index}/>
        })}</ol>
      </div>
    )
}

export default Items;