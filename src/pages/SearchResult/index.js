import React from 'react';
import { Component } from 'react';
import Navigation from '../../components/Navigation';
import HeaderIcon from '../../components/HeaderIcon';
import LargeButton from '../../components/LargeButton';
import dataHandling from '../../services/DataHandling';
import Post from '../../components/Post';
import { Link } from 'react-router-dom';
import { history } from '../../App';
import './SearchResult.css';

export default class SearchResult extends Component {
    state = {
        category: this.props.match.params.category,
        tag: this.props.match.params.tag,
        posts: []
    }

    handleBack = event => {
        history.push('/search');
    }

    componentWillMount() {
        dataHandling.addDataChangeListener('posts', this.handlePostsDataChange);
    }

    handlePostsDataChange = data => {
        const postList = data.val();
        let posts = [];
        if (postList === null) {
            const container = document.getElementById('warnings');
            container.insertAdjacentHTML('beforeend', '<p> Es gibt noch keine Beiträge </p>');
        } else {
            const postKeys = Object.keys(postList);

            for (let i = 0; i < postKeys.length; i++) {
                const k = postKeys[i];
                const name = 'Max Mustermann';
                let time = postList[k].time;
                if (postList[k].time != null) {
                    time = time.substring(0, time.length - 3);
                }
                const title = postList[k].title;
                const description = postList[k].description;
                const tag = postList[k].tag;

                if (postList[k].category === this.state.category && postList[k].tag === this.state.tag)
                    posts.push({
                        id: k,
                        name: name,
                        time: time,
                        title: title,
                        description: description,
                        tag: tag
                    });
                }   
            }

            this.setState({
                posts: posts
            });


            if(posts.length === 0){
                const container = document.getElementById('warnings');
                container.insertAdjacentHTML('beforeend', '<p> Keine Posts mit diesen Eigenschaften gefunden! </p>');    
            }
        }
    

    handleSubmit = event => {
        history.push('/search');
    }

    handleHome = event => {
        history.push('/');
    }

    render() {
        return (
            <React.Fragment>
                <HeaderIcon text="SUCHERGEBNISSE" icon="back" onclick={this.handleBack}/>
                <div className="posts-container-search-result" id="post-container">
                    <div id="warnings"></div>
                    {this.state.posts.map(post => {
                        const path = '/post/' + post.id;
                        return (
                            <Link to={path} key={post.time}>
                                <Post
                                    theme={this.category}
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
                    <div className="button-container">
                        <div className="button-again">
                            <LargeButton
                                className="submit-button"
                                theme="light"
                                text="ERNEUT SUCHEN"
                                id="search-again-button"
                                onClick={this.handleSubmit}
                            />
                        </div>
                        <LargeButton
                            className="submit-button"
                            theme="light"
                            text="SCHLIESSEN"
                            id="close-button"
                            onClick={this.handleHome}
                        />
                    </div>
                </div>
                <Navigation />
            </React.Fragment>
        );
    }
}
