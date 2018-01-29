import React from 'react';
import { Component } from 'react';
import './RadioCategory.css';

export default class RadioCategory extends Component {
    render() {
        return (
            <React.Fragment>
                <input className="input-radio input-radio-search" type="radio" id="se" name="category" value="search" onChange={this.props.onChange}/>
                <label className="input-radio-label" htmlFor="se">
                    <span>
                        <span />
                    </span>Suchen
                </label>
                <input className="input-radio input-radio-find" type="radio" id="fi" name="category" value="offer" onChange={this.props.onChange}/>
                <label className="input-radio-label" htmlFor="fi">
                    <span>
                        <span />
                    </span>Bieten
                </label>
            </React.Fragment>
        );
    }
}
