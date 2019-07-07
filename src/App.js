import React, { Component } from 'react';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import NavBar from './components/NavBar.js';
import Header from './components/Header';
import Items from './components/Items';
import Cart from './components/Cart';
import Checkout from './components/Checkout';

export default class Ecommerce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phones: [
        {
          name: 'Google Pixel',
          price: 1000,
          quantity: 0
        },
        {
          name: 'Black Berry',
          price: 600,
          quantity: 0
        },
        {
          name: 'Iphone xs',
          price: 1400,
          quantity: 0
        },
        {
          name: 'Iphone 8',
          price: 6400,
          quantity: 0
        },
        {
          name: 'Iphone 4',
          price: 300,
          quantity: 0
        },
        {
          name: 'Moto G 5',
          price: 180,
          quantity: 0
        }
      ],
      cart: []
    }
  }

  handleAddToCart = (name, price) => {
    this.setState((prevState) => {  
        const isPhoneInCart = prevState.cart.filter(phone => {
          if (phone.name === name) {
            return true;
          }
          return false;
        });
        if (!isPhoneInCart.length > 0) {
          return {
            cart: prevState.cart.concat({
              name: name,
              price: price,
              quantity: 1
            })
          }  
        }        
    })
  }

  handleAddQuantity = (phoneAddTo) => {
    const index = this.state.cart.findIndex( phone => phone.name === phoneAddTo.name);
    if (index === -1)
      return ;
    else {
      this.setState((prevState) => (
      {
        cart: [
           ...prevState.cart.slice(0,index),
           Object.assign({}, prevState.cart[index], {quantity: phoneAddTo.quantity + 1}),
           ...prevState.cart.slice(index+1)
        ]
      }));
    }
  }

  handleMinusOneQuantity = (phoneAddTo) => {
    const index = this.state.cart.findIndex( phone => phone.name === phoneAddTo.name);
    if (index === -1)
      return ;
    else {
      this.setState((prevState) => (
      {
        cart: [
           ...prevState.cart.slice(0,index),
           Object.assign({}, prevState.cart[index], {quantity: phoneAddTo.quantity -1}),
           ...prevState.cart.slice(index+1)
        ]
      }));
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('items');
      const items = JSON.parse(json);
        if (typeof items === 'object' && items) {
          this.setState(() => ({ items: items }))
        }
      const jsonCart = localStorage.getItem('cart');
      const cart = JSON.parse(jsonCart);
      if (cart) {
        this.setState(() => ({ cart: cart }))
      }
    } catch (e) {
      
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.items !== this.state.items) {
      const json = JSON.stringify(this.state.items);
      localStorage.setItem('items', json);
    }
    if (prevState.cart !== this.state.cart) {
      const json = JSON.stringify(this.state.cart);
      localStorage.setItem('cart', json)
    }
  }

  render() {
    const title = 'Ecommerce Application';
    const subtitle = 'Buy your favorite cell phone online';
    return (
      <div>
        <NavBar 
        cart={this.state.cart}
        />
        <Header 
          title={title} 
          subtitle={subtitle}
        />
        <div className="container">
          <h2 className="h2">Browse Products</h2>

          <Items 
            phones={this.state.phones}
            handleAddToCart={this.handleAddToCart}
            handleReset={this.handleReset}
          />
          <Checkout
            cart={this.state.cart} 
            handleAddQuantity={this.handleAddQuantity}
            handleMinusOneQuantity={this.handleMinusOneQuantity}
          />
        </div>
      </div>
      )
  }
}



