import React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import SocialBar from '../../components/SocialBar';
import LinkBar from '../../components/LinkBar';
import HeaderLogo from '../../components/HeaderLogo';
import InputLine from '../../components/InputLine';
import LargeButton from '../../components/LargeButton';
import LogoLight from '../../images/logo-light.png';
import './Register.css';

export default class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <img className="logo-login-dark" src={LogoLight} alt="Campus Brett Logo" />
                <div className="register-container">
                    <InputLine type="text" placeholder="Name" name="name" id="register-name" />
                    <InputLine type="email" placeholder="Email" name="email" id="register-email" />
                    <InputLine type="password" placeholder="Passwort" name="password" id="register-password" />
                    <InputLine type="password" placeholder="Passwort wiederholen" name="passwordconf" id="register-password-conf" />
                    <LargeButton theme="light" text="REGISTRIEREN" id="register-button"/>
                </div>
                <SocialBar />
                <LinkBar text="LOGIN" path="/login" />
            </React.Fragment>
        );
    }
}
