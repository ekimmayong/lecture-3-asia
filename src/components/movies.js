import React, { Component } from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography, } from '@mui/material';
import axios from 'axios';
import styles from '../styles/globalStyles';

class Movies extends Component {
    state = {
        movies: []
    }

    componentDidMount(){
        axios.get('https://fake-movie-database-api.herokuapp.com/api?s=Star')
            .then(res => {
                this.setState({
                    movies: res.data.Search
                });
                console.log(res.data.Search.length);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
        <Grid sx={{flexGrow: 1, justifyContent: 'center'}} container rowGap={2} columnGap={2}>
            {
               this.state.movies.slice(1, 6).map(data => {
                return(
                    <React.Fragment key={data.imdbID}>
                        <Grid item sx={styles.card}>
                            <Card sx={{maxWidth: '250px'}}>
                                <CardMedia
                                    component='img'
                                    image={data.Poster}
                                    width='100'
                                    height='150'
                                    alt='Movies'
                                />
                            </Card>
                            <CardContent sx={styles.cardContent}>
                                <Typography variant='body'>{data.Title}</Typography>
                                <Typography variant='body1'>Year: {data.Year}</Typography>
                            </CardContent>
                        </Grid>
                    </React.Fragment>
                )
               }) 
            }
        </Grid>
        )
    }
}

export default Movies