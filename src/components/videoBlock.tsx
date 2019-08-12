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

    public render() {
        return(
            <div className="Outside-Box">
                <p>
                    Hello World!
                </p>
                <Grid container spacing={3}>
                    <Grid item xs>
                        <Paper className="Video-Player">
                            <ReactPlayer
                                style={{padding: 2}}
                                url="https://www.youtube.com/watch?v=C6xu72ixbxo"
                                playing={false}
                                width="100%"
                                height="100%"
                            />
                        </Paper>
                    </Grid>
                    <Grid item xs>
                        <Paper>
                            Hello
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
{/* {this.addVideos()} */}
export default VideoBlock;