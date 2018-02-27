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
import validator from 'validator';

const tags = [
    { id: 'tag-hilfe', text: 'hilfe' },
    { id: 'tag-mitfahrgelegenheit', text: 'mitfahrgelegenheit' },
    { id: 'tag-lebensmittel', text: 'lebensmittel' },
    { id: 'tag-kleidung', text: 'kleidung' },
    { id: 'tag-unternehmung', text: 'unternehmung' },
    { id: 'tag-haushaltsgeraet', text: 'haushaltsgerät' },
    { id: 'tag-unterhaltung', text: 'unterhaltung' },
    { id: 'tag-party', text: 'party' },
    { id: 'tag-pc-problem', text: 'pc-problem' },
    { id: 'tag-werkzeug', text: 'werkzeug' },
]


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
                });
            });
    }

    handleCategory = event => {
        this.setState({
            category: event.target.value
        });

        document.getElementById('tags-container').style.display = 'flex';
    };

    handleTitle = event => {
        this.setState({
            title: event.target.value
        });
    };

    handleDescription = event => {
        this.setState({
            description: event.target.value
        });
    };

    handleTag = value => {
        this.setState({
            tag: value
        });
    };

    handleClose = () => {
        history.goBack();
    };

    handleClick = (e) => {
        return this.state.tag;
    }

    handleSubmit = () => {
        //Title Validation
        if (!validator.isEmpty(this.state.title)) {
            const container = document.getElementById('validation');
            container.insertAdjacentHTML('beforeend', '<p> Der Titel ist zu kurz </p>');
        } else if (!validator.isAscii(this.state.title)) {
            const container = document.getElementById('validation');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Ungültiger Titel </p>');
        } else if (/\d/.test(this.state.title)) {
            const container = document.getElementById('validation');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Der Titel darf nur aus Buchstaben bestehen </p>');
        } else if (/[~`!#$%&*+=\-\]\\';,/{}|\\":<>]/g.test(this.state.title)) {
            const container = document.getElementById('validation');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Der Titel darf nur aus Buchstaben bestehen </p>');
        }

        //Description Validation
        if (validator.isEmpty(this.state.description)) {
            const container = document.getElementById('validation');
            container.insertAdjacentHTML('beforeend', '<p> Die Beschreibung ist zu kruz </p>');
        } else if (/[~`*+=\-\]\\;/{}|\\<>]/g.test(this.state.title)) {
            const container = document.getElementById('validation');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Der Titel darf nur aus Buchstaben bestehen </p>');
        } else {
            dataHandling.createNewPost(
                this.state.name,
                this.state.category,
                this.state.title,
                this.state.description,
                this.state.tag
            );
        }
    };

    render() {
        return (
            <React.Fragment>
                <HeaderIcon text="NEUEN BEITRAG VERFASSEN" icon="close" onClick={this.handleClose} />
                <form className="container-new-post">
                    <div id="validation" />
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
                        {tags.map(tag => {
                            return <CategoryTag 
                                        id={tag.id} 
                                        text={tag.text} 
                                        onClick={this.handleTag} 
                                        selected={this.handleClick()} 
                                        category={this.state.category} />
                        })}
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
