import React from "react";
import "./Css/LandingPage.css";
import ProductList from "../ProductCard/ProductList";
import Footer from "../Footer/Footer";
import FlavourMorque from "../FlavourMorque/FlavourMorque";
import HeaderPanel from "./HeaderPanel";
import HeaderPanelMobile from "./HeaderPanelMobile";
import { isMobile, isTablet, isBrowser } from "react-device-detect";

export default function LandingPage() {
  let carouselContent = [
    // {
    //   product: "Whey Protein",
    //   about: "Pure power in every scoop, Recover fast, grow strong.",
    //   flavour: "brownie",
    //   color: "  #D7B899",
    // },
    // {
    //   product: "Protein Gainer",
    //   about:
    //     "Build strength with every scoop,Fuel your body to go beyond limits.",
    //   flavour: "mallai",
    //   color: "rgb(240, 233, 144)",
    // },
    // {
    //   product: "Whey Protein",
    //   about: "Pure power in every scoop, Recover fast, grow strong.",
    //   flavour: "redVelvet",
    //   color: "rgb(236, 177, 189)",
    // },
    {
      product: "Protein Gainer",
      about:
        "Build strength with every scoop,Fuel your body to go beyond limits.",
      flavour: "vennila",
      color: "	#FFF1DA",
    },
    // {
    //   product: "Whey Protein",
    //   about: "Pure power in every scoop, Recover fast, grow strong.",
    //   flavour: "alphanza",
    //   color: "	#FFF3E0",
    // },
    // {
    //   product: "Protein Gainer",
    //   about:
    //     "Build strength with every scoop,Fuel your body to go beyond limits.",
    //   flavour: "cookies",
    //   color: "rgb(209, 161, 141)",
    // },
    // {
    //   product: "Whey Protein",
    //   about: "Pure power in every scoop, Recover fast, grow strong.",
    //   flavour: "kheer",
    //   color: "rgb(240, 233, 144)",
    // },
    // {
    //   product: "Protein Gainer",
    //   about:
    //     "Build strength with every scoop,Fuel your body to go beyond limits.",
    //   flavour: "rose",
    //   color: "	#FFE4E9",
    // },
  ];

  const flavourPosition = {
    mallai: {
      right: "-1%",
      bottom: "-1%",
    },
    redVelvet: {
      right: isMobile ? "-16%" : "-6%",
      bottom: isMobile ? "-26%" : "-40%",
    },
    vennila: {
      right: "-7%",
      bottom: isMobile ? "-3%" : "-16%",
    },
    alphanza: {
      right: isMobile ? "-6%" : "-2%",
      bottom: "-11%",
    },
    cookies: {
      right: isMobile ? "-17%" : "-1%",
      bottom: isMobile ? "-5%" : "-1%",
    },
    kheer: {
      right: isMobile ? "-5%" : "-2%",
      bottom: isMobile ? "-10%" : "-21%",
    },
    rose: {
      right: isMobile ? "-14%" : "-10%",
      bottom: isMobile ? "-8%" : "-21%",
    },
  };
  const flavorSize = {
    mallai: {
      height: isMobile?"121px":"270px",
    },
    brownie: {
      height: isMobile ? "100px" : "",
    },
    redVelvet: { height: isMobile ? "207px" : "" },
    vennila: {
      height: isMobile ? "124px" : "",
    },
    alphanza: {
      height: isMobile ? "169px" : "",
    },
    cookies: {
      height: isMobile ? "158px" : "",
    },
    kheer: {
      height: isMobile ? "129px" : "",
    },
    rose: {
      height: isMobile ? "186px" : "",
    },
  };

  const brushText = {
    background:
      "url('/brush-bg.png') no-repeat center/contain" /* Use a white brush stroke image */,
    fontFamily: "Permanent Marker, cursive",
    fontSize: isMobile ? "15px" : "40px",
    color: "black",
    // padding: "20px 40px",
    // display: "inline-block",
    backgroundSize: "cover",
    position: "absolute",
    bottom: "-10%",
    // width:"100px",
    boxSizing: "unset !important",
    // fontSize: "40px",
  };
  return (
    <div>
      {!isMobile ? (
        <HeaderPanel
          carouselContent={carouselContent}
          flavourPosition={flavourPosition}
          flavorSize={flavorSize}
          brushText={brushText}
        />
      ) : (
        <HeaderPanelMobile
          carouselContent={carouselContent}
          flavourPosition={flavourPosition}
          flavorSize={flavorSize}
          brushText={brushText}
        />
      )}

     {isMobile&& <FlavourMorque />}

      <ProductList />

      <Footer />
    </div>
  );
}
