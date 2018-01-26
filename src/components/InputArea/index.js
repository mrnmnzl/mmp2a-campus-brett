import React from 'react';
import { Component } from 'react';
import './InputArea.css';

export default class InputArea extends Component {
    render() {
        return (
            <textarea class="input-area m" type="textarea" placeholder={this.props.placeholder} rows="4" cols="50"/>
        );
    }
}