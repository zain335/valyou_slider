import { Card, CardContent, CardHeader, CardMedia, Chip, IconButton, Rating, Typography } from '@mui/material'
import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function ProductCard(props) {
  const { title, price, rating, count, image } = props

  return (
    <Card sx={{ backgroundColor: "white", cursor: "pointer", width:1}} >
      <CardHeader
        // sx={{ position: "absolute" }}
        avatar={
          <Chip label="On Sale" variant="outlined" sx={{ backgroundColor: "#F83A3A", color: "white", fontSize: "0.75rem", fontWeight: "bold" }} />
        }
      />
      <CardMedia
        component="img"
        height="350"
        width={"400"}
        image={image}
        sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        alt="Product Image"
        draggable={false}

      />
      <CardContent>
        <Typography sx={{ float: "right", display: "flex" }} variant='small'>
          <Rating name="read-only" value={rating} readOnly size='small' />
          ({count})
        </Typography>
        <Typography color={"text.secondary"}>Valyou Furniture</Typography>
        <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
        <Typography color={"text.secondary"}>${price}</Typography>
        <br />
        <Typography sx={{ color: "text.secondary", fontSize: "small", ml: "-10px" }}><IconButton fontSize='small'><LocationOnIcon fontSize='small' /></IconButton>Chose Your Location</Typography>
      </CardContent>
    </Card>
  )
}
