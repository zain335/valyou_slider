import NavBar from '@/components/NavBar'
import SliderContainer from '@/components/SliderContainer'
import { Stack } from '@mui/material'
import React from 'react'

export default function Home() {
  return (
    <div >
      <Stack sx={{flexGrow:1}} >
        <NavBar/>
        <SliderContainer/>
        </Stack>
    </div>
  )
}
