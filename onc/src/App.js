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
		this.setState({current_section: next_section});
	}
	
	render() {
		var current_view;
		if (this.state.current_page === "DATA PREVIEW") {
			current_view = <DataPreview section={this.state.current_section}/>
		} else if (this.state.current_page === "DATA SEARCH") {
			current_view = <DataSearch section={this.state.current_section}/>
		} else {
			current_view = <p>{this.state.current_page} - {this.state.current_section}</p>
		}
		
		return (
			<div className="App">
				<Navigation current_page={this.state.current_page} handle_change_page={this.change_page.bind(this)}/>
				<div className="content-area">
					
					<SideScroll handle_change_sidebar={this.change_sidebar.bind(this)}/>
					<div className="main-content">
						{current_view}
					</div>
				</div>
			</div>
		);
	}
}

export default App;
