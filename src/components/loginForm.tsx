import React from 'react';
import "../App.css"
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import logo from '../img/trendFinderLogo.png';
import CreateLogin from './createLogin';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Facebook from './Facebook';

interface IState {
    username: string,
    password: string,
    createAccount: boolean,
}

interface IProps {
    login: Function,
}

class LoginForm extends React.Component<IProps, IState> {
    public constructor(props: any) {
        super(props)
        this.state = {
            username: "",
            password: "",
            createAccount: false,
        }

        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createAccount = this.createAccount.bind(this);
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
        if (this.state.username === "" || this.state.password === "") {
            alert("Please type in something.")
        } else {
            fetch(("https://trendfinder.azurewebsites.net/api/Accounts/" + this.state.username + "?password=" + this.state.password), {
                method: "GET"
            }).then((ret: any) => {
                return ret.json();
            }).then((data) => {
                if (data) {
                    this.props.login(this.state.username, false)
                } else {
                    alert("Invalid credentials. Please try again!")
                }
            });
        }
        event.preventDefault()
    }

    public createAccount() {
        if (this.state.createAccount === false) {
            this.setState({
                username: "",
                password: "",
                createAccount: true,
            })
        } else {
            this.setState({
                username: "",
                password: "",
                createAccount: false,
            })
        }
    }

    public render() {
        return (
            <Box>
                <Card className="Login-Form">
                    {!this.state.createAccount && (
                        <Box>
                            <img src={logo} className="Logo-Img" />
                            <form onSubmit={this.handleSubmit}>
                                <Grid container spacing={1} justify="center" alignItems="center">
                                    <Grid container item xs={12} spacing={3}>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Username"
                                                type="text"
                                                margin="normal"
                                                variant="filled"
                                                value={this.state.username}
                                                onChange={this.handleUsername}
                                            />
                                        </Grid>
                                        <Grid item xs={6}>
                                            <TextField
                                                label="Password"
                                                type="password"
                                                margin="normal"
                                                variant="filled"
                                                value={this.state.password}
                                                onChange={this.handlePassword}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Button type="submit" value="submit" fullWidth={true}>
                                        Login
                                    </Button>
                                    <Facebook fbLogin={this.props.login} />
                                    <Button onClick={this.createAccount} fullWidth={true}>
                                        Create Account
                                    </Button>
                                </Grid>
                            </form>
                        </Box>)}
                    {this.state.createAccount && (
                        <CreateLogin login={this.props.login} create={this.createAccount} />
                    )}
                </Card>
            </Box>
        )
    }

}

export default LoginForm;


