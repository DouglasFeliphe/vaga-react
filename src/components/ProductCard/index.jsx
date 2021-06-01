import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Box from '@material-ui/core/Box'
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { useStyles } from './styles'


function ProductCard(props) {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={props.image}
                title="Paella dish"
            />

            <CardHeader
                title="Cadeira Gamer"
                subheader="lorem ipsum sidum ortmet"
            />

            {/* <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                </Typography>
            </CardContent> */}

            <Box display='flex' justifyContent="space-around">
                <CardActions >
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon color='secondary' />
                    </IconButton>
                    <Button variant="contained" color="primary" href="#contained-buttons">
                        Add To Cart
                    </Button>
                </CardActions>
            </Box>
        </Card>
    );
}

ProductCard.propTypes = {
    image: PropTypes.string.isRequired
};

export default ProductCard