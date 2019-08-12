import React from 'react';
import ReactPlayer from 'react-player'

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
            <div>
                {this.addVideos()}
                <p>
                    Hello
                </p>
            </div>
        )
    }
}

export default VideoBlock;