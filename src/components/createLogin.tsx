import React from 'react';
import "../App.css"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

interface IState {
    username: string,
    password: string,
}

interface IProps {
    login: Function,
    create: Function,
}

class CreateLogin extends React.Component<IProps, IState> {
    public constructor(props: any) {
        super(props)
        this.state = {
            username: "",
            password: "",
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    public handleUsername(event: any) {
        this.setState({
            username: event.target.value
        })
    }

    public handlePassword(event: any) {
        this.setState({
            password: event.target.value
        })
    }
    public handleSubmit(event: any) {
        this.addAccount();
        event.preventDefault()
    }
    public addAccount = () => {
        if (this.state.username === "" || this.state.password === "") {
            alert("Please enter in valid credidentials.")
            return
        }
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
        }).then((ret: any) => {
            if (ret.ok) {
                return ret.json();
            }
            throw new Error("Username already exists.");
        }).then((data) => {
            alert("Successfully created account for: " + data.username);
            this.props.login(this.state.username, false);
        }).catch(function (error) {
            alert("Error in operation: " + error.message)
        });
    }

    public handleClick() {
        this.props.create();
    }

    public render() {
        return (
            <Box>
                <form onSubmit={this.handleSubmit}>
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
                <Button onClick={this.handleClick} fullWidth={true} style={{position:'absolute', bottom: '0px'}}>
                    Back
                </Button>
            </Box>
        )
    }
}

export default CreateLogin;