import React from 'react';
import "../App.css"
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

interface IState {
    username: string,
    password: string,
}

interface IProps {
    login: Function,
    create: Function,
}

class CreateLogin extends React.Component<IProps, IState> {
    public constructor(props:any) {
        super(props)
        this.state={
            username:"",
            password:"",
        }

        this.handleUsername=this.handleUsername.bind(this);
        this.handlePassword=this.handlePassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleClick=this.handleClick.bind(this);
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
        if(this.state.username === "hello" && this.state.password === "world") {
            this.props.login()
        }
        event.preventDefault()
    }

    public handleClick() {
        this.props.create();
    }

    public render() {
        return(
            <div>
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
                        Confirm
                    </Button>
                </form>
                <Button variant="contained" onClick={this.handleClick}>
                        Back
                </Button>
            </div>
        )
    }
}

export default CreateLogin;