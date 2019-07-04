import React, { Component } from 'react'

export default class Quantity extends Component {
    handleAddQuantity = () => {
      this.props.handleAddQuantity(this.props.phone);
    }
    handleMinusOneQuantity = () => {
      this.props.handleMinusOneQuantity(this.props.phone);
    }
  
    render() {
      return (
        <span>
           <span>Quantity</span>
          <button onClick={this.handleAddQuantity}> +1 </button>
          <span> {this.props.phone.quantity} </span>
          <button onClick={this.handleMinusOneQuantity}> -1 </button>
        </span>
      )
    }
  }
  
  