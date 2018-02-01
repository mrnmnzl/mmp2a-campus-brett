import * as firebase from 'firebase';
import React from 'react';
import { Component } from 'react';
import HeaderIcon from '../../components/HeaderIcon';
import InputField from '../../components/InputField';
import Message from '../../components/Message';
import { userId } from '../../components/EnsureLoggedInContainer';
import { Link } from 'react-router-dom';
import './Chatroom.css'


export default class Chatroom extends Component {
    state = {
        //mitgegebene ChatID
        chatID: this.props.match.params.userId,
        userID: '',
        name: '',
        myID: userId,
        message: '',
        messages: []
    }
 
    //reload - must shown in Console
    //getting username 
    componentDidMount(){
        console.log('componentDidMount');

        //firebase conection to chats - getting ids and username from chatpartners
        firebase.database()
        .ref('/chats/' + this.state.chatID)
        .once('value')
        .then(snapshot => {
            this.setState({
                userID: snapshot.val().toUser,
                name: snapshot.val().toUserName
            })
        });
        
    }


    //wenn man eine Nachricht ins InputFeld eingibt
    handleMessage = event => {
        this.setState({
            message: event.target.value
        })
    }

    //Wenn man den SENDEN - Button klickt
    handleSubmit = (event) => {
        //preparing next message
        const nextMessage = {
            text: this.state.message,
        }

        //write message in DB
        this.saveNewMessage( 
            this.state.userID, 
            this.state.userId, 
            nextMessage.time, 
            nextMessage.text
        );            

        //list of messages
        var list = Object.assign([], this.state.messages);
        //send message in Chat 
        list.push(nextMessage);
        //message in die Liste der Nachrichten speichern
        this.setState({
            messages: list
        })
        //State der Message wieder auf null setzten
        this.setState({
            message: ''
        })
 
    }

    //Die Nachricht in DB speichern
    saveNewMessage(toUser, fromUser, time, text){
        const database = firebase.database();
        const messageRef = database.ref('chats/messages' + this.state.uniqueID);
        const newMessage = messageRef.push();
        const date = new Date().toLocaleString('de-DE', { hour12: false });
        
        newMessage
        .set({
            toUser: toUser,
            fromUser: fromUser,
            time: date,
            text: text
        })
    }
    

    render(){
        //Message die jemand abschickt
        const currentMessage = this.state.messages.map((message, i) => {
            return (
            <li key={message.id}>{message.text}</li>
            )
        })

        //Name of Person I chat with
        const chatroomName = this.state.name;
        return (
            <React.Fragment>
                <Link to="/messenger">
                    <HeaderIcon text={chatroomName} icon="back" />
                </Link>
                <div className="container-chat">
                    <Message text={currentMessage} />
                    <div className="chat-bar">
                        <div className="chat-input" >
                            <InputField placeholder="Nachricht verfassen..." onChange={this.handleMessage} value={this.state.message}/>
                        </div>
                        <span className="send-icon icon-arrow-up" onClick={this.handleSubmit} ></span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}