import React from 'react';
import { Component } from 'react';
import Navigation from '../../components/Navigation';
import HeaderIcon from '../../components/HeaderIcon';

export default class NotFound404 extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderIcon text="404 Error Not Found" icon="back" />
                <Navigation />
            </React.Fragment>
        );
    }
}