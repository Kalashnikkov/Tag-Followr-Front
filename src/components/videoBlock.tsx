import React from 'react';
import ReactPlayer from 'react-player'
import "../App.css"
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

interface IState {
    genre: string,
    isPlaying: boolean,
    idList: Array<string>,
}

interface IProps {
    //account: any;
}


class VideoBlock extends React.Component<IProps, IState> {
    public constructor(props:any) {
        super(props);
        this.state={
            genre: "music",
            isPlaying: false,
            idList: [],
        }
    }

    componentDidMount() {
        console.log("callig getTreding")
        this.getTrendingVideos();
    }

    public getTrendingVideos = () => {
        fetch("https://localhost:44301/api/testing", {
            method: "GET"
        }).then((ret:any) => {
            return ret.json();
        }).then((idList:any) => {
            console.log("callig setting state")
            this.setState({
                idList
            })
        })
    }

    public addVideos = () => {
        const videoURLs = this.state.idList.map((id) => (
        <ReactPlayer key={id}
            url={"https://www.youtube.com/watch?v=" + id}
            playing={false}
            />))
        return videoURLs;
    }

    public addRow = () => {
        return(
            <React.Fragment>
            <Grid item xs={4}>
                <Paper>
                    <ReactPlayer 
                        url={"https://www.youtube.com/watch?v=ulmPBRvvKaI"}
                        playing={false}
                    />
                </Paper>
            </Grid>

            <Grid item xs={4}>
            <Paper>
                    <ReactPlayer 
                        url={"https://www.youtube.com/watch?v=ulmPBRvvKaI"}
                        playing={false}
                    />
            </Paper>
            </Grid>

            <Grid item xs={4}>
                <Paper>
                    <ReactPlayer 
                        url={"https://www.youtube.com/watch?v=ulmPBRvvKaI"}
                        playing={false}
                    />
                </Paper>
            </Grid>
            </React.Fragment>
        )
    }

    public render() {
        return(
            <div className="Outside-Box">
                <Grid container spacing={1}>
                    <Grid container item xs={12} spacing={3}>
                        {this.addRow()}
                    </Grid>
                    <Grid container item xs={12} spacing={3}>
                        {this.addRow()}
                    </Grid>
                </Grid>
            </div>
        )
    }
}
{/* {this.addVideos()} */}
export default VideoBlock;