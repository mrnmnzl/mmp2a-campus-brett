import React from 'react';
import { Component } from 'react';
import './SocialBar.css';

export default class SocialBar extends Component {
    render() {
        return (
            <div className="bar-social">
                <span className="icon-facebook" />
                <span className="icon-twitter" />
                <span className="icon-gmail" />
            </div>
        );
    }
}
