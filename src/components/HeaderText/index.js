import React from 'react';
import { Component } from 'react';
import './HeaderText.css';

export default class HeaderText extends Component {
    render() {
        return (
            <div className="header-text">
                <p>{this.props.text}</p>
            </div>
        );
    }
}