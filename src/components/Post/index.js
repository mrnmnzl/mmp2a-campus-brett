import React from 'react';
import { Component } from 'react';
import './Post.css';

export default class Post extends Component {
    render() {
        return (
            <div className="post-container bg-search">
                <p className="post-name">{this.props.name}</p>
                <p className="post-time">{this.props.time}</p>
                <p className="post-title">{this.props.title}</p>
                <p className="post-description">{this.props.description}</p>
                <div className="post-tags-container" id="tag-container">
                </div>
            </div>
        );
    }
}