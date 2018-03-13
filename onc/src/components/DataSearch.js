import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DataSearch extends Component {
	
	componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
	
 	render() {
		return (
			<div>
				<h1>Data Search! - {this.props.section}</h1>
			</div>
		);
	}
}

DataSearch.propTypes = {
	section: PropTypes.string
}

export default DataSearch;