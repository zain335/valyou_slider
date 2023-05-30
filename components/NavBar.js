import {Grid, IconButton, Stack} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from 'react'
import Image from 'next/image';


export default function NavBar() {
  return (
    <Stack direction={"row"} sx={{ height: "medium", backgroundColor: "#F0F0F0" , width:1}} justifyContent={"center"}>
      <Grid container sx={{ padding: "50px" }} wrap="nowrap">
        <Grid item xs>
          <Stack direction={"row"} sx={{height:"100%"}} justifyContent={"center"}>
            <IconButton>
              <MenuIcon />
            </IconButton>
            <IconButton sx={{display: { xs: 'block', sm: 'none' }}}>
              <SearchIcon />
            </IconButton>
          </Stack>
        </Grid>
        <Grid item xs={8}>
          <Stack direction={"row"} justifyContent={"center"}>
            <Image src={"https://cdn.shopify.com/s/files/1/0667/0732/5202/files/Valyou_Rectangle_Logo.png"}
              width={255}
              height={75}
              alt=""
            />
          </Stack>
        </Grid>
        <Grid item xs >
          <Stack direction={"row-reverse"} spacing={"10px"} sx={{height:"100%"}} justifyContent={"center"} >
            <IconButton >
              <ShoppingCartIcon />
            </IconButton>
            <IconButton sx={{display: { xs: 'none', sm: 'block' }}}>
              <PersonIcon />
            </IconButton>
            <IconButton sx={{display: { xs: 'none', sm: 'block' }}}>
              <SearchIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}
