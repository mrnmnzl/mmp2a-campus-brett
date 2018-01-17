import React from 'react';
import { Component } from 'react';
import './InputLine.css';

export default class InputLine extends Component {
    render() {
        return (
            <input className="input-line-auth" type={this.props.type} placeholder={this.props.placeholder} name={this.props.name} id={this.props.id} required></input>
        );
    }
}