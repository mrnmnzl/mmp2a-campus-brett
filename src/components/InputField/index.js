import React from 'react';
import { Component } from 'react';
import './InputField.css';

export default class InputField extends Component {
    render() {
        return (
            <input class="input-field" type="text" placeholder={this.props.placeholder} />
        );
    }
}