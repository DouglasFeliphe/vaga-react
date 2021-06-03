import React from 'react';
import Menu from '../../components/Menu'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


function Login() {
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
            </Box>
        </>
    )
}

export default Login;