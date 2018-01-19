import React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import './LargeButton.css';

// USAGE:
// <LargeButton theme="light/search/find" text="" />

export default class LargeButton extends Component {
    render() {
        const classList = classNames(
            'button-large',
            {
                'bg-light': this.props.theme === 'light',
                'bg-search': this.props.theme === 'search',
                'bg-find': this.props.theme === 'find'
            },
            {
                light: this.props.theme === 'search' || this.props.theme === 'find',
                dark: this.props.theme === 'light'
            }
        );

        return (
            <button className={classList} id={this.props.id} onClick={this.props.onClick}>
                {this.props.text}
            </button>
        );
    }
}
