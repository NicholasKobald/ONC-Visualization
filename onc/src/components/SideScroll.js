import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./SideScroll.css";

class SideScroll extends Component {
	
	componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
	
 	render() {
		
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
			/*if (this.state[section].isOpen) {
				this_button = <div key={section} onClick={() => this.props.handle_change_page(section)} className="nav-button nav-button-selected"><p>{section}</p></div>
			} else {
				*/
			console.log(section_name);
			this_button = <div key={section_name} onClick={() => this.props.handle_change_sidebar(section_name)} className="side-button"><p>{section_name}</p></div>
			//}
			
			SideDropdowns.push(this_button);
		})
		
		return (
			<div className="side-area">
			{SideDropdowns}
			</div>
		);
	}
}

SideScroll.propTypes = {
	handle_change_sidebar: PropTypes.func,
}

export default SideScroll;