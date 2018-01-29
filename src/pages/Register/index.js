import React from 'react';
import { Component } from 'react';
import SocialBar from '../../components/SocialBar';
import LinkBar from '../../components/LinkBar';
import InputLine from '../../components/InputLine';
import LargeButton from '../../components/LargeButton';
import LogoLight from '../../images/logo-light.png';
import './Register.css';
import authentification from '../../services/Authentification';

export default class Register extends Component {
    state = {
        email: '',
        password: ''
    };

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        });
    };

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        });
    };

    handleSubmit = () => {
        authentification.register(this.state.email, this.state.password)
        .then(() => this.props.history.push('/edit-name'));
    };

    render() {
        return (
            <React.Fragment>
                <img className="logo-login-dark" src={LogoLight} alt="Campus Brett Logo" />
                <div className="register-container">
                    <InputLine
                        type="email"
                        value={this.state.email}
                        placeholder="Email"
                        name="email"
                        id="register-email"
                        onChange={this.handleEmailChange}
                    />
                    <InputLine
                        type="password"
                        value={this.state.password}
                        placeholder="Passwort"
                        name="password"
                        id="register-password"
                        onChange={this.handlePasswordChange}
                    />
                    <LargeButton theme="light" text="REGISTRIEREN" id="register-button" onClick={this.handleSubmit} />
                </div>
                <SocialBar />
                <LinkBar text="LOGIN" path="/login" />
            </React.Fragment>
        );
    }
}
