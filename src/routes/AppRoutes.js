import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../components/NotFoundPage';
import CheckOutPage from '../pages/Checkout'
import MyAccount from '../pages/MyAccount';
import LoginPage from '../pages/LoginPage';


const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/my-account" component={MyAccount} exact={true} />
            <Route path="/checkout" component={CheckOutPage} exact={true} />
            <Route path="/login" component={LoginPage} exact={true} />
            <Route component={NotFoundPage} /> 
        </Switch>
    </BrowserRouter>
)


export default AppRoutes;