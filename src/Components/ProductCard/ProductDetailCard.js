import React, { useState } from "react";
import {
  Typography,
  IconButton,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/joy";
import Rating from "@mui/material/Rating";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { Button, Modal, Space } from 'antd';
import "./ProductDetailCard.css";
import powderImage from "../Svgs/LandingPage/powderImage.png";
import powderImageLarge from "../Svgs/LandingPage/powderImage-big.png";
import Divider from "@mui/joy/Divider";
import Sheet from "@mui/joy/Sheet";
import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import { styled } from "@mui/joy/styles";
import { Breadcrumb } from "antd";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import ReactImageMagnify from "react-image-magnify";
import ReviewForm from "../ReviewForm/ReviewForm";

export default function ProductDetailCard() {
  const [quantity, setQuantity] = useState(1);
  const [open,setOpen]=useState(false);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const Item = styled(Sheet)(({ theme }) => ({
    ...theme.typography["body-sm"],
    textAlign: "center",
    fontWeight: theme.fontWeight.md,
    color: theme.vars.palette.text.secondary,
    border: "1px solid",
    borderColor: theme.palette.divider,
    padding: theme.spacing(1),
    borderRadius: theme.radius.md,
  }));

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return <div className={className} style={{ ...style }} onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, color: "black" }}
        onClick={onClick}
      />
    );
  }

    const showModal = () => {
    setOpen(!open);
  };

  return (
    <Box>
   <Box className="product-container">
      <Box className="product-left">
        {/* <img
          src={powderImage} // Replace with your image path
          alt="Poo-Pourri Apple Cider"
          className="product-image"
        /> */}
        <ReactImageMagnify
          {...{//command
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: powderImage,
            },
            largeImage: {
              src: powderImageLarge,
                width: 1200,
        height: 1800
            },
            enlargedImageContainerDimensions: {
              width: "150%",
              height: "150%",
            },
          }}
        />
        <Box className="thumbnail-row">
          <Slider {...settings}>
            <div>
              <img src={powderImage} alt="thumb1" />
            </div>
            <div>
              <img src={powderImage} alt="thumb2" />
            </div>
            <div>
              <img src={powderImage} alt="thumb2" />
            </div>
            <div>
              <img src={powderImage} alt="thumb2" />
            </div>
          </Slider>
        </Box>
      </Box>

      <Box className="product-right" orientation={"vertical"}>
        <Typography>
          <Breadcrumb
            items={[
              {
                title: "Home",
              },
              {
                title: <a href="">Whey Protein</a>,
              },
            ]}
          />
        </Typography>
        <Typography level="h3" className="product-title">
          Whey Protein
        </Typography>
        <Typography level="body-md" className="product-subtitle">
          BROWNIE CHOCOLATE
        </Typography>
        <Typography level="body-sm" className="product-description">
          Whey Protein Concentrate and Isolate Powder with Digestive Enzymes and
          ElectrolytesSupports Healthy Metabolism and Lean Muscle Recovery
        </Typography>

        <Box className="rating-section">
          <Rating value={4.5} readOnly />
          <Typography level="body-sm" sx={{ ml: 1 }}>
            (1 reviews)
          </Typography>
        </Box>
        <Box className="horizontal-detail">
          <Typography level="h4" className="price">
            Net Weight: 2.27 KG [ 5 LBS ]
          </Typography>
        </Box>

        <Box>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" />}
            spacing={2}
            sx={{ justifyContent: "start" }}
          >
            <Item> $9.95</Item>
            <Item> 24G Protein</Item>
            <Item>11.4G EAA</Item>
          </Stack>
        </Box>

        <Button variant="solid" className="add-to-cart-btn" onClick={()=>{
          showModal()
        }}>
          REVIEW PRODUCT
        </Button>

        {/* Accordion Sections */}
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            How It Works
          </AccordionSummary>
          <AccordionDetails>
            <Typography level="body-sm">
              Spray before you go to trap odor below the water surface.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            What’s Inside
          </AccordionSummary>
          <AccordionDetails>
            <Typography level="body-sm">
              Essential oils of cinnamon, apple, and ginger.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            Size Guide
          </AccordionSummary>
          <AccordionDetails>
            <Typography level="body-sm">2 oz | 59 mL | ~100 uses</Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
  
    </Box>

    
      <Modal
        open={open}
        // title="Title"
        // onOk={handleOk}
        // onCancel={handleCancel}
        footer={
          <></>
        }
        title={
          <div>Feedback Form</div>
        }
      >
         <ReviewForm/>
      </Modal>
        
    </Box>
 
  );
}
