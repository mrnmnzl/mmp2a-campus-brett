import React from 'react';
import { Component } from 'react';
import HeaderIcon from '../../components/HeaderIcon';
import RadioCategory from '../../components/RadioCategory';
import Headline from '../../components/Headline';
import InputField from '../../components/InputField';
import InputArea from '../../components/InputArea';
import CategoryTag from '../../components/CategoryTag';
import './NewPost.css';

export default class NewPost extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderIcon text="NEUEN BEITRAG VERFASSEN" icon="close" />
                <form className="container-new-post">
                    <Headline text="KATEGORIE" />
                    <RadioCategory />
                    <Headline text="TITEL" />
                    <InputField placeholder="Titel..." />
                    <Headline text="BESCHREIBUNG" />
                    <InputArea placeholder="Beschreibung einfügen" />
                    <Headline text="BILD HINZUFÜGEN" />
                    <Headline text="TAGS" />
                    <div className="tags-container">
                        <CategoryTag text="werkzeug" />
                        <CategoryTag text="hilfe" />
                        <CategoryTag text="mitfahrgelegenheit" />
                        <CategoryTag text="lebensmittel" />
                        <CategoryTag text="kleidung" />
                        <CategoryTag text="unterhaltung" />
                        <CategoryTag text="putzen" />
                        <CategoryTag text="party" />
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
