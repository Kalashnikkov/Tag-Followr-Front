import React from 'react';
import "../App.css"
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../img/logo.png'

interface IState {
    username: string,
    password: string,
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
        }

        this.handleUsername=this.handleUsername.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
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

    public render() {
        return(
            <div className="testing">
                <Paper className="Login-Form">
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
                </form>
                </Paper>
            </div>
        )
    }

}

export default LoginForm;