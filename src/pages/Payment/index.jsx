
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios'
// import { } from '../../reducers/shoppingCartSlice'

import Menu from '../../components/Menu'
import PriceLabel from '../../components/PriceLabel'
import CoupomLink from '../../components/CoupomLink'

import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



function Payment() {

    // redux
    const products = useSelector(state => state.shoppingCart.products)
    const total = useSelector(state => state.shoppingCart.total)

    const [cities, setCities] = useState([]);
    const [city, setCity] = useState(' ');
    const [UFs, setUFs] = useState([]);
    const [uf, setUf] = useState(' ');

    useEffect(() => {
        async function getUFsFromAPI() {
            const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            setUFs(response.data)
        }

        getUFsFromAPI()
    }, []);

    useEffect(() => {
        if (uf !== ' ') {
            async function getCitiesFromAPI() {
                const response = await axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`)
                setCities(response.data)
            }

            getCitiesFromAPI()
        }
    }, [uf]);


    function handleSelectUFChange(event) {
        setUf(event.target.value)
    }

    function handleSelectCityChange(event) {
        setCity(event.target.value)
    }

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

                    <form noValidate autoComplete="off"  >
                        <Box display='flex' gridGap={22}>
                            <TextField
                                label="Nome"
                                variant='outlined'
                                fullWidth
                            />
                            <TextField
                                label="Sobrenome"
                                variant='outlined'
                                fullWidth
                            />
                        </Box>
                        <TextField
                            label="Nome da Empresa(Opcional)"
                            fullWidth
                            margin="normal"
                            variant='outlined'
                        />
                        <TextField
                            type='email'
                            label="Endereço"
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            variant='outlined'
                        />

                        <Box display='flex' gridGap={22}>
                            <FormControl variant="outlined" margin='normal' fullWidth>
                                <InputLabel >Estado</InputLabel>
                                <Select
                                    value={uf}
                                    onChange={handleSelectUFChange}
                                    label='Estado'
                                >
                                    {UFs.map(uf =>
                                        <MenuItem
                                            key={uf.id}
                                            value={uf.sigla}
                                        >
                                            {uf.sigla}
                                        </MenuItem>
                                    )}
                                </Select>
                            </FormControl>

                            <FormControl variant='outlined' margin='normal' fullWidth>
                                <InputLabel>Cidade</InputLabel>
                                <Select
                                    label='Cidade'
                                    value={city}
                                    onChange={handleSelectCityChange}
                                >
                                    {cities.map(city => (
                                        <MenuItem
                                            key={city.id}
                                            value={city.nome}
                                        >
                                            {city.nome}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Box>

                        <TextField
                            label="Cep"
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            variant='outlined'
                        />
                        <TextField
                            label="Telefone"
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            variant='outlined'
                        />
                        <TextField
                            label="Endereço de Email"
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            variant='outlined'
                        />
                    </form>
                </Box>
                <Box
                    display='flex'
                    flexDirection='column'
                    width={500}
                // height={700}
                >
                    <h3>Seu pedido</h3>
                    <TableContainer component={Paper} >
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Produto</TableCell>
                                    <TableCell>Quantidade</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map(product => (
                                    <TableRow key={product.id}>
                                        <TableCell component="th" scope="row">
                                            {product.title}
                                        </TableCell>
                                        <TableCell >
                                            <Box fontWeight={500}>
                                                x{product.productQty}
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ))}
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <strong>Total</strong>
                                    </TableCell>
                                    <TableCell >
                                        <PriceLabel value={total} />
                                    </TableCell>
                                </TableRow>
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