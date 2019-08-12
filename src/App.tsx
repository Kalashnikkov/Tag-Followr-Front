import React from 'react';
import './App.css';
import LoginForm from './components/loginForm'
import VideoBlock from './components/videoBlock'
import Heading from './components/heading'
import { string } from 'prop-types';


interface IState{
  isLoggedIn: boolean,
  user: string,
}

class App extends React.Component<{}, IState> {
  public constructor(props:any) {
    super(props)
    this.state={
      isLoggedIn: false,
      user: "",
    }
  }

  public Login = () => {
    this.setState({
      isLoggedIn: true,
      user: "Cool Guy",
    })
  }

  public render() {
    return (
      <div>
        <div>
          <Heading user={this.state.user}/>
          {!this.state.isLoggedIn &&
          (<div className="Login-Form">
          <LoginForm login={this.Login}/>
          </div>)}
          {this.state.isLoggedIn &&
          (<div>
          <VideoBlock />
          </div>)}
        </div>
      </div>
    )
  }
}

export default App;
