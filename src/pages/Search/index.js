import React from 'react';
import { Component } from 'react';
import HeaderIcon from '../../components/HeaderIcon';
import Headline from '../../components/Headline';
import RadioCategory from '../../components/RadioCategory';
import CategoryTag from '../../components/CategoryTag';
import LargeButton from '../../components/LargeButton';
import { history } from '../../App';
import { Link } from 'react-router-dom';
import './Search.css';

export default class Search extends Component {
    state = {
        tag: '',
        category: ''
    };

    handleBack = () => {
        history.push('/');
    };

    handleCategory = event => {
        this.setState({
            category: event.target.value
        });

        document.getElementById('tags-container-search').style.display = 'flex';
    };

    handleTag = value => {
        this.setState({
            tag: value
        });
    };

    handleSubmit = value => {
        //if form is not correct
        const tag = this.state.tag;
        const category = this.state.category;

        if (tag === '' || category === '') {
            const container = document.getElementById('warnings');
            while (container.firstChild) {
                container.removeChild(container.firstChild);
            }
            container.insertAdjacentHTML('beforeend', '<p> Bitte fülle das Formular ganz aus </p>');
        } else {
            const path = '/search/' + category + '/' + tag;
            history.push(path);
            console.log(path);
        }
    };

    render() {
        return (
            <React.Fragment>
                <Link to="/">
                    <HeaderIcon text="SUCHE" icon="back" onclick={this.handleBack} />
                </Link>
                <div className="container-search">
                    <Headline text="KATEGORIE" />
                    <div className="radio-container" onChange={this.handleCategory}>
                        <RadioCategory />
                    </div>
                    <Headline text="TAG" />
                    <div className="tags-container-search" id="tags-container-search">
                        <CategoryTag id="tag-werkzeug" text="werkzeug" onClick={this.handleTag} />
                        <CategoryTag id="tag-hilfe" text="hilfe" onClick={this.handleTag} />
                        <CategoryTag id="tag-mitfahrgelegenheit" text="mitfahrgelegenheit" onClick={this.handleTag} />
                        <CategoryTag id="tag-lebensmittel" text="lebensmittel" onClick={this.handleTag} />
                        <CategoryTag id="tag-kleidung" text="kleidung" onClick={this.handleTag} />
                        <CategoryTag id="tag-kleidung" text="kleidung" onClick={this.handleTag} />
                        <CategoryTag id="tag-unternehmung" text="unternehmung" onClick={this.handleTag} />
                        <CategoryTag id="tag-unterhaltung" text="unterhaltung" onClick={this.handleTag} />
                        <CategoryTag id="tag-haushaltsgeräte" text="haushaltsgeräte" onClick={this.handleTag} />
                        <CategoryTag id="tag-party" text="party" onClick={this.handleTag} />
                        <CategoryTag id="tag-pc-problem" text="pc-problem" onClick={this.handleTag} />
                    </div>
                    <div id="warnings" />
                    <div className="button-container-search">
                        <LargeButton
                            className="search-button"
                            text="SUCHEN"
                            theme="light"
                            onClick={this.handleSubmit}
                            id="search-button"
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
