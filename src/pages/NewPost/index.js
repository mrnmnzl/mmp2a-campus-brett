import React from 'react';
import { Component } from 'react';
// import * as firebase from 'firebase';
import HeaderIcon from '../../components/HeaderIcon';
import RadioCategory from '../../components/RadioCategory';
import Headline from '../../components/Headline';
import InputField from '../../components/InputField';
import InputArea from '../../components/InputArea';
import CategoryTag from '../../components/CategoryTag';
import LargeButton from '../../components/LargeButton';
import './NewPost.css';
import dataHandling from '../../services/DataHandling';
import { history } from '../../App';

export default class NewPost extends Component {
    state = {
        category: 'search',
        title: '',
        description: '',
        tag: ''
    };

    componentDidMount = () => {};

    handleCategory = event => {
        this.setState({
            category: event.target.value
        });
        //setTimeout(() => console.log(this.state.category), 0);
    };

    handleTitle = event => {
        this.setState({
            title: event.target.value
        });
        //setTimeout(() => console.log(this.state.title), 0);
    };

    handleDescription = event => {
        this.setState({
            description: event.target.value
        });
        //setTimeout(() => console.log(this.state.description), 0);
    };

    handleTag = value => {
        this.setState({
            tag: value
        });
    };

    handleClose = () => {
        history.goBack();
    };

    handleSubmit = () => {
        // let userId = firebase.auth().currentUser.uid;
        let username = "Max Mustermann";
        // firebase
        // .database()
        // .ref('/users/' + userId)
        // .once('value')
        // .then(snapshot => {
        //     username = snapshot.val().username;
        // });

        dataHandling.createNewPost(username, this.state.category, this.state.title, this.state.description, this.state.tag);
    };

    render() {
        return (
            <React.Fragment>
                <HeaderIcon text="NEUEN BEITRAG VERFASSEN" icon="close" onClick={this.handleClose} />
                <form className="container-new-post">
                    <Headline text="KATEGORIE" />
                    <div className="radio-container" onChange={this.handleCategory}>
                        <RadioCategory />
                    </div>
                    <Headline text="TITEL" />
                    <InputField placeholder="Titel..." onChange={this.handleTitle} value={this.state.title} />
                    <Headline text="BESCHREIBUNG" />
                    <InputArea
                        placeholder="Beschreibung einfügen"
                        onChange={this.handleDescription}
                        value={this.state.description}
                    />
                    <Headline text="TAG" />
                    <div className="tags-container">
                        <CategoryTag text="werkzeug" onClick={this.handleTag} category={this.state.category} />
                        <CategoryTag text="hilfe" onClick={this.handleTag} category={this.state.category} />
                        <CategoryTag
                            text="mitfahrgelegenheit"
                            onClick={this.handleTag}
                            category={this.state.category}
                        />
                        <CategoryTag text="lebensmittel" onClick={this.handleTag} category={this.state.category} />
                        <CategoryTag text="kleidung" onClick={this.handleTag} category={this.state.category} />
                        <CategoryTag text="unterhaltung" onClick={this.handleTag} category={this.state.category} />
                        <CategoryTag text="putzen" onClick={this.handleTag} category={this.state.category} />
                        <CategoryTag text="party" onClick={this.handleTag} category={this.state.category} />
                    </div>
                    <div className="button-container">
                        <LargeButton
                            className="save-new-post-button"
                            text="BEITRAG SPEICHERN"
                            theme="light"
                            onClick={this.handleSubmit}
                        />
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
