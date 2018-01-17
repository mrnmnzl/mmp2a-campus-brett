import React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import LogoDark from '../../images/logo-dark.png';
import LogoLight from '../../images/logo-light.png';
import './HeaderLogo.css';

export default class HeaderLogo extends Component {
    render() {
        let logoImage = (this.props.theme === 'light') ? LogoDark : LogoLight ;
        const logoClass = classNames(
            'header-logo',
            {
                'bg-light': this.props.theme === 'light',
                'bg-dark': this.props.theme === 'dark'
            }
        );

        return (
            <div className={logoClass}>
                <img src={logoImage} alt="Logo Campus Brett" />
            </div>
        );
    }
}