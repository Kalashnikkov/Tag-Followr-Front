import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { ExecFileOptionsWithStringEncoding } from "child_process";
//432668367326645
interface IState {
    isLoggedIn: boolean,
    userID: string,
    name: string,
    email: string,
    picture: string,
}

interface IProps {
    fbLogin: Function,
}

class Facebook extends React.Component<IProps, IState> {
    public constructor(props: any) {
        super(props)
        this.state = {
            isLoggedIn: false,
            userID: "",
            name: "",
            email: "",
            picture: ""
        }
    }

    public createAccount = () => {
        const accInfo = {
            username: this.state.name,
            password: this.state.userID,
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
                this.props.fbLogin(this.state.name, true);
                return ret.json();
            }
            throw new Error("Username already exists.");
        }).then((data) => {
            alert("Successfully created account for: " + data.username);
        }).catch(function (error) {
            alert("Error in operation: " + error.message)
        });
    }

    public responseFacebook = (response:any) => {
        this.setState({
            isLoggedIn: true,
            userID: response.userID,
            name: response.name,
            email: response.email,
            picture: response.picture.data.url
          })
    }

    public render() {
        return (
            <div>
                <FacebookLogin
                    appId="432668367326645"
                    autoLoad={false}
                    fields="name,email,picture"
                    onClick={this.createAccount}
                    callback={this.responseFacebook}
                />
            </div>
        )
    }
}

export default Facebook;