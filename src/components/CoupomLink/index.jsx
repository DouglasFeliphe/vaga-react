import React from "react";
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

function CoupomLink({ }) {
    return (
        <Box my={5} p={5} borderRadius={3} bgcolor='info.main'>
            Você tem um cupom de desconto?
            <Link href="#" variant="body2">
                <b>Clique aqui e informe o código do seu cupom de desconto</b>
            </Link>
        </Box>
    )
}

export default CoupomLink
