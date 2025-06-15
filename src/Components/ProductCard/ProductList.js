import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Grid from "@mui/joy/Grid";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import FilterBar from "../Filter/FilterBar";
import { isMobile, isTablet, isBrowser } from "react-device-detect";
import MobileProductCard from "./MobileProductCard";
import flavourList from "../../Utility/FlavouList";
import allProducts from "../../Utility/ProductList";
import "./Css/ProductList.css";

const ProductList = () => {
  const [visibleProducts, setVisibleProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(6);
  const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography["body-sm"],
    padding: theme.spacing(2),
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
  }));

  const flavourImageStyle = {
    brownie: {
      height: "83px",
      width: "122px",
      top: "50%",
      left: "58%",
      // ...imageStyle,
    },
    mallai: {
      height: "81px",
      width: "76px",
      top: "47%",
      left: "44%",
      // ...imageStyle,
    },
    redVelvet: {
      width: "109px",
      height: "134px",
      top: "56%",
      left: "51%",
      // left: "1px",
      // top: "0px",
      // ...imageStyle,
    },
    vennila: {
      height: "81px",
      width: "107px",
      top: "50%",
      left: "58%",
      // top: "13%",
      // left: "10%",
      // ...imageStyle,
    },
    alphanza: {
      height: "117px",
      width: "93px",
      top: "50%",
      left: "48%",
      // ...imageStyle,
    },
    cookies: {
      height: "102px",
      width: "95px",
      top: "50%",
      left: "39%",
      // ...imageStyle,
    },
    kheer: {
      height: "100px",
      width: "101px",
      top: "50%",
      left: "50%",
      // ...imageStyle,
    },
    rose: {
      height: "134px",
      width: "173px",
      top: "50%",
      left: "44%",
      maxWidth: "auto !important",
      // position: "absolute",
      // top: "-10%",
      // left: "0%",
      // ...imageStyle,
    },
  };

  const bestSellers = [{}, {}, {}]; // Replace with actual best sellers
  // const allProducts = [{}, {}, {}, {}, {}, {}]; // Replace with actual products

  useEffect(() => {
    let copyProducts = [...allProducts];
    copyProducts = copyProducts.slice(0, currentIndex);
    setVisibleProducts([...copyProducts]);
  }, [currentIndex]);

  return (
    <div>
      <h2
        style={{
          fontSize: isMobile ? "17px" : "28px",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Our Products
      </h2>

      <Grid
        container
        spacing={2}
        sx={{ padding: 2, height: isMobile ? "auto" : "auto", padding: "0" }}
        alignItems="flex-start"
      >
        {/* Left Column - Best Sellers */}
        {!isMobile && (
          <Grid xs={12} md={3}>
            <Item sx={{ paddingTop: "0", paddingLeft: "16px" }}>
              <h3
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  marginBottom: "12px",
                  fontWeight: "bold",
                  background: "liner",
                  background: "linear-gradient(to right, #061b42, white)",
                  color: "white",
                }}
              >
                Available Flavours
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {Object.entries(flavourList).map((product, index) => (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "lightgray",
                        height: "100px",
                        width: "100px",
                        borderRadius: "50%",
                        position: "relative",
                        maxWidth: "auto !important",
                      }}
                    >
                      <img
                        src={product[1].image}
                        style={{
                          ...flavourImageStyle[product[1].key],
                          position: "absolute",
                          transform: "translate(-50%, -50%)",
                        }}
                      />
                    </div>
                    <div
                      style={{
                        // position: "absolute",
                        // right: "-45%",
                        // top: "40%",
                        fontWeight: "bold",
                        // backgroundColor:"yellow",
                        height: "38px",
                        display: "flex",
                        alignItems: "center",
                        minWidth: "200px",
                        padding: "3px",
                        fontSize: "20px",
                      }}
                    >
                      {product[1].name}
                    </div>
                  </div>
                ))}
              </div>
            </Item>
          </Grid>
        )}

        {/* Vertical Divider */}
        {/* <Box
          sx={{
            width: "1px",
            backgroundColor: "#ccc",
            height: "100%",
            margin: "0 8px",
            display: { xs: "none", md: "block" },
          }}
        /> */}

        {/* Right Column - All Products */}
        <Grid xs={12} md={8}>
          <FilterBar />
          <Item
            sx={{
              padding: isMobile ? "0px" : "12px",
            }}
          >
            <h3
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginBottom: "12px",
              }}
            >
              {""}
            </h3>
            {!isMobile ? (
              <Grid container spacing={2}>
                {visibleProducts.map((product, index) => (
                  <Grid key={index} xs={12} sm={2} md={4}>
                    <ProductCard product={product} />
                  </Grid>
                ))}
                <div
                  style={{
                    width: "100%",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    marginTop: "20px",
                  }}
                >
                  <button
                    class="button-86"
                    role="button"
                    onClick={() => {
                      if (currentIndex > allProducts?.length) {
                        setCurrentIndex(6);
                      }else{
                         setCurrentIndex((pre)=>pre+6);
                      }
                    }}
                  >
                    {console.log(currentIndex, allProducts, "checkingProd")}
                    {currentIndex > allProducts?.length
                      ? "Show Less"
                      : "Load More"}
                  </button>
                </div>
              </Grid>
            ) : (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "space-around",
                  gap: "8px",
                }}
              >
                {allProducts.map((product, index) => (
                  <MobileProductCard product={product} />
                ))}
              </div>
            )}
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductList;
