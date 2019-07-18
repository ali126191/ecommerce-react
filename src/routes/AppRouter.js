import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import NotFoundPage from '../components/NotFoundPage';
import CartPage from '../components/CartPage';
import HelpPage from '../components/HelpPage';

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact={true} />
            <Route path="/cart" component={CartPage} exact={true} />
            <Route path="/help" component={HelpPage} exact={true} />
            <Route component={NotFoundPage} /> 
        </Switch>
    </BrowserRouter>
)


export default AppRoutes;