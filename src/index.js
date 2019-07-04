import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';

const P = () => (
    <div>p</div>
)

const Routes = () => (
        <BrowserRouter>
            <div>
                <Route path="/" component={App} exact={true} />
                <Route path="/p" component={P} /> 
            </div>
        </BrowserRouter>
)


ReactDOM.render(<Routes/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
