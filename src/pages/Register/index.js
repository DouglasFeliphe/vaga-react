import React from 'react';
import { Box } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Button } from '@material-ui/core'
import { Input } from '@material-ui/core'
import MaskedInput from 'react-text-mask'
import registerImg from '../../images/register.png'

import Menu from '../../components/Menu'
import { TextFieldInput } from './TextFieldTelMask'


function Register() {
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

                <Box width={500} >
                    <Box fontSize='h3.fontSize' >Registre-se</Box>

                    <Box fontSize='h6.fontSize' mb={5} >
                        Preencha os detalhes abaixo para se registrar
                    </Box>
                    <form autoComplete="off"  >

                        <TextField
                            label="Nome"
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
                        <Input label='Telefone' inputComponent={TextFieldInput} />
                        {/* <TextField
                            label="Telefone"
                            required
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            variant='outlined'
                        /> */}
                        <TextField
                            type='password'
                            label="Senha"
                            required
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            variant='outlined'
                        />
                        <TextField
                            type='password'
                            label="Confirmar Senha"
                            required
                            // helperText="Full width!"
                            fullWidth
                            margin="normal"
                            variant='outlined'
                        >
                        </TextField>
                        <Button
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