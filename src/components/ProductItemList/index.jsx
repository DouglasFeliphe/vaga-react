import * as React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import RatingLabel from "../RatingLabel";
import PriceLabel from "../PriceLabel";

export default function ProdutctItemList({
  image,
  title,
  subHeader,
  price,
  ratingValue,
  onClick,
}) {
  return (
    <List>
      <ListItem onClick={onClick}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={image} />
        </ListItemAvatar>
        <ListItemText primary={title} />
        <ListSubheader>{subHeader}</ListSubheader>
        <PriceLabel value={price} />
        <ListSubheader>
          <RatingLabel title="Avaliação" value={ratingValue} />
        </ListSubheader>
        <Button variant="contained" color="primary">
          Conferir
        </Button>
      </ListItem>
      <Divider />
    </List>
  );
}
