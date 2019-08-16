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

interface IProps {
    user: string,
}

class VideoBlock extends React.Component<IProps, IState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            genre: "music",
            isPlaying: false,
            idList: [],
        }
    }

    componentDidMount() {
        this.getTrendingVideos();
    }

    public getTrendingVideos = () => {
        fetch(("https://trendfinder.azurewebsites.net/api/Videos/getTrending/" + this.state.genre), {
            method: "GET"
        }).then((ret: any) => {
            return ret.json();
        }).then((idList: any) => {
            this.setState({
                idList
            })
        })
    }

    public storeVideo = (id: string) => {
        const data = {
            url: "https://www.youtube.com/watch?v=" + id,
            favID: this.props.user
        }
        fetch("https://trendfinder.azurewebsites.net/api/Videos", {
            body: JSON.stringify(data),
            headers: {
                Accept: "text/plain",
                "Content-Type": "application/json"
            },
            method: "POST"
        }).then((ret: any) => {
            if (ret.ok) {
                alert("The video id: " + id + " has been added to this user's favourites: " + this.props.user);
                return ret.json();
            }
            throw new Error
        }).catch(function (error) {
            console.log("Error in operation:" + error.message)
        });
    }

    public deleteVideo = (id: string) => {
        fetch(("https://trendfinder.azurewebsites.net/api/Videos/"+this.props.user+"?watchId="+id), {
            method: "DELETE"
        }).then((ret: any) => {
            if (ret.ok) {
                alert("The video id: " + id + " has been deleted from user: " + this.props.user);
                return ret.json();
            }
            console.log(ret.json());
            throw new Error
        }).catch(function (error) {
            console.log("Error in operation:" + error.message)
        });
    }
    

    public getFavourites = () => {
        fetch(("https://trendfinder.azurewebsites.net/favourites?username=" + this.props.user), {
            method: "GET"
        }).then((ret: any) => {
            if (ret.ok) {
                return ret.json();
            }
            throw new Error;
        }).then((idList: any) => {
            this.setState({
                idList
            })
        }).catch(function (error) {
            console.log("error in here: " + error.message)
        })

        this.setState({
            genre:"favourites"
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
                    {this.state.genre != "favourites" && 
                    (
                        <Button fullWidth={true} onClick={() => this.storeVideo(id)}>
                            Add to favourites
                        </Button>
                    )}
                    {this.state.genre === "favourites" && 
                    (
                        <Button fullWidth={true} onClick={() => this.deleteVideo(id)}>
                            Remove this video
                        </Button>
                    )}
                </Card>
            </Grid>))
        return videoURLs;
    }

    public changeGenre = (input: any) => {
        this.setState({
            genre: input
        }, () => this.getTrendingVideos())
    }

    public render() {
        return (
            <div>
                <Box m={4}>
                    <NaviBar changeGenre={this.changeGenre} getFavourites={this.getFavourites} />
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
export default VideoBlock;