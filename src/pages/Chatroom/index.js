import * as firebase from 'firebase';
import React from 'react';
import { Component } from 'react';
import HeaderIcon from '../../components/HeaderIcon';
import InputField from '../../components/InputField';
import './Chatroom.css'
import authentification from '../../services/Authentification';
import {userId} from '../../components/EnsureLoggedInContainer';


export default class Chatroom extends Component {
    constructor(props, context){
        super(props, context)
        this.handleMessage = this.handleMessage.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        //this.getUserName = this.getUserName.bind(this)
        this.state = {
            message: '',
            messages: []
        }
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
    
    

   
    handleMessage(event) {
        console.log('update Message: ' + event.target.value);
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit(event){
       console.log('submit Message: ' + this.state.message)
    
       //preparing next message
        const nextMessage = {
            id: this.state.message.length,
            text: this.state.message,
            userID: userId
        }
        console.log('submit MessageID: ' + nextMessage.id)
        console.log('submit userId: ' + nextMessage.userID)
    
        //connect to firebase
        firebase.database().ref('messages/' + nextMessage.id).set(nextMessage);
    
    
        //list of messages
        var list = Object.assign([], this.state.messages);
        //send message in Chat 
        list.push(nextMessage);
        this.setState({
            messages: list
        })
    }

    handleBack = event => {
        this.props.history.push('/messenger')
    }

    // getUserName = () => {
    //     const id = userId;
    //     firebase
    //         .database()
    //         .ref('/users/' + id)
    //         .once('value')
    //         .then(snapshot => {
    //             this.setState({
    //                 name: snapshot.val().username
    //             });
    //         });  
    //     //setTimeout(() => console.log(this.state.name), 0);
    // }

    render() {
        const currentMessage = this.state.messages.map((message, i) => {
            return (
            <li key={message.id}>{message.text}</li>
            )
        })

        //const userName = getUserName();

        return (
            <React.Fragment>
                <HeaderIcon text="CHATROOM" icon="back" onClick={this.handleBack}/>
                <div className="container-chat">
                    <ol className="chat-messages">
                        {/* <span>{userName}</span> */}
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