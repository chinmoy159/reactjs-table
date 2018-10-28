// example from
// https://code.tutsplus.com/tutorials/working-with-tables-in-react-part-one--cms-29682

import React, { Component } from 'react';
// import ReactStory from 'react-story'
import Table from './table.js';
import './App.css';

// to manually bind, do like this
// this.handleChange = this.handleChange.bind(this);

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data : [
				{id : 4, name : "A", value : 1},
				{id : 5, name : "B", value : 2},
				{id : 6, name : "C", value : 3},
			]
		};
	}
    render() {
        return (
            <div className="App">
				<Table data = {this.state.data} />
            </div>
        );
    }
}

export default App;

/**
* Stories in the app
class Story extends Component {
    render () {
        return (
            <ReactStory
                stories={[{
                    name: 'Story 1', component: () => (
                        <span>This is a React Story!</span>
                    )
                }, {
                    name: 'Story 2', component: () => (
                        <span>Hey look! Another story.</span>
                    )
                }, {
                    name: 'Story 3', component: () => (
                        <span>You get the idea :)</span>
                    )
                }]}
            />
        )
    }
}
*/