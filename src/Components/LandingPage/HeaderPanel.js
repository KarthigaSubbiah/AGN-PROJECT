import React from 'react';
import powderImage from "../Svgs/LandingPage/powderImage1.png";
import { Carousel } from "antd";
import flavourList from "../../Utility/FlavouList";

const HeaderPanel = ({carouselContent,flavourPosition,flavorSize,brushText}) => {
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
                    // backgroundImage: `url(${gymBackground})`,
                    // backgroundColor: "#c08962",
                    backgroundColor: content.color,
                    width: "100%",
                    height: "65vh",
                    objectFit: "contain",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    // backgroundColor: "#cccccc",
                    filter: "blur(1px)",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>

                <div style={{ position: "relative" }}></div>

                {/* <div
                  style={{
                    position: "absolute",
                    left: "10%",
                    top: "20%",
                    zIndex: 0,
                  }}
                >
                  <img
                    src={powderImage}
                    style={{
                      width: "300",
                      height: "256px",
                    }}
                  ></img>
                  <div
                    style={{
                      boxShadow: "0 8px 10px rgba(37, 22, 22, 0.3)",
                      height: "2px",
                    }}
                  ></div>
                </div> */}

                <div
                  style={{
                    position: "absolute",
                    left: "-10%",
                    top: "0%",
                    zIndex: 0,
                  }}
                >
                  <img
                    src={powderImage}
                    // style={{ width: "181px", height: "199px" }}
                  ></img>
                </div>

                {/* <div
                  style={{
                    position: "absolute",
                    left: "20%",
                    top: "32%",
                    zIndex: 0,
                  }}
                >
                  <img
                    src={powderImage}
                    style={{ width: "181px", height: "199px" }}
                  ></img>
                </div> */}

                {/* Powder */}

                <div
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
                </div>

                <div
                  style={{
                    position: "absolute",
                    left: "35%",
                    transform: "translate(-30%,-50%)",
                    top: "35%",
                  }}
                >
                  <div>
                    <div className="banel-product-name">Whey Protein</div>
                    <div
                      className="whey-protein-text"
                      style={{ ...brushText, width: "450px" }}
                    >
                      {" "}
                      Pure power in every scoop, Recover fast, grow strong.
                    </div>
                    <div className="banel-button">
                      <button class="button-33" role="button">
                      Know More
                      </button>
                    </div>
                  </div>
                </div>

                {/* <div
                style={{
                  position: "absolute",
                  right: 0,
                  top: "10px",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    right: 0,
                    top: "10px",
                    backgroundImage: `url(${premium})`,
                    width: "180px",
                    height: "200px",
                    objectFit: "contain",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <strong
                    style={{
                      fontSize: "40px",
                      position: "absolute",
                      top: 0,
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      color: "black",
                    }}
                  >
                    100%
                  </strong>
                </div>
              </div> */}
              </div>
            </div>
          );
        })}
      </Carousel>
  )
}

export default HeaderPanel