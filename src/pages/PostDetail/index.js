import React from 'react';
import { Component } from 'react';
import * as firebase from 'firebase';
import Navigation from '../../components/Navigation';
import HeaderIcon from '../../components/HeaderIcon';
import LargeButton from '../../components/LargeButton';
import SmallButton from '../../components/SmallButton';
import { userId } from '../../components/EnsureLoggedInContainer';
import { history } from '../../App';
import { Link } from 'react-router-dom';
import dataHandling from '../../services/DataHandling';
import './PostDetail.css';

export default class PostDetail extends Component {
    state = {
        id: '',
        name: '',
        time: '',
        title: '',
        description: '',
        tag: '',
        chat: ''
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        firebase
            .database()
            .ref('/posts/' + id)
            .once('value')
            .then(snapshot => {
                const path = "/chatfake/" + snapshot.val().user;
                this.setState({
                    id: id,
                    name: snapshot.val().name,
                    title: snapshot.val().title,
                    time: snapshot.val().time,
                    tag: snapshot.val().tag,
                    description: snapshot.val().description,
                    chat: path
                });
            
                if(snapshot.val().user !== userId) {
                    document.getElementById("detail-post-button-container").style.display = "flex";
                } else {
                    document.getElementById("detail-post-delete-container").style.display = "flex";
                }
            });
    }

    handleSavePost = () => {
        dataHandling.savePost(this.state.id, userId);
    }

    handleRemoveSavedPost() {

    }

    handleDelete = () => {
        dataHandling.deletePost(this.state.id);
        this.handleGoBack();
    }

    handleGoBack = () => {
        history.goBack();
    };

    render() {
        return (
            <React.Fragment>
                <HeaderIcon icon="back" text="DETAILANSICHT" onClick={this.handleGoBack} />
                <div className="detail-post-container">
                    <p className="detail-post-name">Von {this.state.name}</p>
                    <p className="detail-post-title">{this.state.title}</p>
                    <p className="detail-post-description">{this.state.description}</p>
                    <span className="tag">{this.state.tag}</span>
                    <div id="detail-post-button-container">
                        <LargeButton text="EINE NACHRICHT SCHREIBEN" theme="light" />
                        <Link to="/saved-posts">
                            <SmallButton text="Beitrag speichern" onClick={this.handleSavePost}/>
                        </Link>
                    </div>
                    <div id="detail-post-delete-container" >
                        <LargeButton text="DIESEN POST LÖSCHEN" theme="light" onClick={this.handleDelete}/>
                    </div>
                </div>
                <Navigation />
            </React.Fragment>
        );
    }
}
