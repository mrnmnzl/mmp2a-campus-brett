import * as firebase from 'firebase';
import React from 'react';
import { Component } from 'react';
import HeaderIcon from '../../components/HeaderIcon';
import InputField from '../../components/InputField';
import './Chatroom.css';
import { userId } from '../../components/EnsureLoggedInContainer';


export default class Chatroom extends Component {
    state = {
        message: '',
        messages: [],
        userName: ''
    }

    componentWillMount() {
        const id = userId;
        firebase
            .database()
            .ref('/users/' + id)
            .once('value')
            .then(snapshot => {
                this.setState({
                    userName: snapshot.val()
                });
            });  

            setTimeout(() => console.log(this.state.userName), 0);
            
    }

    //live - cicle - method -> System calls this function is the conection to firebase
    //reload - must shown in Console
    componentDidMount(){
        console.log('componentDidMount');
        // firebase.database().ref('messages/').on('value', (snapshot)=> {
        
        //     const currentMessages = snapshot.val()
            
        //     if(currentMessages != null){
        //         this.setState({
        //             messages: currentMessages
        //         })
        //     }
        // })   
    }
   
    handleMessage = (event) => {
        console.log('update Message: ' + event.target.value);
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        console.log('submit Message: ' + this.state.message)
        const chatID = 0;
       //preparing next message
        const nextMessage = {
            id: this.state.message.length,
            text: this.state.message,
            time: new Date().toLocaleString('de-DE', { hour12: false}),
            userID: chatID
        }
        console.log('submit MessageID: ' + nextMessage.id)
        console.log('ChatID: ' + nextMessage.userID)
        console.log('time: ' + nextMessage.time)

        //new Databasetable for chats between users
        const chat = {
            id: chatID,
            fromUser: userId
            //toUser:
        }
        console.log('Chatnumber: ' + chat.id)
        console.log('From user: ' + chat.fromUser)
    
        //connect to firebase
        firebase.database().ref('messages/' + nextMessage.id).set(nextMessage);
        firebase.database().ref('chats/' + chat.id).set(chat);
    
    
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

        return (
            <React.Fragment>
                <HeaderIcon text="CHATROOM" icon="back" onClick={this.handleBack}/>
                <div className="container-chat">
                    <ol className="chat-messages">
                        {/* <span>{this.state.userName.username}</span> */}
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