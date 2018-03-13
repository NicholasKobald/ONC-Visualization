import React, {Component} from 'react';
import PropTypes from 'prop-types';

class DataPreview extends Component {
	
	componentWillReceiveProps(nextProps) {
        this.props = nextProps;
    }
	
 	render() {
		return (
			<div>
				<h1>Data Preview! - {this.props.section}</h1>
			</div>
		);
	}
}

DataPreview.propTypes = {
	section: PropTypes.string
}

export default DataPreview;