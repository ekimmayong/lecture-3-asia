import React, { Component } from 'react';
import { AppBar, Card, CardContent, Container, Grid, List, ListItem, ListItemText, Toolbar, Typography } from '@mui/material';
import Movies from './components/movies';
import UserForm from './components/userForm';
import NavBar from './components/navbar';

class App extends Component {
  state = {
    userinfo: []
  }

  updateUserInfo=(data)=>{
    this.setState({
      userinfo: data
    })
  }

  render(){
    return (
    <>
      <NavBar />
      <Container maxWidth='lg' sx={{mt: '3rem', py: '1.5rem'}}>
        <Grid container columnGap={3} rowGap={5}>
          <Grid item xs={12}>
            <Typography variant='h4'>Movies</Typography>
            <Movies />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h4'>Add User</Typography>
            <Grid container spacing={2}>
              <Grid item md={6}>
                  <UserForm updateUserInfo={this.updateUserInfo}/>
              </Grid>
              <Grid item md={6}>
                {
                  this.state.userinfo.length != 0 && 
                  <Card>
                      <CardContent>
                        <Typography variant='h5'>User Details</Typography>
                        <List>
                          <ListItem>
                            <ListItemText primary={this.state.userinfo.name} secondary='Name'/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary={this.state.userinfo.dob} secondary='Date of Birth'/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary={this.state.userinfo.contact} secondary='Contact'/>
                          </ListItem>
                          <ListItem>
                            <ListItemText primary={this.state.userinfo.email} secondary='Email'/>
                          </ListItem>
                        </List>
                          <Typography variant='body1'>About Self : {this.state.userinfo.aboutSelf}</Typography>
                      </CardContent>
                  </Card>
                }
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  )
  }
  
}

export default App