import React from "react";
import ProductCard from "./ProductCard";
import Grid from "@mui/joy/Grid";
import { styled } from "@mui/joy/styles";
import Sheet from "@mui/joy/Sheet";
import FilterBar from "../Filter/FilterBar"



const ProductList = () => {
  const Item = styled(Sheet)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography["body-sm"],
    padding: theme.spacing(2),
    borderRadius: 4,
    color: theme.vars.palette.text.secondary,
  }));

  const bestSellers = [{}, {}, {}]; // Replace with actual best sellers
  const allProducts = [{}, {}, {}, {}, {}, {}]; // Replace with actual products

  return (
    <div>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", textAlign: "center" }}>
        Our Products
      </h2>

      <Grid
        container
        spacing={2}
        sx={{ padding: 2, height: "200vh" }}
        alignItems="flex-start"
      >
        {/* Left Column - Best Sellers */}
        <Grid xs={12} md={3}>
          <Item>
            <h3
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginBottom: "12px",
                fontWeight: "bold",
              }}
            >
              Best Sellers
            </h3>
            <Grid container direction="column" spacing={2}>
              {bestSellers.map((product, index) => (
                <Grid key={index}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Item>
        </Grid>

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
            <FilterBar/>
          <Item>
            <h3
              style={{
                textAlign: "center",
                fontSize: "20px",
                marginBottom: "12px",
              }}
            >
              {""}
            </h3>
            <Grid container spacing={2}>
              {allProducts.map((product, index) => (
                <Grid key={index} xs={12} sm={6} md={4}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductList;
