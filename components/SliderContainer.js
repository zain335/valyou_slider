import {ImageList, Rating, Stack, Typography } from '@mui/material'
import React from 'react'
import ProductCard from './ProductCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 25
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 25
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
    partialVisibilityGutter: 30
  }
};


export default function SliderContainer() {
  const [translation, setTranslation] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(null)
  const [touchEnd, setTouchEnd] = React.useState(null)
  const [prodcutData, setProductData] = React.useState();

  React.useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products`);
        const data = await response.json();
        setProductData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProduct();
  }, null);

  if (!prodcutData) {
    return <div>Loading...</div>
  }

  const onWheel = (e) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    if (e.deltaY == 0) return;
    // e.preventDefault();
    console.log(translation)
    if (e.deltaY < 0) {
      // if (translation > -1700) {
      setTranslation(translation + e.deltaY)
      // }
    } else {
      if (translation < 0) {
        setTranslation(translation + e.deltaY)
      } else {
        setTranslation(0)
      }
    }
  }

  return (
    <div>
      <Stack direction={"column"} padding={"20px"}>
        <Typography fontFamily={"Helvitica, 'Helvetica Neue', Arial, 'Lucida Grande', sans-serif"} fontWeight={700} variant='h3'>Best Seller</Typography>
        {/* <Carousel
          // additionalTransfrom={translation}
          ssr
          // slidesToSlide={1}
          responsive={responsive}
          swipeable
          draggable
          arrows={false}
          partialVisible={true}
          keyBoardControl
        >

          {prodcutData.map((data, index) => (
            <Stack margin={"0 20px 0 0"}>
              <ProductCard key={data.id} title={data.title} price={data.price} rating={data.rating.rate} count={data.rating.count} image={data.image} />
            </Stack>
          ))}


        </Carousel> */}

        {/* <Stack direction={"row"} sx={{ display: "flex", overflowX: "scroll", width: "100" }} spacing={2}>
          {prodcutData.map((data, index) => (
            <Stack width={"500px"}>
              <ProductCard key={data.id} title={data.title} price={data.price} rating={data.rating.rate} count={data.rating.count} image={data.image} />
            </Stack>
          ))}
        </Stack> */}

        <ImageList
          sx={{
            gridAutoFlow: "column",
            gridTemplateColumns: "repeat(auto-fill,minmax(360px,1fr)) !important",
            gridAutoColumns: "minmax(360px, 1fr)",
          }}
          gap={20}
        >
          {prodcutData.map((data, index) => (
              <ProductCard key={data.id} title={data.title} price={data.price} rating={data.rating.rate} count={data.rating.count} image={data.image} />
          ))}
        </ImageList>


      </Stack >

    </div >
  )
}
