import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Confirm from './pages/Confirm';
import Error from './pages/Error'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact >
                    <Products />
                </Route>
                <Route path='/product_detail'>
                    <ProductDetail />
                </Route>
                <Route path='/login' >
                    <Login />
                </Route>
                <Route path='/checkout' >
                    <Checkout />
                </Route>
                <Route path='/payment' >
                    <Payment />
                </Route>
                <Route path='/confirm' >
                    <Confirm />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;