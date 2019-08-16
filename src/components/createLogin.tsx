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
        alert("Calling addAccount")
        this.addAccount();
        alert("Calling ENDING")
        event.preventDefault()
    }
    public addAccount = () => {
        const accInfo = {
            username: this.state.username,
            password: this.state.password,
            id: 0,
        }

        fetch("https://trendfinder.azurewebsites.net/api/Accounts", {
          body: JSON.stringify(accInfo),
          headers: {
            Accept: "text/plain",
            "Content-Type": "application/json"
          },
          method: "POST"
        }).then(() => {
          this.props.login();
        })
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