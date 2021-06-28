import React from 'react';
import { Link } from 'react-router-dom'

import { Box, TextField, Button } from '@material-ui/core'
import Menu from '../../components/Menu'



function Login() {

    const preventDefault = (event) => event.preventDefault();

    return (
        <>
            <Menu />
            <Box
                mx={66}
                my={11}
                display='flex'
                flexDirection='column'
            >
                <h1>Entrar</h1>
                <form noValidate autoComplete="off" >
                    <TextField
                        id="standard-full-width"
                        label="Nome de usuário ou e-mail"
                        style={{ margin: 8 }}
                        placeholder="Placeholder"
                        // helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        type='password'
                        id="standard-full-width"
                        label="Senha"
                        style={{ margin: 8 }}
                        placeholder="Placeholder"
                        // helperText="Full width!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <Button
                        variant="contained"
                        color="secondary"
                    >
                        Acessar
                    </Button>
                </form>
                <Link href="/" onClick={preventDefault}>
                    <strong style={{ color: 'blue' }}>Cadastre-se</strong>
                </Link>
            </Box>
        </>
    )
}

export default Login;