import React, { useState } from 'react';
import { Box } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'

import NumberFormat from 'react-number-format';

import registerImg from '../../images/register.png'

import Menu from '../../components/Menu'


function Register() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    function handleSubmit(event) {
        event.preventDefault()

        const data = {
            name,
            email,
            phone,
            password,
            confirmPassword
        }
        console.log('data :>> ', data);
    }

    return (
        <>
            <Menu />

            <Box
                display='flex'
                justifyContent='center'
                // mx={11}
                my={5}
            >

                <img src={registerImg} alt={registerImg} />

                <Box boxShadow={2} px={18} py={8} borderRadius={5} width={500}  >
                    <Box fontSize='h3.fontSize' >Registre-se</Box>

                    <Box fontSize='h6.fontSize' mb={5} >
                        Preencha os detalhes abaixo para se registrar
                    </Box>

                    <form onSubmit={handleSubmit} autoComplete="off"  >

                        <TextField
                            label="Nome"
                            fullWidth
                            margin="normal"
                            variant='outlined'
                            onChange={e => setName(e.target.value)}
                        />

                        <TextField
                            type='email'
                            label="Endereço de Email"
                            fullWidth
                            margin="normal"
                            variant='outlined'
                            onChange={e => setEmail(e.target.value)}
                        />

                        <NumberFormat
                            style={{ marginTop: 22, marginBottom: 22 }}
                            format="+55 (###) #-####-####"
                            mask="_"
                            placeholder='Telefone'
                            customInput={TextField}
                            onChange={e => setPhone(e.target.value)}
                            style={{
                                width: 'inherit',
                                border: 'none',
                                borderBottom: 'solid #ececec 1px',
                                padding: '0 14px 0 58px',
                                borderRadius: '0'
                            }}
                        />

                        <TextField
                            type='password'
                            label="Senha"
                            required
                            fullWidth
                            margin="normal"
                            variant='outlined'
                            onChange={e => setPassword(e.target.value)}
                        />

                        <TextField
                            type='password'
                            label="Confirmar Senha"
                            required
                            fullWidth
                            margin="normal"
                            variant='outlined'
                            onChange={e => setConfirmPassword(e.target.value)}
                        >
                        </TextField>
                        <Button
                            type='submit'
                            style={{ marginTop: 22 }}
                            variant='contained'
                            color='secondary'
                        >
                            Registrar
                        </Button>
                    </form>
                </Box>

            </Box>
        </>
    )
}

export default Register;