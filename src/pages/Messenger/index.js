import React from 'react';
import { Component } from 'react';
// import * as firebase from 'firebase';
import Navigation from '../../components/Navigation';
import HeaderText from '../../components/HeaderText';
import Chat from '../../components/Chat';
// import dataHandling from '../../services/DataHandling';
import { Link } from 'react-router-dom';
// import { history } from '../../App';
import './Messenger.css';

export default class Messenger extends Component {
    // state = {
    //     myId: firebase.auth().currentUser.uid,
    //     receiverId: '',
    //     chats: []
    // };

    // componentWillMount() {
    //     if(this.props.match.params.length === 0) {
    //         this.setState({
    //             myId: firebase.auth().currentUser.uid
    //         })
    //     } else {
    //         this.setState({
    //             myId: firebase.auth().currentUser.uid,
    //             receiverId: this.props.match.params.userId
    //         });
    //     }

    //     dataHandling.addDataChangeListener('testChats', this.handleChatsDataChange);
    // }

    // handleChatsDataChange = data => {
    //     const chatList = data.val();

    //     if (chatList === null) {
    //         return;
    //     }

    //     const chatKeys = Object.keys(chatList);

    //     let availableChats = [];
    //     for (let i = 0; i < chatKeys.length; i++) {
    //         const k = chatKeys[i];

    //         const user1 = chatList[k].user1;
    //         const username1 = chatList[k].username2;
    //         const user2 = chatList[k].user2;
    //         const username2 = chatList[k].username2;



    //         if(user1 === this.state.myId || user2 === this.state.myId) {
    //             availableChats.push({
    //                 id: k,
    //                 user1: user1,
    //                 username1: username1,
    //                 user2: user2,
    //                 username2: username2
    //             });
    //         }         
    //     }

    //     availableChats.reverse();
    //     this.setState({
    //         chats: availableChats
    //     });
    // }

    // checkIfChatAvailable() {
    //     const chats = this.state.chats;
    //     for(let i = 0; i < chats.length; i++) {
    //         if((chats[i].user1 === this.state.myId && chats[i].user2 === this.state.receiverId) ||
    //         (chats[i].user2 === this.state.myId && chats[i].user1 === this.state.receiverId)) {
    //             const path = 'chat/' + chats[i].id;
    //             history.push(path);
    //         }
    //     } 

    //     this.createNewChat();
    // }

    // componentDidMount() {
    //     if(this.props.match === null) return;
    //     this.checkIfChatAvailable();
    // }

    // createNewChat() {
    //     console.log("Geht in CreateNewChat");
    //     const database = firebase.database();
        
    //     let user1 = firebase.auth().currentUser.uid;
    //     let user2 = this.props.match.params.userId;
        
    //     let username1 = "Max Mustermann";
    //     let username2 = "Martina Mustermann";
        
    //     // database
    //     // .ref('/users/' + user1)
    //     // .once('value')
    //     // .then(snapshot => {
    //     //     username1 = snapshot.val().username
    //     // });
        
    //     // database
    //     // .ref('/users/' + user2)
    //     // .once('value')
    //     // .then(snapshot => {
    //     //     username2 = snapshot.val().username
    //     // });
        
    //     const chatsRef = database.ref('testChats/');
    //     const newChat = chatsRef.push();
    //     const newChatKey = newChat.key;

    //     newChat
    //         .set({
    //             user1: user1,
    //             username1: username1,
    //             user2: user2,
    //             username2: username2,
    //             messages: []

    //         }).then(history.push("/chat/" + newChatKey));
    // }

    render() {
        return (
            <React.Fragment>
                <HeaderText text="NACHRICHTEN" />
                <div className="chats-container">
                    <Chat text="Susane Baum" />
                    <Chat text="Gregor Birke" />
                    <Chat text="Markus Stolz" />
                    <Chat text="Miriam Neu" />
                    <Chat text="Fabian Toll" />
                    <Chat text="Marion Lieb" />
                    <Chat text="Sementha Hase" />
                    <Chat text="Martin Holz" />
                </div>
                <Navigation />
            </React.Fragment>
        );
    }
}
