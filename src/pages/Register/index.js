import React from 'react';
import { Component } from 'react';
import SocialBar from '../../components/SocialBar';
import LinkBar from '../../components/LinkBar';
import InputLine from '../../components/InputLine';
import LargeButton from '../../components/LargeButton';
import LogoLight from '../../images/logo-light.png';
import './Register.css';
import authentification from '../../services/Authentification';
import validator from 'validator';

export default class Register extends Component {
    state = {
        email: '',
        password: '',
        password_controll: ''
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

    handlePasswordCheckChange = event => {
        this.setState({
            password_controll: event.target.value
        });
    };

    handleSubmit = () => {
        //Email Validation
        if(!validator.isLength(this.state.email, {max: 30, min: 8})){
            const container = document.getElementById('validation');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Deine Emailadresse ist zu kurz </p>');    
        }
        else if(!validator.isEmail(this.state.email)){
            const container = document.getElementById('validation');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Dies ist keine Email </p>');    
        }

        //Password validation
        if(!validator.isLength(this.state.password, {max: 20, min: 6})){
            const container = document.getElementById('validation');
            container.insertAdjacentHTML('beforeend', '<p> Passwort muss zwischen 6 und 20 Zeichen haben </p>');
        }
        else if(!validator.isAlphanumeric(this.state.password)){
            const container = document.getElementById('validation');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Passwort darf nur aus Buchstaben und Nummern bestehen </p>');
        }
        else if(!validator.equals(this.state.password, this.state.password_controll)){
            const container = document.getElementById('validation');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Die Passwörter müssen übereinstimmen </p>');
        }
        else{
            authentification.register(this.state.email, this.state.password)
                .then(() => this.props.history.push('/edit-name'));
        }
        
    };

    render() {
        return (
            <React.Fragment>
                <img className="logo-login-dark" src={LogoLight} alt="Campus Brett Logo" />
                <div id="validation"></div>
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
                    <InputLine
                        type="password"
                        value={this.state.password_controll}
                        placeholder="Passwort bestätigen"
                        name="password"
                        id="register-password"
                        onChange={this.handlePasswordCheckChange}
                    />
                    <LargeButton theme="light" text="REGISTRIEREN" id="register-button" onClick={this.handleSubmit} />
                </div>
                <SocialBar />
                <LinkBar text="LOGIN" path="/login" />
            </React.Fragment>
        );
    }
}
