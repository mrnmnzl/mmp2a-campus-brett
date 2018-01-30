import React from 'react';
import { Component } from 'react';
import HeaderText from '../../components/HeaderText';
import InputLine from '../../components/InputLine';
import LargeButton from '../../components/LargeButton';
import DataHandling from '../../services/DataHandling';
import { userId } from '../../components/EnsureLoggedInContainer';

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
        DataHandling.addNameToUser(userId, this.state.username);
        this.props.history.push('/');
    };

    render() {
        return (
            <React.Fragment>
                <HeaderText text="PROFIL VERVOLLSTÄNDIGEN" />
                <div className="container-login">
                    <InputLine
                        type="text"
                        value={this.state.username}
                        placeholder="Benutzername"
                        name="username"
                        id="username"
                        onChange={this.handleNameChange}
                    />
                    <LargeButton
                        className="submit-button"
                        theme="light"
                        text="SPEICHERN"
                        id="save-button"
                        onClick={this.handleSubmit}
                    />
                </div>
            </React.Fragment>
        );
    }
}
