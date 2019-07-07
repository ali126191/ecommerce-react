import React from 'react'
import NavBar from '../components/NavBar';
import Checkout from '../components/Checkout';

const CheckOutPage = () => (
    <div>
       <NavBar 
            cart={[1,2]}
        />
    </div>
);

export default CheckOutPage;