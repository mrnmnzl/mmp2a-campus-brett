import React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import LogoDark from '../../images/logo-dark.png';
import LogoLight from '../../images/logo-light.png';
import './HeaderIcon.css';

export default class HeaderLogo extends Component {
    render() {
        const iconClass = classNames({
            'icon-close': this.props.icon === 'close',
            'icon-arrow-left': this.props.icon === 'back',
            'icon-logout': this.props.icon === 'logout'
        },{
            'icon-right': this.props.icon === 'close' || this.props.icon === 'logout',
            'icon-left': this.props.icon === 'back'
        }
    );

        return (
            <div class="header-text-icon">
                <p>{this.props.text}</p>
                <span class={iconClass} onClick={this.props.onClick}/>
            </div>
        );
    }
}
