import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/material/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CloseIcon from "@mui/icons-material/Close";
import CircleIcon from '@mui/icons-material/Circle';

import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useState } from "react";

const productData = [
  {
    ProductName: "Bluetooth Headset",
    ProductCategory: "Category A",
    ProductPrice: "$19.99",
    StockLeft: "20 left in stock",
    ProductImage:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",

    ProductDescription:
      "Immerse yourself in an unparalleled audio experience with our Ultimate Sound Experience Headphones. Designed for both audiophiles and casual listeners, these headphones deliver pristine sound quality, exceptional comfort, and cutting-edge technology.",

    ProductFeatures: ["ANC", "High Bass", "IP67"],
  },
  {
    ProductName: "Another Product",
    ProductCategory: "Category B",
    ProductPrice: "$29.99",
    StockLeft: "15 left in stock",
    ProductImage:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",

    ProductDescription:
      "Immerse yourself in an unparalleled audio experience with our Ultimate Sound Experience Headphones. Designed for both audiophiles and casual listeners, these headphones deliver pristine sound quality, exceptional comfort, and cutting-edge technology.",

    ProductFeatures: ["ANC", "High Bass", "IP67"],
  },

  {
    ProductName: "Another Product",
    ProductCategory: "Category B",
    ProductPrice: "$29.99",
    StockLeft: "15 left in stock",
    ProductImage:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",

    ProductDescription:
      "Immerse yourself in an unparalleled audio experience with our Ultimate Sound Experience Headphones. Designed for both audiophiles and casual listeners, these headphones deliver pristine sound quality, exceptional comfort, and cutting-edge technology.",

    ProductFeatures: ["ANC", "High Bass", "IP67"],
  },
  {
    ProductName: "Another Product",
    ProductCategory: "Category B",
    ProductPrice: "$29.99",
    StockLeft: "15 left in stock",
    ProductImage:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",

    ProductDescription:
      "Immerse yourself in an unparalleled audio experience with our Ultimate Sound Experience Headphones. Designed for both audiophiles and casual listeners, these headphones deliver pristine sound quality, exceptional comfort, and cutting-edge technology.",

    ProductFeatures: ["ANC", "High Bass", "IP67"],
  },

  {
    ProductName: "Another Product",
    ProductCategory: "Category B",
    ProductPrice: "$29.99",
    StockLeft: "15 left in stock",
    ProductImage:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",
  },
  {
    ProductName: "Another Product",
    ProductCategory: "Category B",
    ProductPrice: "$29.99",
    StockLeft: "15 left in stock",
    ProductImage:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",

    ProductDescription:
      "Immerse yourself in an unparalleled audio experience with our Ultimate Sound Experience Headphones. Designed for both audiophiles and casual listeners, these headphones deliver pristine sound quality, exceptional comfort, and cutting-edge technology.",

    ProductFeatures: ["ANC", "High Bass", "IP67"],
  },
  {
    ProductName: "Another Product",
    ProductCategory: "Category B",
    ProductPrice: "$29.99",
    StockLeft: "15 left in stock",
    ProductImage:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",

    ProductDescription:
      "Immerse yourself in an unparalleled audio experience with our Ultimate Sound Experience Headphones. Designed for both audiophiles and casual listeners, these headphones deliver pristine sound quality, exceptional comfort, and cutting-edge technology.",

    ProductFeatures: ["ANC", "High Bass", "IP67"],
  },
  {
    ProductName: "Another Product",
    ProductCategory: "Category B",
    ProductPrice: "$29.99",
    StockLeft: "15 left in stock",
    ProductImage:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",

    ProductDescription:
      "Immerse yourself in an unparalleled audio experience with our Ultimate Sound Experience Headphones. Designed for both audiophiles and casual listeners, these headphones deliver pristine sound quality, exceptional comfort, and cutting-edge technology.",

    ProductFeatures: ["ANC", "High Bass", "IP67"],
  },
  {
    ProductName: "Another Product",
    ProductCategory: "Category B",
    ProductPrice: "$29.99",
    StockLeft: "15 left in stock",
    ProductImage:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",

    ProductDescription:
      "Immerse yourself in an unparalleled audio experience with our Ultimate Sound Experience Headphones. Designed for both audiophiles and casual listeners, these headphones deliver pristine sound quality, exceptional comfort, and cutting-edge technology.",

    ProductFeatures: ["ANC", "High Bass", "IP67"],
  },
  {
    ProductName: "Another Product",
    ProductCategory: "Category B",
    ProductPrice: "$29.99",
    StockLeft: "15 left in stock",
    ProductImage:
      "https://images.unsplash.com/photo-1593121925328-369cc8459c08?auto=format&fit=crop&w=286",

    ProductDescription:
      "Immerse yourself in an unparalleled audio experience with our Ultimate Sound Experience Headphones. Designed for both audiophiles and casual listeners, these headphones deliver pristine sound quality, exceptional comfort, and cutting-edge technology.",

    ProductFeatures: ["ANC", "High Bass", "IP67"],
  },
];

