import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { AccountCircle, ShoppingCart } from "@material-ui/icons";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";

import {
  setQty,
  setShoppingCart,
  clearShoppingCart,
} from "../../reducers/shoppingCartSlice";
import { searchProductsByTerm } from "../../reducers/productsSlice";
import { setIsLoggedIn, setUser } from "../../reducers/userSlice";

import { useStyles } from "./styles";

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const history = useHistory();

  // redux
  const qty = useSelector((state) => state.shoppingCart.qty);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // const [inputSearchValue, setInputSearchValue] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    async function loadUser() {
      const user = await localStorage.getItem("user");
      if (user) {
        dispatch(setUser(JSON.parse(user)));
      }
    }
    loadUser();
    // return () => {
    //   user && dispatch(setIsLoggedIn(false));
    // }
  }, [dispatch]);

  useEffect(() => {
    async function loadShoppingCart() {
      const user = await localStorage.getItem("user");
      const shoppingCartQty = await localStorage.getItem("shoppingCartQty");
      const shoppingCart = await localStorage.getItem("shoppingCart");
      if (user) {
        if (shoppingCartQty) {
          dispatch(setQty(JSON.parse(shoppingCartQty)));
        }
        if (shoppingCart) {
          dispatch(setShoppingCart(JSON.parse(shoppingCart)));
        }
      }
    }
    loadShoppingCart();
  }, [dispatch]);

  async function handleLogout() {
    handleMenuClose();
    await dispatch(setIsLoggedIn(false));
    await dispatch(clearShoppingCart());
    localStorage.removeItem("user");
    localStorage.removeItem("shoppingCart");
    localStorage.removeItem("shoppingCartQty");
    // localStorage.removeItem("token");
    // await dispatch(setIsLoggedIn(false));
    history.push("/");
  }

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleInputSearch = (value) => {
    dispatch(searchProductsByTerm(value));
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <IconButton aria-label="account of current user" color="inherit">
          <Icon>account_circle</Icon>
        </IconButton>
        Minha Conta
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <IconButton>
          <Icon>logout</Icon>
        </IconButton>
        Sair
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => history.push("/checkout")}>
        <IconButton>
          <Badge badgeContent={qty} color="secondary">
            {qty > 0 ? (
              <ShoppingCart style={{ color: "yellowgreen" }} />
            ) : (
              <ShoppingCart color="action" />
            )}
          </Badge>
        </IconButton>
        Carrinho
      </MenuItem>
      {user.isLoggedIn ? (
        <>
          <MenuItem onClick={handleProfileMenuOpen}>
            <IconButton>
              <AccountCircle color="primary" />
            </IconButton>
            <span>{user.email}</span>
          </MenuItem>
          <MenuItem onClick={handleLogout}>
            <IconButton>
              <Icon color="error">logout</Icon>
            </IconButton>
            <span>Sair</span>
          </MenuItem>
        </>
      ) : (
        <MenuItem onClick={() => history.push("/login")}>
          <IconButton>
            <Icon>input</Icon>
          </IconButton>
          <span>Login</span>
        </MenuItem>
      )}
      {/* {user.isLoggedIn && (
       
      )} */}
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </div>
          <Typography
            onClick={() => history.push("/")}
            className={classes.title}
            variant="h6"
            noWrap
          >
            E-Commerce
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={(e) => handleInputSearch(e.target.value)}
              placeholder="Buscar…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Button onClick={() => history.push("/")} color="inherit">
              produtos
            </Button>
            <Button onClick={() => history.push("/checkout")} color="inherit">
              Carrinho
              <Badge badgeContent={qty} color="secondary">
                {qty > 0 ? (
                  <ShoppingCart style={{ color: "yellowgreen" }} />
                ) : (
                  <ShoppingCart />
                )}
              </Badge>
            </Button>
            {user.isLoggedIn ? (
              <Button
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                {user.name}
                <Icon>account_circle</Icon>
              </Button>
            ) : (
              <Button
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={() => history.push("/login")}
                color="inherit"
              >
                Login
                <Icon>login</Icon>
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
