import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/joy";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
// import logo from "../Svgs/logo.png";
import logo from "../NavBar/Svg/logo.png"

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "	#0A1C3E",
        padding: "30px 20px",
        marginTop: "40px",
        borderTop: "1px solid #ddd",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Store Info */}
        <Typography level="h5" fontWeight="lg" mb={{ xs: 2, md: 0 }}>
          <img src={logo} style={{ width: "230px", height: "60px" }} />
        </Typography>

        {/* Navigation Links */}
        <Box sx={{ display: "flex", gap: 3, mb: { xs: 2, md: 0 } }}>
          <Link href="/" underline="none">
            Home
          </Link>
          <Link href="/products" underline="none">
            Products
          </Link>
          <Link href="/contact" underline="none">
            Contact
          </Link>
          <Link href="/review" underline="none">
            Leave a Review
          </Link>
        </Box>

        {/* Social Icons */}
        <Box sx={{ display: "flex", gap: 2 }}>
          <IconButton
            variant="plain"
            color="neutral"
            component="a"
            href="https://facebook.com"
            target="_blank"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            variant="plain"
            color="neutral"
            component="a"
            href="https://instagram.com"
            target="_blank"
          >
            <InstagramIcon />
          </IconButton>
          <IconButton
            variant="plain"
            color="neutral"
            component="a"
            href="mailto:yourstore@email.com"
          >
            <EmailIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Copyright */}
      <Typography
        level="body-sm"
        textAlign="center"
        sx={{ marginTop: 3, color: "#888" }}
      >
        © {new Date().getFullYear()} YourStoreName. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
