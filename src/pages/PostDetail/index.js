import React from 'react';
import { Component } from 'react';
import * as firebase from 'firebase';
import Navigation from '../../components/Navigation';
import HeaderIcon from '../../components/HeaderIcon';
import { history } from '../../App';
import './PostDetail.css';

export default class PostDetail extends Component {
    state = {
        id: "",
        name: "",
        time: "",
        title: "",
        description: "",
        tag: ""
    }
    componentWillMount() {
        const id = this.props.match.params.id;
        firebase.database().ref('/posts/' + id).once('value').then((snapshot) => {
            this.setState({
                id: id,
                name: "Max Mustermann",
                title: snapshot.val().title,
                time: snapshot.val().time,
                tag: snapshot.val().tag,
                description: snapshot.val().description
            })

            console.log(this.state.time);
        });
    }

    handleGoBack = () => {
        history.goBack();
    };

    render() {
        return (
            <React.Fragment>
                <HeaderIcon icon="back" text="DETAILANSICHT" onClick={this.handleGoBack} />
                <div className="detail-post-container">
                    <p>Von {this.state.name}</p>
                    <p>{this.state.title}</p>
                    <p>{this.state.description}</p>
                </div>
                <Navigation />
            </React.Fragment>
        );
    }
}
