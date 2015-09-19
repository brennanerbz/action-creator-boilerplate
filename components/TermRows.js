import React, { Component, PropTypes } from 'react';
import TermRow from './TermRow';

export default class TermRows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      def: ''
    }
  }
  onWord = (e) => {
    e.preventDefault();
    const word = e.target.value;
    this.setState({
      word: word
    });
  }

  onDef = (e) => {
    e.preventDefault();
    const def = e.target.value;
    this.setState({
      def: def
    });
  }

  submitTerm(id) {
    const word = this.state.word;
    const def = this.state.def;
    console.log(id + word + def)
  }

  render() {
    const { terms } = this.props;
    return (
      <ul>
        {terms.map(term =>
          <div key={term.id}>
            <input
              onChange={this.onWord}
              placeholder={term.id}/>
            <input 
              onChange={this.onDef}
              placeholder="Definition"/>
            <button
              onClick={this.submitTerm.bind(this, term.id)}>
              Save
            </button>
          </div>
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