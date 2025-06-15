import React from "react";
import powderImage from "../Svgs/LandingPage/powderImage1.png";
import Rating from "@mui/material/Rating";
import "./Css/MobileProductCard.css";
import { useNavigate } from "react-router-dom";

const MobileProductCard = ({ product }) => {
   const navigate = useNavigate();
  return (
    <div
      style={{
        width: "48%",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 12px 28px 0px, rgba(0, 0, 0, 0.1) 0px 2px 4px 0px, rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset",
        borderRadius: "5px",
        marginBottom: "20px",
        width: "42%",
      }}
    >
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <img src={powderImage} style={{  height: "127px" }} />
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
        <button
          onClick={() => {
            navigate("/product-details");
          }}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default MobileProductCard;