function ProductCard({ product }) {
  const [open, setOpen] = useState();

  const handleClose = () => {
    setOpen(false);
  };

  const handleCardClick = (product) => {
    setOpen(true);

    console.log(product.ProductFeatures, "Clicked");
  };
  return (
    <>
      <Card
        sx={{
          width: 180,
          maxWidth: "100%",
          boxShadow: "md",
          marginLeft: "75px",
          marginTop: "35px",
          marginBottom: "15px",
        }}
        onClick={() => handleCardClick(product)}
      >
        <CardOverflow>
          <AspectRatio sx={{ minWidth: 200 }}>
            <img
              src={product.ProductImage}
              loading="lazy"
              alt={product.ProductName}
            />
          </AspectRatio>
        </CardOverflow>
        <CardContent>
          <Typography level="body-xs">{product.ProductCategory}</Typography>
          <Link
            href="#product-card"
            fontWeight="md"
            color="neutral"
            textColor="text.primary"
            overlay
            endDecorator={<ArrowOutwardIcon />}
          >
            {product.ProductName}
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
            {product.ProductPrice}
          </Typography>
          <Typography level="body-sm">{product.StockLeft}</Typography>
        </CardContent>
        <CardOverflow>
          <Button variant="solid" size="sm" sx={{ backgroundColor: "black" }}>
            Add to cart
          </Button>
        </CardOverflow>
      </Card>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Card
            variant="outlined"
            orientation="horizontal"
            sx={{
              width: 500,
              height: 250,
              marginTop: "25px",
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}
          >
            <AspectRatio ratio="1" sx={{ width: 130 }}>
              <img src={product.ProductImage} loading="lazy" alt="" />
            </AspectRatio>
            <CardContent>
              <Typography level="title-lg" id="card-description">
                {product.ProductName}
              </Typography>
              <Typography
                level="body-sm"
                aria-describedby="card-description"
                mb={1}
              >
                <Link
                  overlay
                  underline="none"
                  href="#interactive-card"
                  sx={{ color: "text.tertiary" }}
                >
                  {product.ProductPrice}
                </Link>
              </Typography>
              <Typography variant="body2">
                {product.ProductDescription}
              </Typography>

              <List dense={true}> 
                {product?.ProductFeatures?.map((item, index) => (
                  <ListItem key={index} ><CircleIcon sx={{height:"8px" }}/>
                    <ListItemText
                      primary={item}
                      sx={{ padding: 0, margin: 0 }}
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Add to Cart
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function ProductList() {
  return (
    <>
      <Box>
        <Typography
          variant="h2"
          sx={{
            color: "black",
            fontSize: "34px",
            textAlign: "center",
            marginTop: "30px",
          }}
        >
          PRODUCTS
        </Typography>
      </Box>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </>
  );
}

export default ProductList;
