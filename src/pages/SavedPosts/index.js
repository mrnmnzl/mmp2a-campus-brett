import React from 'react';
import { Component } from 'react';
import Navigation from '../../components/Navigation';
import HeaderText from '../../components/HeaderText';
import Post from '../../components/Post';
import { userId } from '../../components/EnsureLoggedInContainer/index';
import { Link } from 'react-router-dom';
import dataHandling from '../../services/DataHandling';

export default class SavedPosts extends Component {
    state = {
        posts: [],
        savedPosts: []
    }

    componentWillMount() {
        dataHandling.addDataChangeListener('posts', this.setPostsState);
        const path = 'savedPosts/' + userId;
        dataHandling.addDataChangeListener(path, this.setSavedPostsState);
    }

    setPostsState = (posts) => {
        this.setState({
            posts: posts.val()
        })
    }

    setSavedPostsState = (posts) => {
        this.setState({
            savedPosts: posts.val()
        });
    }

    // handleSavedPosts = (savedPosts, posts) => {
    //     const database = firebase.database();
    //     const savedPosts = database.ref('/savedPosts/' + userId + "/");
    //     const posts = database.ref('/posts/');

    //     if (savedPosts === null) {
    //         return;
    //     }

    //     const savedPostKeys = Object.keys(savedPosts);
    //     const postsKeys = Object.keys(posts);
    //     let displayedPosts = [];

    //     console.log(savedPostKeys[1]);
    //     console.log(postsKeys[1].title);

    //     for (let i = 0; i < savedPostKeys.length; i++) {
    //         const k = savedPostKeys[i];
    //         for(let postKey in postsKeys) {
    //             if(postKey === savedPostKeys[i].postId) {
    //                 const name = postKey.name;
    //                 const title = postKey.title;
    //                 const description = postKey.description;
    //                 const tag = postKey.tag;
    //                 const user = postKey.user;
    //                 let time = postKey.time;
    //                 if (time != null) {
    //                     time = time.substring(0, time.length - 3);
    //                 }
    //                 const category = postKey.category;

    //                 displayedPosts.push({
    //                     id: k,
    //                     name: name,
    //                     time: time,
    //                     title: title,
    //                     description: description,
    //                     tag: tag,
    //                     user: user,
    //                     category: category
    //                 });
    //             }
    //         }
    //     }

    //     displayedPosts.reverse();
    //     this.setState({
    //         displayedPosts: posts
    //     });
    // };

    render() {
        console.log(this.state.posts);
        console.log(this.state.savedPosts);

        return (
            <React.Fragment>
                <HeaderText text="GESPEICHERTE BEITRÄGE" />
                <div className="posts-container-saved-posts" id="post-container">
                    <div id="warnings"></div>
                    {/* {this.state.posts.map(post => {
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
                    })} */}
                </div>
                <Navigation />
            </React.Fragment>
        );
    }
}