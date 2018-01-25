import React from 'react';
import { Component } from 'react';
import HeaderIcon from '../../components/HeaderIcon';
import RadioCategory from '../../components/RadioCategory';
import Headline from '../../components/Headline';
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
                    <Headline text="BESCHREIBUNG" />
                </form>
            </React.Fragment>
        );
    }
}
