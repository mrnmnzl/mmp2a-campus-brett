import React from 'react';
import { Component } from 'react';
import Navigation from '../../components/Navigation';
import HeaderIcon from '../../components/HeaderIcon';
import Headline from '../../components/Headline';
import RadioCategory from '../../components/RadioCategory';
import CategoryTag from '../../components/CategoryTag';
import LargeButton from '../../components/LargeButton';
import { history } from '../../App';
import { userId } from '../../components/EnsureLoggedInContainer';
import { Link } from 'react-router-dom';
import './Search.css';

export default class Search extends Component {
    state = {
        tag: '',
        category: ''
    } 

    handleBack = () => {
        history.push('/');
    }

    handleCategory = event => {
        this.setState({
            category: event.target.value
        });
        console.log(event.target.value);
    }

    handleTag = value => {
        this.setState({
            tag: value
        });
        console.log(value);
    }

    handleSubmit = event => {
        //if form is not correct
        if (this.state.tag === '' || this.state.category === ''){
            const container = document.getElementById('warnings');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Bitte fülle das Formular ganz aus </p>');
        }

        const path = '/search/' + this.state.category + '/' + this.state.tag;
        history.push(path);
        console.log(path);
    }

    render() {
        return (
            <React.Fragment>
                <HeaderIcon text="SUCHE" icon="back" onclick={this.handleBack}/>
                <div className="container-new-post">
                    <Headline text="KATEGORIE" />
                    <div className="radio-container" onChange={this.handleCategory}>
                        <RadioCategory />
                    </div>
                    <Headline text="TAG" />
                    <div className="tags-container">
                        <CategoryTag text="werkzeug" onClick={this.handleTag} category={this.state.category}/>
                        <CategoryTag text="hilfe" onClick={this.handleTag} category={this.state.category}/>
                        <CategoryTag text="mitfahrgelegenheit" onClick={this.handleTag} category={this.state.category}/>
                        <CategoryTag text="lebensmittel" onClick={this.handleTag} category={this.state.category}/>
                        <CategoryTag text="kleidung" onClick={this.handleTag} category={this.state.category}/>
                        <CategoryTag text="unterhaltung" onClick={this.handleTag} category={this.state.category}/>
                        <CategoryTag text="putzen" onClick={this.handleTag} category={this.state.category}/>
                        <CategoryTag text="party" onClick={this.handleTag} category={this.state.category}/>
                    </div>
                    <div id="warnings"></div>
                    <div className="button-container">
                        <LargeButton text="SUCHEN" theme="light" onClick={this.handleSubmit}/>
                    </div>
                </div>
                <Navigation />
            </React.Fragment>
        );
    }
}
