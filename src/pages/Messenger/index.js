import React from 'react';
import { Component } from 'react';
import Navigation from '../../components/Navigation';
import HeaderText from '../../components/HeaderText';
import Chats from '../../components/Chats';
import { userId } from '../../components/EnsureLoggedInContainer';
import dataHandling from '../../services/DataHandling';
import './Messenger.css'
import { Link } from 'react-router-dom';


export default class Messenger extends Component {
    state = {
        chatUser: ''
    }

    //firebase conection
    componentWillMount() {
        dataHandling.addDataChangeListener('chats', this.handleChatsDataChange);
    }
    
    //trying to get all chats from my id 
    //need the username from the other person
    handleChatsDataChange = data => {
    
        const chatList = data.val();

        if (chatList === null) {
            const container = document.getElementById('warnings');
            container.insertAdjacentHTML('beforeend', '<p> Du hast noch keine Nachrichten verschickt </p>');
        } 
        else {
            const chatKeys = Object.keys(chatList);
            let chats = [];
            for (let i = 0; i < chatKeys.length; i++) {
                const k = chatKeys[i];
                const fromUser = chatKeys[i].fromUser;

                if (chatList[k].fromUser === userId){
                    chats.push({
                        id: k,
                        fromUser: fromUser
                    });
                }
            }
            this.setState({
                chatUser: chats.fromUser
            });
            console.log(this.state.chatUser)
        }
    }

    render() {
        //Link to chat with special id
        const path = '/chat';
        return (
            <React.Fragment>
                <HeaderText text="NACHRICHTEN"/>
                <div className="chats-container">
                    <div id="warnings"></div>
                    <Link to={path}>
                        <Chats text={this.state.chatUser} />
                        <Chats text="Marion Menzl" />
                        <Chats text="Anna Kutschka" />
                    </Link>
                </div>
                <Navigation />
            </React.Fragment>
        );
    }
}