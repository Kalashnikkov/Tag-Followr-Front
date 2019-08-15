import React from 'react';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

interface IProps {
    changeGenre: Function,
}

interface IState {
    genre: string,
}

class NaviBar extends React.Component<IProps, IState> {
    public constructor(props:any) {
        super(props)
        this.state={
          genre: "Music"
        }
      }


    public render() {
        return(
            <Box>
                    <Grid container spacing={2} justify="center">
                        <Grid item xs={1}>
                            <Button>
                                Favourites
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button>
                                Music (10)
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button>
                                Gaming (20)
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button>
                                News (25)
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button>
                                Film (1)
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button>
                                Comedy (23)
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button>
                                Horror (39)
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button>
                                Thriller (41)
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button>
                                Automotive (2)
                            </Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button>
                                Animals (15)
                            </Button>
                        </Grid>
                    </Grid>
            </Box>
        )
    }
}

export default NaviBar