import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import powderImage from "../Svgs/LandingPage/powderImage1.png";
import "./ProductCard.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";
import { isMobile, isTablet, isBrowser } from "react-device-detect";

export default function ProductCard({ product }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ width: isMobile ? 150 : 250, maxWidth: "100%", boxShadow: "lg" }}
      onClick={() => {
        navigate("/product-details");
      }}
    >
      <CardOverflow style={{ textAlign: "center" }}>
        <AspectRatio
          sx={{ minWidth: isMobile ? 100 : 200, textAlign: "center" }}
        >
          <img
            src={powderImage}
            // src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
            // srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
            style={{
              width: isMobile ? "80px" : "133px",
              height: isMobile ? "150px" : "205px",
            }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">{product.name}</Typography>
        <Link
          // href="#product-card"
          color="neutral"
          textColor="text.primary"
          overlay
          //   endDecorator={<ArrowOutwardIcon />}
          sx={{ fontWeight: "md" }}
        >
          {product.flavour}
          {/* {`${product.serving} / Serving`} */}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              No Added Sugar
            </Chip>
          }
        >
          {product.name === "Whey Protein"
            ? `${product.eaa_in_g}EAA`
            : `${product.bcaa_in_g}BCAA`}
        </Typography>
        <Typography level="body-sm">{`NET WEIGHT: ${product.netWeight_in_kg}  KG [ ${product.lbs} LBS ]`}</Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          View More <ArrowOutwardIcon />
        </Button>
      </CardOverflow>
    </Card>
  );
}
