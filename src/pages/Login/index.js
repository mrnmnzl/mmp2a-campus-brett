import React from 'react';
import { Component } from 'react';
import SocialBar from '../../components/SocialBar';
import LinkBar from '../../components/LinkBar';
import InputLine from '../../components/InputLine';
import LargeButton from '../../components/LargeButton';
import LogoLight from '../../images/logo-light.png';
import './Login.css';
import authentification from '../../services/Authentification';

export default class Login extends Component {
    state = {
        email: "",
        password: ""
    };

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = () => {
        authentification.login(this.state.email, this.state.password);
    }

    render() {
        return (
            <React.Fragment>
                <img className="logo-login-dark" src={LogoLight} alt="Campus Brett Logo" />
                <div className="container-login">
                    <InputLine
                        type="email"
                        value={this.state.email}
                        placeholder="Email"
                        name="email"
                        id="login-email"
                        onChange={this.handleEmailChange}
                    />
                    <InputLine
                        type="password"
                        value={this.state.password}
                        placeholder="Passwort"
                        name="password"
                        id="login-password"
                        onChange={this.handlePasswordChange}
                    />
                    <LargeButton theme="light" text="EINLOGGEN" id="login-button" onClick={this.handleSubmit}/>
                </div>
                <SocialBar />
                <LinkBar text="REGISTRIEREN" path="/register" />
            </React.Fragment>
        );
    }
}
