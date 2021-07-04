import React, { Component } from 'react';
import './Login.css';
import Header from '../../common/header/Header';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';


class Login extends Component {

    constructor() {
        super();
        this.state = {
            
            loginUsername: "",
            loginPassword: "",
            loginUsernameRequired: "no",
            loginPasswordRequired: "no",
            username_password_incorrect: "no",
        }
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ loginUsername: e.target.value });
    }

    inputLoginPasswordChangeHandler = (e) => {
        this.setState({ loginPassword: e.target.value });
    }

    loginClickHandler = () => {
        let dummyUsername = "upGrad";
        let dummyPassword = "july2021";
        let accessToken = "IGQVJXeTBWZAURlUXFQZAEpxRlQ5THNpeVN1c1FpMUc2cVZAEQk5NNnhfNXFFSXBBSEpOUDYwZAmllcEM4dGpJWjJmczZAZAZAUtTVUFXamlBUDk5SVlGMmJrYThkQ2UwZAUx6Y0ZABRDVkOGV5RFpaR3IwTU82aWdLMzhCbDd1b1V3";

         
        if (this.state.loginUsername === "" && this.state.loginPassword === "") {
            this.setState({ loginUsernameRequired: "yes" });
            this.setState({ loginPasswordRequired: "yes" })
            this.setState({ username_password_incorrect: "no" });
        }
        else {
            this.setState({ loginUsernameRequired: "no" });
            this.setState({ loginPasswordRequired: "no" });
        }

        if (this.state.loginUsername === dummyUsername && this.state.loginPassword === dummyPassword) {
            window.sessionStorage.setItem("access-token",accessToken); /* save access-token in session storage */
            this.props.history.replace("/home"); /* redirect To Home Page */
        } 
        else {
          if (this.state.loginUsername !== "" && this.state.loginPassword !== "") {
            this.setState({ username_password_incorrect: "yes" });
          }
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="card-section">
                    <Card className="login-card" variant="outlined">
                        <CardContent className="card-content">
                            <h2 className="heading">LOGIN</h2>
                            <FormControl className="form-control" required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.loginUsername} onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.loginUsernameRequired}>
                                    <span className="style">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl className="form-control" required>
                                <InputLabel htmlFor="loginPassword">Password</InputLabel>
                                <Input id="loginPassword" type="password" password={this.state.loginPassword} onChange={this.inputLoginPasswordChangeHandler} />
                                <FormHelperText className={this.state.loginPasswordRequired}>
                                    <span className="style">required</span>
                                </FormHelperText>
                            </FormControl>
                            <br /><br/>
                            <FormHelperText className={this.state.username_password_incorrect}>
                                <span className="style">
                                    Username and/or Password Incorrect
                                </span>
                            </FormHelperText>
                            <br />
                            <div className="login-button">
                                <Button variant="contained" color="primary" onClick={this.loginClickHandler}>
                                    Login
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        )
    }
}

export default (Login);
