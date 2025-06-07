import React from "react";
import powderImage from "../Svgs/LandingPage/powderImage.png";
// import gymBackground from "../Svgs/LandingPage/gym-background.jpg";
import gymBackground from "../Svgs/LandingPage/background1.avif";
import powder from "../Svgs/LandingPage/powder.png";
import premium from "../Svgs/LandingPage/premiumImage.png";
import thunder from "../Svgs/LandingPage/thunder.png";
import "./Css/LandingPage.css";
import { Carousel } from "antd";
import ProductList from "../ProductCard/ProductList";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import ProductDetailCard from "../ProductCard/ProductDetailCard";

export default function LandingPage() {
  let carouselContent = [
    {
      product: "Whey Protein",
      about:
        "Pure, purposeful nutrition for a stronger, healthier you – crafted to support your active lifestyle with clean energy, balanced recovery, and real muscle support. Fuel your body with the strength it deserves – clean, fast-absorbing nutrition designed to build lean muscle, speed up recovery, and power you through every workout.",
    },
    {
      product: "Wheight Gainer",
      about:
        "Pure, purposeful nutrition for a stronger, healthier you – crafted to support your active lifestyle with clean energy, balanced recovery, and real muscle support. Fuel your body with the strength it deserves – clean, fast-absorbing nutrition designed to build lean muscle, speed up recovery, and power you through every workout.",
    },
  ];
  return (
    <div>
     
       <Carousel
      arrows
      adaptiveHeight={true}
      dotPosition="left"
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
                  backgroundImage: `url(${gymBackground})`,
                  width: "100%",
                  height: "65vh",
                  objectFit: "contain",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundColor: "#cccccc",
                  filter: "blur(1px)",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            
              <div
                style={{
                  position: "absolute",
                  left: "10%",
                  top: "20%",
                  zIndex: 0,
                }}
              >
                <img
                  src={powderImage}
                  style={{ width: "212px", height: "256px" }}
                ></img>
              </div>
              
              <div
                style={{
                  position: "absolute",
                  left: "3%",
                  top: "32%",
                  zIndex: 0,
                }}
              >
                <img
                  src={powderImage}
                  style={{ width: "181px", height: "199px" }}
                ></img>
              </div>

              <div
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
              </div>

                {/* Powder */}
           
              <div
                style={{
                  position: "absolute",
                  left: "14%",
                  top: "35%",
                  zIndex: 0,
                }}
              >
                <img
                  src={powder}
                  style={{ width: "212px", height: "256px", rotate: "-10deg" }}
                ></img>
              </div>
                
           

              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  transform: "translate(-30%,-50%)",
                  top: "50%",
                }}
              >
                <div
                  style={{
                    color: "white",
                    fontSize: "18.5px",
                    width: "600px",
                    // fontWeight: "bold",
                    position: "relative",
                    backgroundColor: "rgba(0, 0, 0, 0.3.5)",
                    // opacity: "0.5",
                    zIndex: 0,
                  }}
                >
                  <div style={{ padding: "12px" }}>{content.about}</div>

                  {/* Our advanced{" "}
          <strong style={{ color: "	#FF6347", fontSize: "30px" }}>
            Whey Protein
          </strong>{" "}
          blend optimizes recovery, boosts lean muscle growth, and supports your
          fitness goals with clean, bioavailable fuel. */}
                  <div className="line"></div>
                  <strong className="whey-protein-text">
                    {" "}
                    {content.product}
                  </strong>
                </div>
              </div>
              <div
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
                  {/* <img src={premium} style={{ width: "180px", height: "200px" }} /> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </Carousel>

    <ProductList/>

    <Footer/>

    </div>
   
  );
}
