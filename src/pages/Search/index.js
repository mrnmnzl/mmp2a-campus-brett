import React from 'react';
import { Component } from 'react';
import Navigation from '../../components/Navigation';
import HeaderText from '../../components/HeaderText';


export default class Search extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderText text="SUCHE"/>
                <Navigation />
            </React.Fragment>
        );
    }
}