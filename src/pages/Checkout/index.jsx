import React from 'react';
import Menu from '../../components/Menu'
import Box from '@material-ui/core/Box'
import Table from '../../components/Table'
import { productsMock } from '../../mock/products'


function Checkout() {
    return (
        <>
            <Menu />
            <Table rows={productsMock}> </Table>
        </>
    )
}

export default Checkout;