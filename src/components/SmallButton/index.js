import React from 'react';
import { Component } from 'react';
import './SmallButton.css';

export default class SmallButton extends Component {
    render() {
        return (
            <button className="small-button" id={this.props.id} onClick={this.props.onClick}>
                {this.props.text}
            </button>
        );
    }
}