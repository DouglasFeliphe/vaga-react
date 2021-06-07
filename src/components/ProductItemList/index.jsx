import * as React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';


export default function ProdutctItemList({ image, title, subHeader, price, ratingValue, onClick }) {
  return (
    <ListItem onClick={onClick}>
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src={image} />
      </ListItemAvatar>
      <ListItemText primary={title} secondary={subHeader} />
      <Button
        variant="outlined"
        color='primary'
      >Outlined</Button>
    </ListItem>
  );
}
