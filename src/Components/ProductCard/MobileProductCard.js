import React from "react";
import powderImage from "../Svgs/LandingPage/powderImage.png";
import Rating from "@mui/material/Rating";
import "./Css/MobileProductCard.css";

const MobileProductCard = ({ product }) => {
  return (
    <div
      style={{
        // border: "1px solid lightgray",
        // padding: "2px",
        width: "48%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        // boxShadow:"2px 1px lightgray",
        // boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        // width:"180px",
        borderRadius: "5px",
        marginBottom:"20px"
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={powderImage} style={{ width: "113px", height: "127px",border:"2px solid red" }} />
      </div>

      <div className="garnier-logo">Whey Protein</div>
      <div className="product-des-mob">
        Kaser Mallai kulfi flavour, 25g, No added sugar
      </div>
      <div className="product-amount-mob">$60</div>
      <div style={{ width: "100%", textAlign: "center", marginTop: "10px" }}>
        {" "}
        <Rating size="small" value={4.5} readOnly />
      </div>
      <div className="mobile-product-card-button">
        
        <button>View More</button>
      </div>
    </div>
  );
};

export default MobileProductCard;
