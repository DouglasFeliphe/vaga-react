import React from 'react';
import PropTypes from 'prop-types';


import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'

import PriceLabel from '../PriceLabel';
import RatingLabel from '../RatingLabel';

import { useStyles } from './styles'

function ProductCard({ image, title, subHeader, price, ratingValue, onClick }) {

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

            <CardContent>
                <PriceLabel value={price} />
            </CardContent>

            <RatingLabel title='Avaliação' value={ratingValue} />

            <Box display='flex' justifyContent="space-around">
                <CardActions >
                    <Button variant="contained" color="primary" href="#contained-buttons">
                        Conferir
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