import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import powderImage from "../Svgs/LandingPage/powderImage.png";
import "./ProductCard.css";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { useNavigate } from "react-router-dom";

export default function ProductCard() {
  const navigate=useNavigate();
  return (
    <Card sx={{ width: 250, maxWidth: "100%", boxShadow: "lg" }} onClick={()=>{
       navigate("/product-details")
    }}>
      <CardOverflow style={{ textAlign: "center" }}>
        <AspectRatio sx={{ minWidth: 200, textAlign: "center" }}>
          <img
            src={powderImage}
            // src="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286"
            // srcSet="https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286&dpr=2 2x"
            loading="lazy"
            alt=""
            style={{ width: "133px", height: "205px" }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="body-xs">Bluetooth Headset</Typography>
        <Link
          // href="#product-card"
          color="neutral"
          textColor="text.primary"
          overlay
          //   endDecorator={<ArrowOutwardIcon />}
          sx={{ fontWeight: "md" }}
        >
          Super Rockez A400
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          2,900 THB
        </Typography>
        <Typography level="body-sm">
          (Only <b>7</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button variant="solid" color="danger" size="lg">
          View More <ArrowOutwardIcon />
        </Button>
      </CardOverflow>
    </Card>
  );
}
