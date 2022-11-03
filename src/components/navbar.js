import React, { Component } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'

class NavBar extends Component {
  render() {
    return (
      <AppBar sx={{
        height: {sm: '2rem', md: '2.8rem', lg: '3rem'}}}
      >
        <Toolbar sx={{
          height: {sm: '2rem', md: '2.8rem', lg: '3rem'}}}>
          <Typography variant='h6' noWrap>Simple App</Typography>
        </Toolbar>
    </AppBar>
    )
  }
}

export default NavBar