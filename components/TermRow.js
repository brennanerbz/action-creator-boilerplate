import React, { Component, PropTypes } from 'react';

export default class TermRow extends Component {
	render() {
		return(
			<div>
				<input/>
				<input/>
			</div>
		);
	}
}

TermRow.propTypes = {
	terms: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string.isRequired,
		word: PropTypes.string.isRequired,
		definition: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
		doc: PropTypes.number
	}).isRequired).isRequired,
	actions: React.PropTypes.object.isRequired
}