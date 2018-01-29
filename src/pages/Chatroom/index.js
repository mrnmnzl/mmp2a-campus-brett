import React from 'react';
import { Component } from 'react';
import HeaderIcon from '../../components/HeaderIcon';
import InputField from '../../components/InputField';
import './Chatroom.css'
import authentification from '../../services/Authentification';



export default class Chatroom extends Component {
    state = {
        message: ''
    };

    handleMessage = event => {
        this.setState({
            message: event.target.value
        });
    };

    handleBack = event => {
        this.props.history.push('/messenger');
    }

    render() {
        return (
            <React.Fragment>
                <HeaderIcon text="CHATROOM" icon="back" onClick={this.handleBack}/>
                <div className="container-chat">
                    <div className="chat-bar">
                        <div className="chat-input" >
                            <InputField placeholder="Nachricht verfassen..." onChange={this.handleMessage} value={this.state.message}/>
                        </div>
                        <span className="send-icon icon-arrow-up" ></span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}