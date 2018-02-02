// import * as firebase from 'firebase';
import React from 'react';
import { Component } from 'react';
// import HeaderIcon from '../../components/HeaderIcon';
// import InputField from '../../components/InputField';
import Navigation from '../../components/Navigation';
// import { userId } from '../../components/EnsureLoggedInContainer';
// import { Link } from 'react-router-dom';
// import './Chatroom.css';


export default class Chatroom extends Component {
    // state = {
    //     chatID: this.props.match.params.userId,
    //     myId: '',
    //     receiverId: '',
    //     message: '',
    //     messages: []
    // }
 
    render() {
        return (
            <React.Fragment>
               <p> Hallo </p>
               <Navigation />
            </React.Fragment>
        );
    }
}