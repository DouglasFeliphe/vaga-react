import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import Rating from '@material-ui/lab/Rating';

import { useStyles } from './styles'

function ProductCard({ title, subHeader, image, ratingValue, onClick }) {

    const classes = useStyles();

    return (
        <Card
            className={classes.root}
            onClick={onClick}
        >
            <CardMedia
                className={classes.media}
                image={image}
                title="Paella dish"
            />

            <CardHeader
                title={title}
                subheader={subHeader}
            />

            {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent> */}

            <Box component="fieldset" mb={3} borderColor="transparent">
                <Typography component="legend">Avaliação</Typography>
                <Rating name="read-only" value={ratingValue} readOnly />
            </Box>

            <Box display='flex' justifyContent="space-around">
                <CardActions >
                    <Button variant="contained" color="primary" href="#contained-buttons">
                        INSERIR NO CARRINHO
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ratingValue: PropTypes.number.isRequired
};

export default ProductCard