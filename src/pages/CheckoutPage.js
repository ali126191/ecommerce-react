import React from 'react'
import NavBar from '../components/NavBar';
import Checkout from '../components/Checkout';

const CheckOutPage = (props) => (
    <div>
        <NavBar 
          cart={props.location.state.cart}
        />
        {console.log(props.location.state.cart.map((item) => {
            return item.name;
        })) }
    </div>
);

export default CheckOutPage;