import React from 'react';
import { Component } from 'react';
import './CategoryBar.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

export default class CategoryBar extends Component {
    render() {
        const classListSearch = classNames(
            this.props.underline === "search" ? "underline" : "",
            'button-category'
        );
        const classListOffer = classNames(
            this.props.underline === "offer" ? "underline" : "",
            'button-category'
        );
        return (
            <div className="bar-category">
                <Link to="/"><button className={classListSearch}>Gesucht</button></Link>
                <Link to="/offer"><button className={classListOffer}>Geboten</button></Link>
                <span className="icon-search"></span>
            </div>
        );
    }
}