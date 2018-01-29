import React from 'react';
import { Component } from 'react';
import './CategoryTag.css';

export default class CategoryTag extends Component {
    handleTag = () => {
        this.props.onClick(this.props.text);
    };

    render() {
        return (
            <div className="post-tags-container">
                <span className="tag" onClick={this.handleTag}>
                    {this.props.text}
                </span>
            </div>
        );
    }
}
