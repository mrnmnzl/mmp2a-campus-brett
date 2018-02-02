import * as firebase from 'firebase';
import React from 'react';
import { Component } from 'react';
import HeaderIcon from '../../components/HeaderIcon';
import InputField from '../../components/InputField';
import Message from '../../components/Message';
import { Link } from 'react-router-dom';
import './FakeChatroom.css';

export default class Chatroom extends Component {
    state = {
        //mitgegebene ChatID
        userID: this.props.match.params.userID,
        name: '',
        message: '',
        messages: []
    }

    componentDidMount(){
        firebase.database().ref('messages/').on('value', (snapshot) => {
            const currentMessage = snapshot.val()
            if(currentMessage != null){
                this.setState({
                    messages: currentMessage
                })
            }
        })


        firebase
        .database()
        .ref('/users/' + this.state.userID)
        .once('value')
        .then(snapshot => {
            this.setState({
                name: snapshot.val().username
            });
        });
    }

    handleMessage = event => {
        console.log('message: ' + event.target.value)
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit= event =>{
        const nextMessage = {
            id: this.state.message.length,
            text: this.state.message
        }

        var list = Object.assign([], this.state.messages)
        list.push(nextMessage)
        this.setState({
            messages: list
        })
    }


    render(){
        const currentMessage = this.state.messages.map((message, i) => {
            return (
                <span className="message-span"><li key={message.id}>{message.text}</li></span>
            )
        })

        //Name of Person I chat with
        const chatroomName = this.state.name;
        return (
            <React.Fragment>
                <Link to="/messenger">
                    <HeaderIcon text={this.state.name} icon="back" />
                </Link>
                <div className="container-chat">
                    <div className="fake-message">
                        <span>Hallo, ich wollte fragen ob ich mir deinen Staubsauger ausborgen darf den du hier gepostet hast. LG </span>
                    </div>
                    <div id="chat-messages">
                        <ol>
                            {currentMessage}
                        </ol>
                    </div>
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