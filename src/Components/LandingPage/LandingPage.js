import React from "react";
import "./Css/LandingPage.css";
import ProductList from "../ProductCard/ProductList";
import Footer from "../Footer/Footer";
import FlavourMorque from "../FlavourMorque/FlavourMorque";
import HeaderPanel from "./HeaderPanel";
import HeaderPanelMobile from "./HeaderPanelMobile";

export default function LandingPage() {
  let carouselContent = [
    {
      product: "Whey Protein",
      about: "Pure power in every scoop, Recover fast, grow strong.",
      flavour: "brownie",
      color: "  #D7B899",
    },
    {
      product: "Protein Gainer",
      about:
        "Build strength with every scoop,Fuel your body to go beyond limits.",
      flavour: "mallai",
      color: "rgb(240, 233, 144)",
    },
    {
      product: "Whey Protein",
      about: "Pure power in every scoop, Recover fast, grow strong.",
      flavour: "redVelvet",
      color: "rgb(236, 177, 189)",
    },
    {
      product: "Protein Gainer",
      about:
        "Build strength with every scoop,Fuel your body to go beyond limits.",
      flavour: "vennila",
      color: "	#FFF1DA",
    },
    {
      product: "Whey Protein",
      about: "Pure power in every scoop, Recover fast, grow strong.",
      flavour: "alphanza",
      color: "	#FFF3E0",
    },
    {
      product: "Protein Gainer",
      about:
        "Build strength with every scoop,Fuel your body to go beyond limits.",
      flavour: "cookies",
      color: "rgb(209, 161, 141)",
    },
    {
      product: "Whey Protein",
      about: "Pure power in every scoop, Recover fast, grow strong.",
      flavour: "kheer",
      color: "rgb(240, 233, 144)",
    },
    {
      product: "Protein Gainer",
      about:
        "Build strength with every scoop,Fuel your body to go beyond limits.",
      flavour: "rose",
      color: "	#FFE4E9",
    },
  ];

  const flavourPosition = {
    mallai: {
      right: "-1%",
      bottom: "-1%",
    },
    redVelvet: {
      right: "-6%",
      bottom: "-40%",
    },
    vennila: {
      right: "-7%",
      bottom: "-16%",
    },
    alphanza: {
      right: "-2%",
      bottom: "-11%",
    },
    cookies: {
      right: "-11%",
      bottom: "-1%",
    },
    kheer: {
      right: "-2%",
      bottom: "-21%",
    },
    rose: {
      right: "-10%",
      bottom: "-21%",
    },
  };
  const flavorSize = {
    mallai: {
      height: "300px",
    },
  };

  const brushText = {
    background:
      "url('/brush-bg.png') no-repeat center/contain" /* Use a white brush stroke image */,
    fontFamily: "Permanent Marker, cursive",
    fontSize: "22px",
    color: "black",
    // padding: "20px 40px",
    // display: "inline-block",
    backgroundSize: "cover",
    position: "absolute",
    bottom: "-10%",
    // width:"100px",
    boxSizing: "unset !important",
    fontSize: "40px",
  };
  return (
    <div>
      <HeaderPanel
        carouselContent={carouselContent}
        flavourPosition={flavourPosition}
        flavorSize={flavorSize}
        brushText={brushText}
      />
      <FlavourMorque />

      <ProductList />

      <Footer />
    </div>
  );
}
