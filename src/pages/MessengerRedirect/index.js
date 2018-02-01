import React from 'react';
import { Component } from 'react';
import * as firebase from 'firebase';
import Navigation from '../../components/Navigation';
import HeaderText from '../../components/HeaderText';
import Chats from '../../components/Chats';
import './Messenger.css'
import { userId } from '../../components/EnsureLoggedInContainer/index';
import { history } from '../../App';
import { Link } from 'react-router-dom';
import dataHandling from '../../services/DataHandling';

export default class Messenger extends Component {
    state = {
        chatWith: this.props.match.params.fromId,
        name: '',
        myID: userId,
        chats: []
    }

    componentWillMount() {
        console.log('componentWillMount')
        //Username from ChatWith
        firebase
        .database()
        .ref('/users/' + userId)
        .once('value')
        .then(snapshot => {
            this.setState({
                name: snapshot.val().username
            })
        });

        dataHandling.addDataChangeListener('chats', this.handleChatsDataChange);
    }
    //alle chats aus DB in Liste speichern und auf der Seite ausgeben
    handleChatsDataChange = data => {
        //TODO: Improve data query
        const chatList = data.val();

        if (chatList === null) {
            return;
        }

        const chatKeys = Object.keys(chatList);

        let chats = [];
        for (let i = 0; i < chatKeys.length; i++) {
            const k = chatKeys[i];
            const fromUser = chatList[k].fromUser;
            const toUser = chatList[k].toUser;
            const toUserName = chatList[k].toUserName;

            chats.push({
                id: k,
                fromUser: fromUser,
                toUser: toUser,
                toUserName: toUserName
            });
            

            this.setState({
                chats: chats
            });
            
            //Check if chat already exist
            if ((chats.fromUser === this.state.chatWith && chats.toUser === userId) || 
            (chats.fromUser === userId && chats.fromUser === this.state.chatWith)){
                //it exists
                history.push('/chat/' + chats.id);
            }
            else {
                //neuen Chat erstellen
                this.createNewChat(this.state.chatWith, userId, this.state.name);
            }
        };
    }

    createNewChat(toUser, fromUser, toUserName){
        const database = firebase.database();
        const chatRef = database.ref('chats/');
        const newChat = chatRef.push();
        
        newChat
        .set({
            toUser: toUser,
            fromUser: fromUser,
            toUserName: toUserName
        })

        history.push('/chat/' + newChat);
    }

    render() {
        
        return (
            <React.Fragment>
                <HeaderText text="NACHRICHTEN"/>
                
                <div className="chats-container">
                {this.state.chats.map(chat => {
                        const path = '/chat/' + chat.id;
                        return (
                            //React braucht bei Iteratoren eindeutige Keys deswegen key=
                            <Link to={path} key={chat.id}>
                                <Chats
                                    text={this.state.name}
                                />
                            </Link>
                        );
                })}
                </div>
                <Navigation />
            </React.Fragment>
        );
    }
}