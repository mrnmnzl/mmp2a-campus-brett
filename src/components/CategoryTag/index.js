import React from 'react';
import { Component } from 'react';
import './CategoryTag.css';

export default class CategoryTag extends Component {
    render() {
        return (
            <div className="post-tags-container">
                <span className="tag">{this.props.text}</span>
            </div>
        );
    }
}