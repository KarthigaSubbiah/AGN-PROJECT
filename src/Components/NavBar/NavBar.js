import React from "react";
import logo from "./Svg/logo.png";

const NavBar = () => {
  let navColor = {
    color: "orange",
    fontWeight: "bold",
  };

  return (
    <div
      style={{
        width: "100%",
        height: "70px",
        backgroundColor: "#162a4e",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position:"sticky",
        top:"0",
        zIndex:"100000",
        // background: "linear-gradient(to right, #061b42, white)"
      }}
    >
      <div>
        <img src={logo} style={{ width: "230px", height: "60px" }} />
      </div>
      <div style={{ display: "flex", gap: "20px",paddingRight:"20px" }}>
        <div style={{ ...navColor }}>Home</div>
        <div style={{ ...navColor }}>About Us</div>
        <div style={{ ...navColor }}>Login</div>
      </div>
    </div>
  );
};

export default NavBar;
