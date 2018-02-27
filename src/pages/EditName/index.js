import React from 'react';
import { Component } from 'react';
import HeaderText from '../../components/HeaderText';
import InputLine from '../../components/InputLine';
import LargeButton from '../../components/LargeButton';
import DataHandling from '../../services/DataHandling';
import { userId } from '../../components/EnsureLoggedInContainer';
import './EditName.css';
import validator from 'validator';

export default class EditName extends Component {
    state = {
        username: ''
    };

    handleNameChange = event => {
        this.setState({
            username: event.target.value
        });
    };

    handleSubmit = event => {
        if(!validator.isLength(this.state.username, {max: 20, min: 4})){
            const container = document.getElementById('validation');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Dein Benutzername ist zu kurz </p>');
        }
        
        //check if username contains no Number or specialchar
        if(!validator.isAscii(this.state.username)){
            const container = document.getElementById('validation');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Ungültiger Benutzername </p>');
        }
        else if(/\d/.test(this.state.username)){
            const container = document.getElementById('validation');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Dein Benutzername darf nur aus Buchstaben bestehen </p>');
        }
        else if(/[~`!#$%&*+=\-\]\\';,/{}|\\":<>]/g.test(this.state.username)){
            const container = document.getElementById('validation');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Dein Benutzername darf nur aus Buchstaben bestehen </p>');
        }
        else {
            DataHandling.addNameToUser(userId, this.state.username);
            this.props.history.push('/');
        }
        
    };

    render() {
        return (
            <React.Fragment>
                <div className="edit-name-page-container">
                    <HeaderText text="PROFIL VERVOLLSTÄNDIGEN" />
                    <div id="validation"></div>
                    <p>Bitte gib deinen Namen ein. </p>
                    <InputLine
                        type="text"
                        value={this.state.username}
                        placeholder="z. B. Max Mustermann"
                        name="username"
                        id="username"
                        onChange={this.handleNameChange}
                    />
                    <LargeButton
                        className="submit-button"
                        theme="light"
                        text="SPEICHERN"
                        id="save-name-button"
                        onClick={this.handleSubmit}
                    />
                </div>
            </React.Fragment>
        );
    }
}
