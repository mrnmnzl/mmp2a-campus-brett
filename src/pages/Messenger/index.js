import React from 'react';
import { Component } from 'react';
import Navigation from '../../components/Navigation';
import HeaderText from '../../components/HeaderText';


export default class Messenger extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderText text="NACHRICHTEN"/>
                <Navigation />
            </React.Fragment>
        );
    }
}