import React from 'react';
import { Component } from 'react';
import Navigation from '../../components/Navigation';
import HeaderText from '../../components/HeaderText';
import Chats from '../../components/Chats';
import { userId } from '../../components/EnsureLoggedInContainer';
import './Messenger.css'
import { Link } from 'react-router-dom';

export default class Messenger extends Component {

    render() {
        //Link to chat with special id
        const path = '/chat';
        return (
            <React.Fragment>
                <HeaderText text="NACHRICHTEN"/>
                <div className="chats-container">
                    <Link to={path}>
                        <Chats text={userId} />
                        <Chats text="Marion Menzl" />
                        <Chats text="Anna Kutschka" />
                    </Link>
                </div>
                <Navigation />
            </React.Fragment>
        );
    }
}