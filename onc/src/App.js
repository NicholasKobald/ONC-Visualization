// This is the start main file to be looking at.

import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation.js";
import SideScroll from "./components/SideScroll.js";
import DataSearch from "./components/DataSearch.js";
import DataPreview from "./components/DataPreview.js"

class App extends Component {
	constructor() {
		super();
		this.state = {current_page: "DATA PREVIEW", current_section: "PACIFIC"};
	}
	
	change_page(next_page){
		console.log(next_page);
		this.setState({current_page: next_page});
	}
	
	change_sidebar(next_section) {
		console.log(next_section);
		// Using setState because it doesn't overwrite all the other states,
		// unline this.state = {...}
		this.setState({current_section: next_section});
	}
	
	render() {
		
		// We dynamically choose with "main page" to display.
		var current_view;
		if (this.state.current_page === "DATA PREVIEW") {
			// Passing in "section" here, which maps to "this.props.section"
			// inside of DataPreview.
			current_view = <DataPreview section={this.state.current_section}/>
		} else if (this.state.current_page === "DATA SEARCH") {
			current_view = <DataSearch section={this.state.current_section}/>
		} else {
			current_view = <p>{this.state.current_page} - {this.state.current_section}</p>
		}
		
		return (
			// You can only return 1 'parent` object in react, so everything gets
			// nested in a div.
			<div className="App">
			
				// Binding a function makes it execute in this (App.js) scope,
				// Not the child, but with parameters from the child.
				<Navigation current_page={this.state.current_page} handle_change_page={this.change_page.bind(this)}/>
				<div className="content-area">
					
					<SideScroll handle_change_sidebar={this.change_sidebar.bind(this)}/>
					<div className="main-content">
						// here we use the dynamically view from before!
						{current_view}
					</div>
				</div>
			</div>
		);
	}
}

	
// Other classes won't be able to see this class if it's not exported
// very easy mistake to make
export default App;
