import { useState } from "react";
import { Box, Typography, Button, Alert } from "@mui/material";
import SigninImage from "../assets/signin.jpg";

import { styled } from "@mui/material/styles";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const CustomInput = styled("input")(({ theme }) => ({
  padding: "14px",
  outline: "none",
  background: "#f3F3F3",
  margin: "8px 0",
  borderRadius: theme.shape.borderRadius,
  border: "#F0F0F0 solid 1px ",
}));

const Signin = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [msg, setErrorMsg] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const navigate = useNavigate();
  const signin = (e) => {
    e.preventDefault();
    console.log(user);
    setLoading(true);
    axios
      .post("/token/", user)
      .then((res) => {
        localStorage.setItem("refresh", res.data.refresh);
        localStorage.setItem("access", res.data.access);
        localStorage.setItem("username", user.username);
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        setErrorMsg(true);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: { xs: "90%", md: "70%" },
        margin: "6rem auto",
        height: "65vh",
        overflow: "hidden",
        boxShadow: "0px 0px 20px 10px #ddd",
        borderRadius: "4px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          background: `url(${SigninImage})`,
          backgroundSize: "cover",
          objectFit: "cover",
          display: { xs: "none", sm: "block" },
        }}
      ></Box>
      <Box
        onSubmit={signin}
        component="form"
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "30px",
          background: "#fff",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Signin
        </Typography>
        {loading ? <p>loading....</p> : null}
        {msg ? <Alert severity="error">donnee n'est pas valid</Alert> : null}
        <Box position="relative">
          <CustomInput
            type="text"
            name="username"
            placeholder="username"
            required
            value={user.username}
            onChange={handleChange}
          />
          <PersonIcon
            sx={{ position: "absolute", top: "30%", right: "3%" }}
            color="disabled"
          />
        </Box>
        <Box position="relative">
          <CustomInput
            type="password"
            name="password"
            placeholder="password"
            required
            value={user.password}
            onChange={handleChange}
          />
          <LockIcon
            sx={{ position: "absolute", top: "30%", right: "3%" }}
            color="disabled"
          />
        </Box>
        <Button
          disableElevation
          sx={{ mt: 3 }}
          variant="contained"
          size="small"
          type="submit"
        >
          sign in
        </Button>
      </Box>
    </Box>
  );
};

export default Signin;
