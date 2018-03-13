import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./SideScroll.css";

class SideScroll extends Component {
	
	// we need this function to receive updates, otherwise it will not change.
	componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
	
 	render() {
		
		// "sections" could be pulled from a server later
		
		/*
		let sections = {
			"PACIFIC": [
				"British Columbia North Coast",
				"Northeast Pacific Ocean",
				"Salish Sea",
				"Vancouver Island"
			],
			"ARCTIC": [],
			"ATLANTIC": [],
			"MOBILE - PLATFORM": [],
		};*/
		let sections = ["PACIFIC", "ARCTIC", "ATLANTIC", "MOBILE - PLATFORM"];
		
		var SideDropdowns = [];
		sections.forEach(section_name => {
			var this_button;
			// Later we could change what we display based on if it's 'open' or
			// 'closed', etc.
			console.log(section_name);
			// Every react element needs a unique 'key', we just use the section name
			// so react can keep track of it, since it only re-renders updated components
			// Also, using 'class' doesn't work, so it's 'className' instead, but they
			// still map to CSS classes, from imported files (see above)
			// Here we use the function we passed in.  This will be executed in "app.js"
			// with the parameter `section_name` from the child.
			this_button = <div key={section_name} onClick={() => this.props.handle_change_sidebar(section_name)} className="side-button"><p>{section_name}</p></div>
			
			SideDropdowns.push(this_button);
		})
		
		return (
			// Because we're only allowed to return 1 parent element, we wrap it in a div.
			<div className="side-area">
			{SideDropdowns}
			</div>
		);
	}
}

// not required, but sets an interface for inputs to this class
SideScroll.propTypes = {
	handle_change_sidebar: PropTypes.func,
}

export default SideScroll;