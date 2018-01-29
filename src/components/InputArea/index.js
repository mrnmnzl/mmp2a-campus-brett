import React from 'react';
import { Component } from 'react';
import './InputArea.css';

export default class InputArea extends Component {
    render() {
        return (
            <textarea
                className="input-area"
                type="textarea"
                placeholder={this.props.placeholder}
                rows="4"
                cols="50"
                onChange={this.props.onChange}
                value={this.props.value}
            >
            </textarea>
        );
    }
}
