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
import { database } from 'firebase';

export default class PostDetail extends Component {
    state = {
        id: '',
        name: '',
        time: '',
        title: '',
        description: '',
        tag: '',
        chat: '',
        userId: '',
        savedPosts: []
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        firebase
            .database()
            .ref('/posts/' + id)
            .once('value')
            .then(snapshot => {
                const path = "/chat/" + snapshot.val().user;
                this.setState({
                    id: id,
                    name: snapshot.val().name,
                    title: snapshot.val().title,
                    time: snapshot.val().time,
                    tag: snapshot.val().tag,
                    description: snapshot.val().description,
                    chat: path,
                    userId: snapshot.val().user
                });  
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
    }

    handleSavedPostsDataChange = () => {
        const id = this.props.match.params.id;
        

        let savedPosts = data.postId;
        let savedPostsKeys = [];
        savedPostsKeys = Object.keys(data);

        console.log(data);
        console.log(savedPosts);
        console.log(savedPostsKeys);
        
        // for (let i = 0; i < savedPostsKeys.length; i++) {
        //     const savedPostKey = savedPostsKeys[i];
        //     const savedPostId = savedPosts[savedPostKey].postId;

        //     console.log(id);
        //     console.log(savedPostId);

        //     if(savedPostId === id) {
        //         console.log("hey");
        //     }  
        // }
    }

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
                        <Link to={this.state.chat}>
                            <LargeButton text="EINE NACHRICHT SCHREIBEN" theme="light" />
                        </Link>
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
