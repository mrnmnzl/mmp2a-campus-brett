import React from 'react';
import { Component } from 'react';
import Navigation from '../../components/Navigation';
import HeaderIcon from '../../components/HeaderIcon';
import { history } from '../../App';

export default class Search extends Component {
    handleBack = () => {
        history.push('/');
    }

    render() {
        return (
            <React.Fragment>
                <HeaderIcon text="SUCHE" icon="back" onclick={this.handleBack}/>
                <Navigation />
            </React.Fragment>
        );
    }
}