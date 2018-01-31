import React from 'react';
import { Component } from 'react';
import * as firebase from 'firebase';
import HeaderIcon from '../../components/HeaderIcon';
import RadioCategory from '../../components/RadioCategory';
import Headline from '../../components/Headline';
import InputField from '../../components/InputField';
import InputArea from '../../components/InputArea';
import CategoryTag from '../../components/CategoryTag';
import LargeButton from '../../components/LargeButton';
import dataHandling from '../../services/DataHandling';
import { history } from '../../App';
import './NewPost.css';

export default class NewPost extends Component {
    state = {
        name: '',
        category: 'search',
        title: '',
        description: '',
        tag: ''
    };

    componentDidMount() {
        let userId = firebase.auth().currentUser.uid;
        firebase
        .database()
        .ref('/users/' + userId)
        .once('value')
        .then(snapshot => {
            this.setState({
                name: snapshot.val().username
            })
        });
    }

    handleCategory = event => {
        this.setState({
            category: event.target.value
        });
        
        document.getElementById('tags-container').style.display = "flex";
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
        //console.log(this.state.description), 0);
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
        dataHandling.createNewPost(this.state.name, this.state.category, this.state.title, this.state.description, this.state.tag);
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
                    <div className="tags-container" id="tags-container">
                        <CategoryTag id="tag-werkzeug" text="werkzeug" onClick={this.handleTag} />
                        <CategoryTag id="tag-hilfe" text="hilfe" onClick={this.handleTag} />
                        <CategoryTag id="tag-mitfahrgelegenheit" text="mitfahrgelegenheit" onClick={this.handleTag} />
                        <CategoryTag id="tag-lebensmittel" text="lebensmittel" onClick={this.handleTag} />
                        <CategoryTag id="tag-kleidung" text="kleidung" onClick={this.handleTag} />
                        <CategoryTag id="tag-unterhaltung" text="unterhaltung" onClick={this.handleTag} />
                        <CategoryTag id="tag-putzen" text="putzen" onClick={this.handleTag} />
                        <CategoryTag id="tag-party" text="party" onClick={this.handleTag} />
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
