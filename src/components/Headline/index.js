import React from 'react';
import { Component } from 'react';
import 'Headline.scss';

export default class Headline extends Component {
    render() {
        return (
            <p>{this.props.text}</p>
        );
    }
}