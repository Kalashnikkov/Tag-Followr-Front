import React from 'react';
import "../App.css"
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../img/logo.png';
import CreateLogin from './createLogin';
import Box from '@material-ui/core/Box';

interface IState {
    username: string,
    password: string,
    createAccount: boolean,
}

interface IProps {
    login: Function,
}

class LoginForm extends React.Component<IProps, IState> {
    public constructor(props:any) {
        super(props)
        this.state={
          username: "",
          password: "",
          createAccount: false,
        }

        this.handleUsername=this.handleUsername.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.createAccount=this.createAccount.bind(this);
    }

    public handleUsername(event:any) {
        this.setState({
            username:  event.target.value
        })
    }

    public handlePassword(event:any) {
        this.setState({
            password:  event.target.value
        })
    }
    public handleSubmit(event:any) {
        if(this.state.username === "admin" && this.state.password === "12345") {
            this.props.login()
        }
        event.preventDefault()
    }

    public createAccount() {
        if (this.state.createAccount === false) {
            this.setState({
                username:"",
                password:"",
                createAccount: true,
            })
        } else {
            this.setState({
                username:"",
                password:"",
                createAccount: false,
            })
        }
    }

    public render() {
        return(
            <Box>
                <Paper className="Login-Form">
                {!this.state.createAccount && (
                <div>
                <img src={logo} className="Logo-Img"/>
                <form onSubmit={this.handleSubmit} className="Login-Box">
                    <TextField
                    label="Username"
                    type="text"
                    margin="normal"
                    variant="filled"
                    value={this.state.username} 
                    onChange={this.handleUsername}
                    className="Login-Dets"
                    />
                    <TextField
                    label="Password"
                    type="password"
                    margin="normal"
                    variant="filled"
                    value={this.state.password} 
                    onChange={this.handlePassword}
                    className="Login-Dets"
                    />
                    <Button variant="contained" type="submit" value="submit" className="Login-Button">
                        Login
                    </Button>
                    {/* <Facebook/> */}
                </form>
                <Button variant="contained" onClick={this.createAccount}>
                    Create Account
                </Button>
                </div>)}
                {this.state.createAccount && (
                    <CreateLogin login={this.props.login} create={this.createAccount}/>
                )}
                </Paper>
            </Box>
        )
    }

}

export default LoginForm;