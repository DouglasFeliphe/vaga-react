import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import ConfirmationPayment from './pages/ConfirmationPayment';
import Error from './pages/Error'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/products/:id'>
                    <ProductDetail />
                </Route>
                <Route path='/' exact >
                    <Products />
                </Route>
                <Route path='/login' >
                    <Login />
                </Route>
                <Route path='/register' >
                    <Register />
                </Route>
                <Route path='/checkout' >
                    <Checkout />
                </Route>
                <Route path='/payment' >
                    <Payment />
                </Route>
                <Route path='/confirmationPayment' >
                    <ConfirmationPayment />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;