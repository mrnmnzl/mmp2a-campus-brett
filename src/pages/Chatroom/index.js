import * as firebase from 'firebase';
import React from 'react';
import { Component } from 'react';
import HeaderIcon from '../../components/HeaderIcon';
import InputField from '../../components/InputField';
import './Chatroom.css';
import { userId } from '../../components/EnsureLoggedInContainer';
import { Link } from 'react-router-dom';

export default class Chatroom extends Component {
    state = {
        //die Nachricht
        message: '',
        //Array mit den Nachrichten 
        messages: [],
        
        userName: '',
        //Name of Person I chat with
        name: '',
        //my own ID
        myID: userId,
        //ID of the person I chat with
        userID: this.props.match.params.userId,
        //Chatnumber
        chatID: this.props.match.params.chatId
    }

    //live - cicle - method -> System calls this function is the conection to firebase
    //reload - must shown in Console
    componentDidMount(){
        console.log('componentDidMount');

        let userId = this.state.userID;
        firebase.database()
        .ref('/users/' + userId)
        .once('value')
        .then(snapshot => {
            this.setState({
                name: snapshot.val().username
            })
        });
    }
   
    handleMessage = (event) => {
        //console.log('update Message: ' + event.target.value);
        this.setState({
            message: event.target.value
        })
    }

    //getting right messages 


    handleSubmit = (event) => {
        console.log('submit Message: ' + this.state.message)
       //preparing next message
        const nextMessage = {
            id: this.state.message.length,
            text: this.state.message,
            time: new Date().toLocaleString('de-DE', { hour12: false}),
            //number of chats - connection to chats DB
            noChat: this.state.chatID
        }

        
        
        // firebase.database().ref('chats/').set(chat);

        // firebase.database().ref('chats/messages/' + nextMessage.id).set(nextMessage);
    
    
        //list of messages
        var list = Object.assign([], this.state.messages);
        //send message in Chat 
        list.push(nextMessage);
        this.setState({
            messages: list
        })

        this.setState({
            message: ''
        })
    }

    handleBack = event => {
        this.props.history.push('/messenger')
    }

    render() {
        const currentMessage = this.state.messages.map((message, i) => {
            return (
            <li key={message.id}>{message.text}</li>
            )
        })
        //name for Person I chat with
        const chatName = this.state.name
        const path = 'messenger/' 
        return (
            <React.Fragment>
                <Link to={path}>
                    <HeaderIcon text={chatName} icon="back" onClick={this.handleBack} /> 
                </Link>
                <div className="container-chat">
                    <ol className="chat-messages">
                        {/* <span>{myName}</span> */}
                        <span>{currentMessage}</span>
                    </ol>
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