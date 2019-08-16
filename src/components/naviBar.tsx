import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

interface IProps {
    changeGenre: Function,
    getFavourites: Function,
}

class NaviBar extends React.Component<IProps, {}> {
    public render() {
        return(
            <Box>
                    <Grid container spacing={2} justify="center">
                        <Grid item xs={1}>
                            <Button onClick={() => {this.props.getFavourites()}}>
                                Favourites
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button onClick={() => {this.props.changeGenre("music")}}>
                                Music
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button onClick={() => {this.props.changeGenre("gaming")}}>
                                Gaming
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button onClick={() => {this.props.changeGenre("film")}}>
                                Film
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button onClick={() => {this.props.changeGenre("comedy")}}>
                                Comedy
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button onClick={() => {this.props.changeGenre("automotive")}}>
                                Automotive
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button onClick={() => {this.props.changeGenre("animals")}}>
                                Animals
                            </Button>
                        </Grid>
                    </Grid>
            </Box>
        )
    }
}

export default NaviBar