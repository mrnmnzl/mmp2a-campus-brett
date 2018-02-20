import React from 'react';
import { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <Link to="/"><span className="icon-home"></span></Link>
                <Link to="/profile"><span className="icon-user"></span></Link>
                <Link to="/new-post"><span className="icon-add"></span></Link>
                <span className="icon-chat"></span>
                <Link to="/saved-posts"><span className="icon-bookmark"></span></Link>
            </div>
        );
    }
}