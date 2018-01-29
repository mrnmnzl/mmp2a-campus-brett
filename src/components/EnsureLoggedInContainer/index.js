import { Component } from 'react';
import * as firebase from 'firebase';

export let userId;

export default class EnsureLoggedInContainer extends Component {
    state = {
        isLoggedIn: false
    };

    componentDidMount() {
        console.log('hello');
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                this.setState({ isLoggedIn: true });
                userId = firebaseUser.uid;
            } else {
                this.setState({ isLoggedIn: false });
                this.props.history.push('/login');
            }
        });
    }

    render() {
        if (this.state.isLoggedIn === true) {
            return this.props.children;
        }
        return null;
    }
}

