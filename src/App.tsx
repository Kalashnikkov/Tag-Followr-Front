import React from 'react';
import './App.css';
import LoginForm from './components/loginForm'
import VideoBlock from './components/videoBlock'


interface IState{
  isLoggedIn: boolean,
}

class App extends React.Component<{}, IState> {
  public constructor(props:any) {
    super(props)
    this.state={
      isLoggedIn: false,
    }
  }

  public Login = () => {
    this.setState({
      isLoggedIn: true
    })
  }

  public render() {
    return (
      <div>
        {!this.state.isLoggedIn &&
        (<div className="Login-Form">
        <LoginForm login={this.Login}/>
        </div>)}
        {this.state.isLoggedIn &&
        (<div>
        <VideoBlock />
        </div>)}
      </div>
    )
  }
}

export default App;
