import React from 'react';
import { Component } from 'react';
import Navigation from '../../components/Navigation';
import HeaderLogo from '../../components/HeaderLogo';
import CategoryBar from '../../components/CategoryBar';
import Post from '../../components/Post';
import './Home.css';

const tags1 = [
    "haushaltsgeräte"
]

const tags2 = [
    "suche", "schlüssel", "hilfe"
]

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderLogo theme="light"/>
                <CategoryBar />
                <div className="posts-container">
                    <Post name="Marion Menzl" time="23.11.17, 15:30" title="Neue Mikrowelle abzugeben!" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" tags={tags1} image="" color="find"/>
                    <Post name="Marion Menzl" time="23.11.17, 15:30" title="Neue Mikrowelle abzugeben!" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" tags={tags2} image="" color="find"/>
                    <Post name="Marion Menzl" time="23.11.17, 15:30" title="Neue Mikrowelle abzugeben!" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" tags={tags1} image="" color="find"/>
                    <Post name="Marion Menzl" time="23.11.17, 15:30" title="Neue Mikrowelle abzugeben!" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et" tags={tags1} image="" color="find"/>
                </div>
                <Navigation />
            </React.Fragment>
        );
    }
}