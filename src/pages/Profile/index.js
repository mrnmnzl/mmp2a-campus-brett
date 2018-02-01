import React from 'react';
import { Component } from 'react';
import * as firebase from 'firebase';
import Navigation from '../../components/Navigation';
import HeaderIcon from '../../components/HeaderIcon';
import authentification from '../../services/Authentification';
import dataHandling from '../../services/DataHandling';
import './Profile.css';
import { userId } from '../../components/EnsureLoggedInContainer';
import Post from '../../components/Post';
import Headline from '../../components/Headline';
import { Link } from 'react-router-dom';
import ProfileImage from '../../images/profile.png';

export default class Profile extends Component {
    state = {
        posts: [],
        name: '',
        email: ''
    };
    
    componentWillMount() {
        dataHandling.addDataChangeListener('posts', this.handlePostsDataChange);
    }
    
    componentDidMount() {
        let userId = firebase.auth().currentUser.uid;
        let email = firebase.auth().currentUser.email;
        firebase
        .database()
        .ref('/users/' + userId)
        .once('value')
        .then(snapshot => {
            this.setState({
                name: snapshot.val().username,
                email: email
            })
        });
    }

    handleLogout = () => {
        authentification.logout();
    };
    
    handlePostsDataChange = data => {
        //TODO: Improve data query
        const postList = data.val();

        if (postList === null) {
            return;
        }
       
        const postKeys = Object.keys(postList);

        let posts = [];
        for (let i = 0; i < postKeys.length; i++) {
            const k = postKeys[i];
            const name = postList[k].name;
            let time = postList[k].time;
            if (postList[k].time != null) {
                time = time.substring(0, time.length - 3);
            }
            const title = postList[k].title;
            const description = postList[k].description;
            const tag = postList[k].tag;
            const category = postList[k].category;

            if (postList[k].user === userId)
                posts.push({
                    id: k,
                    name: name,
                    time: time,
                    title: title,
                    description: description,
                    tag: tag,
                    category: category
                });
        }
        posts.reverse();
        this.setState({
            posts: posts
        });
    };

    render() {
        return (
            <React.Fragment>
                <HeaderIcon text="PROFIL" icon="logout" onClick={this.handleLogout} />
                <div className="profile-detail-container">
                    <img src={ProfileImage} alt="Logo Campus Brett" />
                    <p className="profile-name">{this.state.name}</p>
                    <p className="profile-email">{this.state.email}</p>
                </div>
                <div className="profile-title-container">
                    <Headline text="Eigene Beiträge" />
                </div>
                <div className="posts-container-profile">
                    {this.state.posts.map(post => {
                        const path = '/post/' + post.id;
                        return (
                            //React braucht bei Iteratoren eindeutige Keys deswegen key=
                            <Link to={path} key={post.id}>
                                <Post
                                    theme={post.category}
                                    key={post.id}
                                    name={post.name}
                                    time={post.time}
                                    title={post.title}
                                    description={post.description}
                                    tag={post.tag}
                                />
                            </Link>
                        );
                    })}
                </div>
                <Navigation />
            </React.Fragment>
        );
    }
}
