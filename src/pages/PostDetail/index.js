import React from 'react';
import { Component } from 'react';
import * as firebase from 'firebase';
import Navigation from '../../components/Navigation';
import HeaderIcon from '../../components/HeaderIcon';
import LargeButton from '../../components/LargeButton';
import SmallButton from '../../components/SmallButton';
import { history } from '../../App';
import './PostDetail.css';

export default class PostDetail extends Component {
    state = {
        id: '',
        name: '',
        time: '',
        title: '',
        description: '',
        tag: ''
    };

    componentWillMount() {
        const id = this.props.match.params.id;
        firebase
            .database()
            .ref('/posts/' + id)
            .once('value')
            .then(snapshot => {
                this.setState({
                    id: id,
                    name: snapshot.val().name,
                    title: snapshot.val().title,
                    time: snapshot.val().time,
                    tag: snapshot.val().tag,
                    description: snapshot.val().description
                });

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
                    <p className="detail-post-name">Von {this.state.name}</p>
                    <p className="detail-post-title">{this.state.title}</p>
                    <p className="detail-post-description">{this.state.description}</p>
                    <span className="tag">{this.state.tag}</span>
                    <div className="detail-post-button-container">
                        <LargeButton text="EINE NACHRICHT SCHREIBEN" theme="light" />
                        <SmallButton text="Beitrag speichern" />
                    </div>
                </div>
                <Navigation />
            </React.Fragment>
        );
    }
}
