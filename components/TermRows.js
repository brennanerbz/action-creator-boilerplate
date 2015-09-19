import React, { Component, PropTypes } from 'react';
import TermRow from './TermRow';

export default class TermRows extends Component {
  render() {
    const { terms } = this.props;
    return (
      <ul>
        {terms.map(term =>
          <TermRow terms={terms} actions={actions}/>
        )}
      </ul>
    );
  }
}

TermRows.propTypes = {
  terms: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    word: PropTypes.string.isRequired,
    definition: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    doc: PropTypes.number
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
};