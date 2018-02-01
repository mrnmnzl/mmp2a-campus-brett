import React from 'react';
import { Component } from 'react';
import * as firebase from 'firebase';
import Navigation from '../../components/Navigation';
import HeaderText from '../../components/HeaderText';
import Post from '../../components/Post';
import { Link } from 'react-router-dom';
import dataHandling from '../../services/DataHandling';
import './SavedPosts.css';

export default class SavedPosts extends Component {
    state = {
        posts: [],
        savedPosts: [],
        postsForDisplay: []
    }

    componentWillMount() {
        const userId = firebase.auth().currentUser.uid;
        const path = 'savedPosts/' + userId;
        dataHandling.addDataChangeListener('posts', this.handlePostsDataChange);
        dataHandling.addDataChangeListener(path, this.handleSavedPostsDataChange);
    }

    handlePostsDataChange = (data) => {
        if(data.hasChildren()) {
            this.setState({
                posts: data.val()
            });
        }
    }

    handleSavedPostsDataChange = (data) => {
        if(data.hasChildren()) {
            this.setState({
                savedPosts: data.val()
            });
        }
    }

    render() {
        const postsForDisplay = [];

        if (this.state.savedPosts !== [] && this.state.posts !== []) {
            const savedPostsKeys = Object.keys(this.state.savedPosts);
            const postsKeys = Object.keys(this.state.posts);

            if(this.state.savedPosts.length !== 0 && this.state.posts.length !== 0) {
                let savedPosts;
                savedPosts = this.state.savedPosts;
                let posts;
                posts = this.state.posts;

                for (let i = 0; i < savedPostsKeys.length; i++) {
                    const savedPostKey = savedPostsKeys[i];
                    const savedPostId = savedPosts[savedPostKey].postId;

                    for(let j = 0; j < postsKeys.length; j++) {
                        if(savedPostId === postsKeys[j]) {
                            const key = postsKeys[j];
                            const name = posts[key].name;
                            let time = posts[key].time;
                            time = time.substring(0, time.length - 3);
                            const title = posts[key].title;
                            const description = posts[key].description;
                            const tag = posts[key].tag;
                            const category = posts[key].category;

                            postsForDisplay.push({
                                id: key,
                                name: name,
                                time: time,
                                title: title,
                                description: description,
                                tag: tag,
                                category: category
                            });
                        }
                    }
                }
            }
        }

        postsForDisplay.reverse();

        return (
            <React.Fragment>
                <HeaderText text="GESPEICHERTE BEITRÄGE" />
                <div className="posts-container-saved-posts" id="post-container">
                    <div id="warning-saved-posts">
                        <p>Du hast noch keine Beiträge gespeichert!</p>
                    </div>
                    {postsForDisplay.map(post => {
                        const path = '/post/' + post.id;
                        return (
                            <Link to={path} key={post.time}>
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