import React, {Component} from 'react';
import PropTypes from 'prop-types';
import "./Navigation.css"

class Navigation extends Component {
	
	componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
	
 	render() {
		let navbuttons = ["DATA PREVIEW", "DATA SEARCH", "PLOTTING UTILITY", "SEATUBE", "MORE"]
		
		var NavButtons = [];
		navbuttons.forEach(button_name => {
			var this_button;
			if (this.props.current_page === button_name){
				this_button = <div key={button_name} onClick={() => this.props.handle_change_page(button_name)} className="nav-button nav-button-selected"><p>{button_name}</p></div>
			} else {
				this_button = <div key={button_name} onClick={() => this.props.handle_change_page(button_name)} className="nav-button"><p>{button_name}</p></div>
			}
			
			NavButtons.push(this_button);
		})
		
		return (
			<div className="navigation-header">
				<div className="button-area">
					<div className="project-name">
						<h2>OCEAN NETWORKS CANADA</h2>
					</div>
					{NavButtons}
				</div>
			</div>
		);
	}
}

Navigation.propTypes = {
	current_page: PropTypes.string,
	handle_change_page: PropTypes.func
}

export default Navigation;