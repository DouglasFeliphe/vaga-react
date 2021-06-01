import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Confirm from './pages/Confirm';


function Routes() {
    return (
        <BrowserRouter>
            <Route component={Products} path='/' exact />
            <Route component={ProductDetail} path='/product_detail' exact />
            <Route component={Login} path='/login' />
            <Route component={Checkout} path='/checkout' />
            <Route component={Payment} path='/payment' />
            <Route component={Confirm} path='/confirm' />
        </BrowserRouter>
    )
}

export default Routes;