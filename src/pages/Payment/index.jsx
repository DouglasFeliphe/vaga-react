
import React from 'react';

import Menu from '../../components/Menu'
import CoupomLink from '../../components/CoupomLink'

import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';




function createData(name, price, fat, carbs, protein) {
    return { name, price };
}

const rows = [
    createData('Teclado Gamer × 1', 159),
    createData('Teclado Gamer × 2', 159),
    createData(<strong>Subtotal</strong>, 159),
    createData(<strong>Total</strong>, 159),

];

function Payment() {
    return (
        <>
            <Menu />
            <Box
                display='flex'
                mx={11}
                my={5}
            >
                <Box px={22}  >
                    <Box fontSize='h3.fontSize' >Finalizar compra</Box>

                    <Box fontSize='h6.fontSize' mb={5} >
                        Detalhes de faturamento
                    </Box>

                    <form noValidate autoComplete="off" >
                        <Box display='flex'>
                            <TextField
                                id="standard-full-width"
                                label="Nome"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                            <TextField
                                id="standard-full-width"
                                label="Sobrenome"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Box>
                        <TextField
                            id="standard-full-width"
                            label="Nome da Empresa(Opcional)"
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-full-width"
                            label="Endereço"
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-full-width"
                            label="Cidade"
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-full-width"
                            label="Estado"
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-full-width"
                            label="Cep"
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-full-width"
                            label="Telefone"
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="standard-full-width"
                            label="Endereço de Email"
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </form>
                </Box>
                <Box
                    display='flex'
                    flexDirection='column'
                    width={700}
                    height={700}
                >
                    <h3>Seu pedido</h3>
                    <TableContainer component={Paper} >
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Produto</TableCell>
                                    <TableCell>Subtotal</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell >
                                            <Box color='success.main' fontWeight={500}>
                                                R${row.price}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* <CoupomLink /> */}

                    <Button
                        variant="contained"
                        size='large'
                        color="secondary"
                        style={{ marginTop: 44 }}
                    >
                        Finalizar Compra
                    </Button>
                </Box>
            </Box>
        </>
    )
}

export default Payment;