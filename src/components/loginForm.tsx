import React from 'react';
import "../App.css"

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

    // public getAccountsAPI() {
        
    // }

    public render() {
        return(
            <div className="testing">
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={this.state.username} onChange={this.handleUsername}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.handlePassword}/>
                    </label>
                    <input type="submit" value="submit"/>
                </form>

            </div>
        )
    }

}

export default LoginForm;