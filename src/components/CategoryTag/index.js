import React from 'react';
import { Component } from 'react';
import './CategoryTag.css';

export default class CategoryTag extends Component {
    render() {
        return (
            <div class="post-tags-container">
                <span class="tag">{this.props.text}</span>
            </div>
        );
    }
}