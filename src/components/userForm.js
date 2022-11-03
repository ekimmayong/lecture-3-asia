import React, { Component } from 'react';
import { Box, Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';

class UserForm extends Component {
    state = {
        userinfo: {
            name: '',
            dob: null,
            email: '',
            contact: null,
            aboutSelf: ''
        },
        error: {
            nameError: '',
            dobError: '',
            emailError: '',
            contactError: '',
            aboutSelfError: ''

        },
        formValid: false,
        displayResult: false
    }

    handleChange =(e)=> {
        if(e.target.name === 'name'){
            this.validateName(e.target.value);
        }

        if(e.target.name === 'dob'){
            this.validateDob(e.target.value);
        }

        if(e.target.name === 'email'){
            this.validateemail(e.target.value);
        }

        if(e.target.name === 'contact'){
            this.validateContact(e.target.value);
        }

        if(e.target.name === 'aboutSelf'){
            this.validateAboutSelf(e.target.value);
        }
    }

    validateName=(name)=>{
        let nameError = this.state.error.nameError;
        let formValid = this.state.formValid;

        if(name.trim() === ''){
            nameError = 'Please enter a valid name'
            formValid = false

        }else if(name.trim().length <= 3){
            nameError = 'Please enter more than 3 characters'
            formValid = false
        }else{
            formValid = true;
            nameError = ''
        }

        this.setState({
            userinfo: {
                ...this.state.userinfo,
                name,
            },
            error: {
                ...this.state.error,
                nameError
            },
            formValid
        });

        return formValid;
    }

    validateDob=(dob)=> {
        let dobError = this.state.error.dobError;
        let formValid = this.state.formValid;

        let bdate = new Date(dob);
        let today = new Date();
        
        if(bdate > today){
            dobError = 'Date of birth cannot be greater than today';
            formValid = false
        }else{
            dobError = '';
            formValid = true
        }

        this.setState({
            userinfo: {
                ...this.state.userinfo,
                dob,
            },
            error: {
                ...this.state.error,
                dobError
            },
            formValid
        });

        return formValid;
    }

    validateemail=(email)=> {
        let emailError = this.state.error.emailError;
        let formValid = this.state.formValid;

        let pattern = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

        if(!pattern.test(email)){
            emailError = 'Invalid Email address';
            formValid = false
        }else{
            formValid = true;
            emailError = ''
        }

        this.setState({
            userinfo: {
                ...this.state.userinfo,
                email,
            },
            error: {
                ...this.state.error,
                emailError
            },
            formValid
        });

        return formValid;
    }

    validateContact=(contact)=> {
        let contactError = this.state.error.contactError;
        let formValid = this.state.formValid;

        if(contact.trim() === '' || contact === null ){
            contactError = 'Please enter a valid contact number'
            formValid = false

        }else if(contact.trim().length != 10){
            contactError = 'Invalid contact number'
            formValid = false
        }else{
            formValid = true;
            contactError = ''
        }

        this.setState({
            userinfo: {
                ...this.state.userinfo,
                contact,
            },
            error: {
                ...this.state.error,
                contactError
            },
            formValid
        });

        return formValid;
    }

    validateAboutSelf=(aboutSelf)=>{
        let aboutSelfError = this.state.error.aboutSelfError;
        let formValid = this.state.formValid;

        if(aboutSelf.trim() === ''){
            aboutSelfError = 'Please enter a valid name'
            formValid = false

        }else if(aboutSelf.trim().length <= 10){
            aboutSelfError = 'Please enter more than 10 characters'
            formValid = false
        }else{
            formValid = true;
            aboutSelfError = ''
        }

        this.setState({
            userinfo: {
                ...this.state.userinfo,
                aboutSelf,
            },
            error: {
                ...this.state.error,
                aboutSelfError
            },
            formValid
        });

        return formValid;
    }

    handleSubmit=(e)=>{
        e.preventDefault();

        if(this.validateName(this.state.userinfo.name) && this.validateDob(this.state.userinfo.dob) 
            && this.validateContact(this.state.userinfo.contact) && this.validateemail(this.state.userinfo.email) 
                && this.validateAboutSelf(this.state.userinfo.aboutSelf))
        {
            this.props.updateUserInfo(this.state.userinfo)
        }
    }

    render() {
        return (
            <Box>
                <form>
                    <Grid container columnGap={2} rowGap={2} >
                        <Grid item sm={12} md={12}>
                            <TextField 
                                name='name' 
                                label='Name' 
                                id='name' 
                                value={this.state.userinfo.name}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <Typography variant='subtitle2' sx={{color: '#ff0000'}}>{this.state.error.nameError}</Typography>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <TextField 
                                name='dob' 
                                type='date'
                                label='Date of birth' 
                                id='dob' 
                                value={this.state.userinfo.dob}
                                onChange={this.handleChange}
                                InputLabelProps={{ shrink: true }}
                                fullWidth
                            />
                            <Typography variant='subtitle2' sx={{color: '#ff0000'}}>{this.state.error.dobError}</Typography>
                        </Grid>
                        
                        <Grid item sm={12} md={12}>
                            <TextField 
                                name='contact' 
                                label='Contact number' 
                                id='contact' 
                                value={this.state.userinfo.contact}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <Typography variant='subtitle2' sx={{color: '#ff0000'}}>{this.state.error.contactError}</Typography>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <TextField 
                                name='email' 
                                label='Email' 
                                id='email' 
                                value={this.state.userinfo.email}
                                onChange={this.handleChange}
                                fullWidth
                            />
                            <Typography variant='subtitle2' sx={{color: '#ff0000'}}>{this.state.error.emailError}</Typography>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <TextField 
                                name='aboutSelf' 
                                label='Tell me about yourself' 
                                id='aboutSelf' 
                                value={this.state.userinfo.aboutSelf}
                                onChange={this.handleChange}
                                fullWidth
                                multiline
                                minRows={4}
                            />
                            <Typography variant='subtitle2' sx={{color: '#ff0000'}}>{this.state.error.aboutSelfError}</Typography>
                        </Grid>
                        <Grid item sm={12} md={12}>
                            <Button type='submit' variant='contained' color='primary' onClick={this.handleSubmit}>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        )
    }
}

export default UserForm