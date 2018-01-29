import React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import './Post.css';

export default class Post extends Component {
    render() {
        const classList = classNames(
            'post-container',
            this.props.theme === "search" ? "bg-search" : "bg-find"
        );
        return (
            <div className={classList}>
                <p className="post-name">{this.props.name}</p>
                <p className="post-time">{this.props.time}</p>
                <p className="post-title">{this.props.title}</p>
                <p className="post-description">{this.props.description}</p>
                <div className="post-tags-container" id="tag-container">
                    <span className="tag">{this.props.tag}</span>
                </div>
            </div>
        );
    }
}