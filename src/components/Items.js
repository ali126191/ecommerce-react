
import React from 'react'
import Item from './Item';

const Items = (props) => {
    return (
      <div className="items">
          {props.phones.map((phone, index) => {
          return <Item handleAddToCart={props.handleAddToCart} phone={phone} key={index}/>
        })}
      </div>
    )
}

export default Items;