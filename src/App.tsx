import React from 'react';
import './App.css';
import LoginForm from './components/loginForm'
import VideoBlock from './components/videoBlock'
import Heading from './components/heading'
import { booleanLiteral } from '@babel/types';


interface IState{
  isLoggedIn: boolean,
  user: string,
  facebook: boolean,
}

class App extends React.Component<{}, IState> {
  public constructor(props:any) {
    super(props)
    this.state={
      isLoggedIn: false,
      user: "",
      facebook: false,
    }
  }

  public Login = (user:string, facebook:boolean, id:string) => {

    if (facebook) {
      this.setState({
        isLoggedIn: true,
        user: user,
        facebook: true,
      })
    } else {
      this.setState({
        isLoggedIn: true,
        user: user,
        facebook: false,
      })
    }
  }

  public Logout = () => {
    this.setState({
      isLoggedIn: false,
      user:"",
      facebook:false,
    })
  }

  public render() {
    return (
      <div>
        <div>
          <Heading user={this.state.user} logout={this.Logout}/>
          {!this.state.isLoggedIn &&
          (<div className="Login-Form">
          <LoginForm login={this.Login}/>
          </div>)}
          {this.state.isLoggedIn &&
          (<div>
          <VideoBlock user={this.state.user}/>
          </div>)}
        </div>
      </div>
    )
  }
}

export default App;
