import React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom"; // (Nếu bạn sử dụng React Router)
import logo from "../../../image/lion-3317670_640.jpg";
const HeaderMenu = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "50px", borderRadius: "50%" }}
          />
          <Typography variant="h6" component={Link} to="/">
            Kiến thức Crypto
          </Typography>
        </Box>

        {/* Các mục menu */}
        <Box>
          <Button component={Link} to="/" color="inherit">
            Trang chủ
          </Button>
          <Button component={Link} to="/crypto" color="inherit">
            Crypto
          </Button>
          <Button component={Link} to="/forex" color="inherit">
            Forex
          </Button>
          <Button component={Link} to="/stock" color="inherit">
            Chứng khoán
          </Button>
        </Box>

        {/* Đăng nhập */}
        <Button color="inherit">Đăng nhập</Button>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderMenu;
