import React from 'react';
import { Component } from 'react';
import './LinkBar.css';
import { Link } from 'react-router-dom';

export default class SocialBar extends Component {
    render() {
        return (
            <Link to={this.props.path}>
                <div className="bar-login-register">
                    <p>{this.props.text}</p>
                </div>
            </Link>
        );
    }
}
