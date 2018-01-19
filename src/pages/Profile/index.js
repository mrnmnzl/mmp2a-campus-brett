import React from 'react';
import { Component } from 'react';
import Navigation from '../../components/Navigation';
import HeaderIcon from '../../components/HeaderIcon';
import authentification from '../../services/Authentification';

export default class Profile extends Component {
    handleLogout = () => {
        authentification.logout();
    }

    render() {
        return (
            <React.Fragment>
                <HeaderIcon text="PROFIL" icon="logout" onClick={this.handleLogout}/>
                <Navigation />
            </React.Fragment>
        );
    }
}