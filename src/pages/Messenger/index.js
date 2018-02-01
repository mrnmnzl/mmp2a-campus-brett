import React from 'react';
import { Component } from 'react';
import * as firebase from 'firebase';
import Navigation from '../../components/Navigation';
import HeaderText from '../../components/HeaderText';
import Chats from '../../components/Chats';
import { userId } from '../../components/EnsureLoggedInContainer';
import dataHandling from '../../services/DataHandling';
import './Messenger.css'
import { Link } from 'react-router-dom';
import { history } from '../../App';


export default class Messenger extends Component {
    state = {
        //Person ID I chat with
        chatWithUser: this.props.match.params.fromId,
        chats: []
    }
    
    createNewChat(fromUser, toUser, toUserName) {
        const database = firebase.database();
        const chatRef = database.ref('chats/');
        const newChat = chatRef.push();

        newChat
        .set({
            fromUser: userId,
            toUser: this.state.userID,
            toUserName: this.state.name
        })
    }
    
    checkIfChatNew = data =>{
        const chatWith = this.state.chatWithUser;

        //Conection to firebase
        firebase
        .database()
        .ref('/chats/' + chatWith)
        .once('value')
        .then(snapshot => {
            // const path = "/chat/" + snapshot.val().user;
            this.setState({
                fromUser: snapshot.val().fromUser,
                toUser: snapshot.val().toUser,
                toUserName: snapshot.val().toUserName
                //messenger: path
            });
        });

        //LISTE von chats -> 
        const chatList = data.val();
        
        if (chatList === null) {
            return;
        }
        //Keys der DB-Liste herausfiltern
        const chatKeys = Object.keys(chatList);
        //Liste der Chats
        let chats = [];
        for (let i = 0; i < chatKeys.length; i++) {
            const k = chatKeys[i];
            const fromUser = chatList[k].fromUser;
            const toUser = chatList[k].toUser;
            const toUserName = chatList[k].toUserName;

            //check if to User is same as in URL and if from User is the same ID as mine
            if ((chatList[k].toUser === this.state.chatWithUser && chatList[k].fromUser === userId) || (chatList[k].toUser === userId && chatList[k].fromUser === this.state.chatWithUser))
                chats.push({
                    id: k,
                    fromUser: fromUser,
                    toUser: toUser,
                    toUserName: toUserName
                });
        }

        this.setState({
            chats: chats
        });

        //ChatID im url mitgeben 
        for (let i = 0; i < chats.length; i++) {
            if(chats[i].id !== null){
                //history.push('/chat/' + this.state.chatWithUser);
                history.push('/chat/' + chats[i].id + '/' + this.state.chatWithUser);
            }
            else {
                this.createNewChat(this.state.fromUser, this.state.toUser, this.state.toUserName);
            }
        }
    }

    //firebase conection
    componentWillMount() {
        dataHandling.addDataChangeListener('chats', this.handleChatsDataChange);
        this.checkIfChatNew();
    }
    
    render() {
        //Link to chat with special id
        const path = '/chat/' + userId;
        const chatName = this.state
        return (
            <React.Fragment>
                <HeaderText text="NACHRICHTEN"/>
                <div className="chats-container">
                    <div id="warnings"></div>
                    <Link to={path}>
                        {/* <Chats text={this.state.chatUser} /> */}
                        <Chats text="Marion Menzl" />
                        <Chats text="Anna Kutschka" />
                    </Link>
                </div>
                <Navigation />
            </React.Fragment>
        );
    }
}