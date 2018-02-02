import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import HomeSearch from './pages/HomeSearch';
import HomeOffer from './pages/HomeOffer'
import Profile from './pages/Profile';
import SavedPosts from './pages/SavedPosts';
import Messenger from './pages/Messenger';
// import MessengerRedirect from './pages/MessengerRedirect';
import Login from './pages/Login';
import Register from './pages/Register';
import NewPost from './pages/NewPost';
import EnsureLoggedInContainer from './components/EnsureLoggedInContainer';
import Search from './pages/Search';
import Chatroom from './pages/Chatroom';
import FakeChatroom from './pages/FakeChatroom';
import EditName from './pages/EditName';
import PostDetail from './pages/PostDetail';
import SearchResult from './pages/SearchResult/index';
// import NotFound404 from './pages/NotFound404';
import './App.css';

export const history = createBrowserHistory();

class App extends Component {
    render() {
        return (
            <Router history={history}>
                <React.Fragment>
                    <EnsureLoggedInContainer history={history}>
                        <Route exact path="/" component={HomeSearch} />
                        <Route path="/offer" component={HomeOffer} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/saved-posts" component={SavedPosts} />
                        <Route exact path="/messenger" component={Messenger} />
                        <Route path="/new-post" component={NewPost} />
                        <Route exact path="/search" component={Search} />
                        <Route exact path="/chat" component={Chatroom} />
                        <Route exact path="/chatfake/:userID" component={FakeChatroom} />
                        <Route path="/chat/:userId" component={Chatroom} />
                        <Route path="/edit-name" component={EditName} />
                        <Route path="/post/:id" component={PostDetail} />
                        <Route path="/search/:category/:tag" component={SearchResult} />
                        {/* <Route path="/404" component={NotFound404} /> */}
                    </EnsureLoggedInContainer>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
