import React from 'react';
import { Component } from 'react';
import './Headline.css';

export default class Headline extends Component {
    render() {
        return (
            <p className="headline">{this.props.text}</p>
        );
    }
}