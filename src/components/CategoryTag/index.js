import React from 'react';
import { Component } from 'react';
import './CategoryTag.css';

export default class CategoryTag extends Component {
    render() {
        return (
            <div class="post-tags-container">
                <span class="tag">werkzeug</span>
                <span class="tag">haushaltsgerät</span>
                <span class="tag">hilfe</span>
                <span class="tag">mitfahrgelegenheit</span>
                <span class="tag">lebensmittel</span>
                <span class="tag">kleidung</span>
                <span class="tag">unterhaltung</span>
                <span class="tag">putzen</span>
                <span class="tag">party</span>
            </div>
        );
    }
}