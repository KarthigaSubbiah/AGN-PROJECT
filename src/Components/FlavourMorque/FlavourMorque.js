import React from "react";
import Marquee from "react-fast-marquee";
import flavourlist from "../../Utility/FlavouList"

const FlavourMorque = () => {
  const flavourCardDesign = {
    // border: "1px solid gray",
    padding: "12px",
    position: "relative",
    height: "160px",
    width: "160px",
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
    position:"absolute",
    bottom:"-10%",
    // width:"100px",
    boxSizing:"unset !important"
  };

  const imageStyle = {
    position: "absolute",
  };

  const flavourImageStyle = {
    brownie: {
      height: "113px",
      width: "177px",
      ...imageStyle,
    },
    mallai: {
      height: "110px",
      width: "129px",
      ...imageStyle,
    },
    redVelvet: {
      width: "160px",
      height: "157px",
      left: "1px",
      top: "0px",
      ...imageStyle,
    },
    vennila: {
      height: "100px",
      width: "136px",
      top: "13%",
      left: "10%",
      ...imageStyle,
    },
    alphanza: {
      height: "127px",
      width: "160px",
      ...imageStyle,
    },
    cookies: {
      height: "118px",
      width: "166px",
      ...imageStyle,
    },
    kheer: {
      height: "123px",
      width: "150px",
      ...imageStyle,
    },
    rose: {
      height: "170px",
      /* width: 367px; */
      position: "absolute",
      top: "-10%",
      left: "0%",
      ...imageStyle,
    },
  };

  let products = [
    {
      flavour: "Brownie Chocolate",
      image: (
        <div style={{ ...flavourCardDesign }}>
          <img src={flavourlist.brownie.image} alt="" style={flavourImageStyle.brownie} />
         
        </div>
      ),
    },
    {
      flavour: "Kesar Malai Kulfi",
      image: (
        <div style={{ ...flavourCardDesign }}>
          <img src={flavourlist.mallai.image} alt="" style={flavourImageStyle.mallai} />
        </div>
      ),
    },
    {
      flavour: "Red Velvet",
      image: (
        <div style={{ ...flavourCardDesign }}>
          <img src={flavourlist.redVelvet.image} alt="" style={flavourImageStyle.redVelvet} />
        </div>
      ),
    },
    {
      flavour: "Creamy Vennila",
      image: (
        <div style={{ ...flavourCardDesign }}>
          <img src={flavourlist.vennila.image} alt="" style={flavourImageStyle.vennila} />
        </div>
      ),
    },
    {
      flavour: "Alphanso Mango",
      image: (
        <div style={{ ...flavourCardDesign }}>
          <img src={flavourlist.alphanza.image} alt="" style={flavourImageStyle.alphanza} />
        </div>
      ),
    },
    {
      flavour: "Cookies And Cream",
      image: (
        <div style={{ ...flavourCardDesign }}>
          <img src={flavourlist.cookies.image} alt="" style={flavourImageStyle.cookies} />
        </div>
      ),
    },
    {
      flavour: "Rhabri Kheer",
      image: (
        <div style={{ ...flavourCardDesign }}>
          <img src={flavourlist.kheer.image} alt="" style={flavourImageStyle.kheer} />
        </div>
      ),
    },
    {
      flavour: "Rose Thandai",
      image: (
        <div style={{ ...flavourCardDesign }}>
          <img src={flavourlist.rose.image} alt="" style={flavourImageStyle.rose} />
        </div>
      ),
    },
  ];


  return (
    <div>
      <div
        style={{
          fontSize: "30px",
          width: "100%",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Available Flavours
      </div>
      <Marquee speed={50} gradient={false}>
        <div style={{ display: "flex" }}>
          {products.map((product, index) => (
            <div key={index} style={{ marginRight: 30 }}>
              {/* <img
              src={product.image}
              alt=""
              style={{ height: "100%", width: "100%" }}
            /> */}
              {product.image}
            
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default FlavourMorque;
