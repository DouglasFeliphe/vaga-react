import React from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, TextField, Button } from "@material-ui/core";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountBox from "@material-ui/icons/AccountBox";
import VpnKey from "@material-ui/icons/VpnKey";

import { useStyles } from "./styles";
import { setUser } from "../../reducers/userSlice";
const lottieLogin =
  "https://assets7.lottiefiles.com/private_files/lf30_fw6h59eu.json";

function Login() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const preventDefault = (event) => event.preventDefault();

  async function handleSubmit(event) {
    event.preventDefault();

    const user = {
      name: email.substring(0, email.indexOf("@")),
      email,
      password,
      isLoggedIn: true,
    };
    localStorage.setItem("user", JSON.stringify(user));
    await dispatch(setUser(user));
    history.push("/");
  }

  return (
    <>
      {/* <Menu /> */}
      <Box
        className={classes.root}
        style={{ height: "100vh" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          className={classes.section}
          border={1}
          borderColor="#C2C2C2"
          borderRadius={8}
          bgcolor="white"
          display="flex"
        >
          <Box className={classes.player} width="50%" borderLeft={1}>
            <lottie-player
              src={lottieLogin}
              background="transparent"
              speed="1"
              loop
              autoplay
            ></lottie-player>
          </Box>
          <Box
            // width={{ xs: "50%", sm: 0, md: "50%" }}
            // height={{ sm: "100vh", md: "fit-content", lg: "fit-content" }}
            py={{ xs: 2, sm: 44, md: 4, lg: 4 }}
            color="#fff"
            bgcolor="primary.main"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box pl={8} pr={8}>
              <h1 className={classes.title}>Entrar</h1>
              <form
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <TextField label="Outlined" color="secondary" focused /> */}
                <TextField
                  className={classes.textField}
                  color="secondary"
                  // helperText="Full width!"
                  // label="Nome de usuário ou e-mail"
                  // variant="standard"
                  margin="dense"
                  placeholder="Nome de usuário ou e-mail"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountBox color="disabled" />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event) => setEmail(event.target.value)}
                />
                <TextField
                  className={classes.textField}
                  type="password"
                  label="Senha"
                  placeholder="Placeholder"
                  // helperText="Full width!"
                  fullWidth
                  margin="normal"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <VpnKey color="disabled" />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event) => setPassword(event.target.value)}
                />
                <Button
                  className={classes.button}
                  type="submit"
                  variant="contained"
                  color="secondary"
                >
                  Acessar
                </Button>
              </form>

              <Box
                onClick={() => history.push("/register")}
                width="fit-content"
                mt={5}
                borderBottom={2}
                borderColor="#fff"
              >
                <Link to="/register" onClick={preventDefault}>
                  Criar Conta
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Login;
