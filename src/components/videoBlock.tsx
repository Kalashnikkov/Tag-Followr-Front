import React from 'react';
import ReactPlayer from 'react-player'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import NaviBar from './naviBar'
import '../App.css';

interface IState {
    genre: string,
    isPlaying: boolean,
    idList: Array<string>,
}

class VideoBlock extends React.Component<{}, IState> {
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
        fetch(("https://trendfinder.azurewebsites.net/api/Videos/getTrending/" + this.state.genre), {
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
        <Grid item xs={4}>
        <Card>
            <div className="React-Wrapper">
            <ReactPlayer 
                url={"https://www.youtube.com/watch?v=" + id}
                playing={false}
                width="100%"
                height="100%"
            />
            </div>
            <Button fullWidth={true} onClick={(e:any) => {alert("this video's id is: " + id)}}>
                {id}
            </Button>
        </Card>
        </Grid>))
        return videoURLs;
    }

    public changeGenre = (input:any) => {
        this.setState({
            genre: input
        }, () => this.getTrendingVideos())
    }

    public render() {
        return(
            <div>
            <Box m={4}>
                <NaviBar changeGenre={this.changeGenre}/>
            </Box>
            <Box m={2}>
                <Grid container spacing={1} justify="center" alignItems="center">
                    <Grid container item xs={12} spacing={3}>
                        {this.addVideos()}
                    </Grid>
                </Grid>
            </Box>
            </div>
        )
    }
}
{/* {this.addVideos()} */}
export default VideoBlock;


{/* <ReactPlayer 
                        url={"https://www.youtube.com/watch?v=ulmPBRvvKaI"}
                        playing={false}
                        height={"90%"}
                        width={"90%"}
                    /> */}