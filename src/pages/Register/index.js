import React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import SocialBar from '../../components/SocialBar';
import LinkBar from '../../components/LinkBar';
import HeaderLogo from '../../components/HeaderLogo';
import InputLine from '../../components/InputLine';
import LargeButton from '../../components/LargeButton';
import './Register.css';

export default class Register extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderLogo theme="dark" />
                <div className="register-container">
                    <InputLine type="text" placeholder="Name" name="name" id="name" />
                    <InputLine type="email" placeholder="Email" name="email" id="email" />
                    <InputLine type="password" placeholder="Passwort" name="password" id="password" />
                    <InputLine type="password" placeholder="Passwort wiederholen" name="passwordconf" id="password" />
                    <LargeButton theme="light" text="REGISTRIEREN" />
                </div>
                <SocialBar />
                <LinkBar text="LOGIN" path="/login" />
            </React.Fragment>
        );
    }
}
