import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import SavedPosts from './pages/SavedPosts';
import Messenger from './pages/Messenger';
import Login from './pages/Login';
import Register from './pages/Register';

class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    <Route exact path="/" component={Home} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/saved-posts" component={SavedPosts} />
                    <Route path="/messenger" component={Messenger} />
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
