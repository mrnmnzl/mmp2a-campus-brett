import React from 'react';
import { Component } from 'react';
import HeaderIcon from '../../components/HeaderIcon';
import InputField from '../../components/InputField';
import './Chatroom.css'

export default class Chatroom extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderIcon text="CHATROOM" icon="back" />
                <InputField placeholder="Verfasse eine Nachricht..." />
            </React.Fragment>
        );
    }
}