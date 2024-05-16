import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Box } from "@mui/material";

const productData = [
  {
    ProductName: "Sample Product",
    ProductCategory: "Category A",
    ProductPrice: "$19.99",
    StockLeft: "20 left in stock",
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
  },
];

function ProductCard({ product }) {
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
    </>
  );
}

function ProductList() {
  return (
    <>
      <Box >
        <Typography variant="h2" sx={{ color: "black", fontSize: "34px" , textAlign:"center" }}>
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
