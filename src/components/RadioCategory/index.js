import React from 'react';
import { Component } from 'react';

export default class RadioCategory extends Component {
    render() {
        return (
            <React.Fragment>
                <input class="input-radio" type="radio" id="se" name="category" value="search"/>
                <label class="input-radio-label" for="se"><span><span></span></span>Suchen</label> 
                <input class="input-radio"type="radio" id="fi" name="category" value="find"/>
                <label class="input-radio-label" for="fi"><span><span></span></span>Finden</label>
            </React.Fragment>
        );
    }
}
