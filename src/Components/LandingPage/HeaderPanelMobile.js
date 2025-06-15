import React from "react";
import { Carousel } from "antd";
import powderImage from "../Svgs/LandingPage/powderImage1.png";
import flavourList from "../../Utility/FlavouList";
import chocolatefill from "../Svgs/LandingPage/chocolate-fill.png";
import vennilafill from "../Svgs/LandingPage/venila2.jpg";
import kulfifill from "../Svgs/LandingPage/mallaikulfi.jpg";

const HeaderPanelMobile = ({ flavourPosition, flavorSize, brushText }) => {
  let carouselContent = [
    {
      image1: powderImage,
      image2: "",
      backgroundImage: chocolatefill,
      text: "Pure power in every scoop, Recover fast, grow strong.",
    },
    {
      image1: powderImage,
      image2: "",
      backgroundImage: vennilafill,
      text: "Pure power in every scoop, Recover fast, grow strong.",
    },
    {
      image1: powderImage,
      image2: "",
      backgroundImage:kulfifill ,
      text: "Pure power in every scoop, Recover fast, grow strong.",
    },
  ];

  return (
    <Carousel
      arrows
      adaptiveHeight={true}
      dotPosition="bottom"
      infinite={false}
      autoplay={{ dotDuration: true }}
      autoplaySpeed={5000}
    >
      {carouselContent.map((content, index) => {
        return (
          <div>
            <div
              style={{
                // width: "100%",
                height: "65vh",
                position: "relative",
              }}
              key={index}
              className="alpha-panel"
            >
              <div
                style={{
                  backgroundImage: `url(${content.backgroundImage})`,
                  // backgroundColor: "#c08962",
                  // backgroundColor: content.color,
                  width: "100%",
                  height: "65vh",
                  objectFit: "contain",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#cccccc",
                  // filter: "blur(1px)",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>

              <div style={{ position: "relative" }}></div>

              <div
                style={{
                  position: "absolute",
                  left: "-20%",
                  top: "20%",
                  zIndex: 0,
                }}
              >
                <img
                  src={content.image1}
                  style={{
                    width: "336px",
                    height: "235px",
                  }}
                ></img>
                <div
                  style={{
                    boxShadow: "0 8px 10px rgba(37, 22, 22, 0.3)",
                    height: "2px",
                  }}
                ></div>
              </div>

              {/* <div
                  style={{
                    position: "absolute",
                    left: "33%",
                    top: "46%",
                    zIndex: 0,
                  }}
                >
                  <img
                    src={powderImage}
                    style={{ width: "155px", height: "172px" }}
                  ></img>
                </div> */}

              {/* Powder */}

              {/* <div
                  style={{
                    position: "absolute",
                    right: "-17%",
                    bottom: "-1%",
                    ...flavourPosition[content.flavour],
                    zIndex: 0,
                  }}
                >
                  <img
                    src={flavourList[content.flavour].image}
                    style={{ ...flavorSize[content.flavour], rotate: "-10deg" }}
                  ></img>
                </div> */}

              <div
                style={{
                  position: "absolute",
                  left: "51%",
                  transform: "translate(-30%,-50%)",
                  top: "26%",
                }}
              >
                <div>
                  <div className="banel-product-name">Whey Protein</div>
                  <div
                    className="whey-protein-text"
                    style={{ ...brushText, width: "152px" }}
                  >
                    {" "}
                  {content.text}
                  </div>
                  <div className="banel-button">
                    <button class="button-33" role="button">
                      More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default HeaderPanelMobile;
