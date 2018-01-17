import React from 'react';
import { Component } from 'react';
import './CategoryBar.css';

export default class CategoryBar extends Component {
    render() {
        return (
            <div className="bar-category">
                <button className="button-category">Gesucht</button>
                <button className="button-category">Geboten</button>
                <span className="icon-search"></span>
            </div>
        );
    }
}