import React from 'react';
import { Component } from 'react';
import './CategoryTag.css';
import classNames from 'classnames';

export default class CategoryTag extends Component {
    handleTag = () => {
        this.props.onClick(this.props.text);
    };

    render() {
        const choosenTag = this.props.text === this.props.selected;
        
        const classList = classNames(
            'tag',
            {
                'bg-light': this.props.category === '' || !choosenTag,
                'bg-search': this.props.category === 'search' && choosenTag,
                'bg-find': this.props.category === 'offer' && choosenTag
            },
            {
                'light': choosenTag,
                'dark': this.props.category === '' || !choosenTag
            }
        );

        return (
            <div className="post-tags-container">
                <span className={classList} onClick={this.handleTag}>
                    {this.props.text}
                </span>
            </div>
        );
    }
}
