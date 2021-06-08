import React from 'react';
import Menu from '../../components/Menu'
import Table from '../../components/Table'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button'

import DeleteIcon from '@material-ui/icons/Delete'

import { productsMock } from '../../mock/products'

const columns = [
    'Produto',
    'Imagem',
    'Descrição',
    'Quantidade',
    'Preço'
]

function Checkout() {
    return (
        <>
            <Menu />
            <Table
                columns={columns}
                rows={productsMock}
                ActionContent={
                    <TableRow selected>
                        <TableCell colSpan={6} align='right'>
                            <strong>Total: R$300.00</strong>
                        </TableCell>
                        <TableCell  >
                            <Button
                                variant="contained"
                                color="secondary"
                            >
                                Finalizar Compra
                            </Button>
                        </TableCell>
                    </TableRow>
                }
            />
        </>
    )
}

export default Checkout;