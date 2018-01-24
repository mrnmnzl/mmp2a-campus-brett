import React from 'react';
import { Component } from 'react';
import HeaderIcon from '../../components/HeaderIcon';
import RadioCategory from '../../components/RadioCategory';


export default class NewPost extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderIcon text="NEUEN BEITRAG VERFASSEN" icon="close"/>
                <form className="container-new-post">
                    <RadioCategory/>
                </form>
            </React.Fragment>
        );
    }
}