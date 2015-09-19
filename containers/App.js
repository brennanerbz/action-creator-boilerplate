import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TermActions from '../actions/actions';
import AddTerm from '../components/AddTerm';
import TermRows from '../components/TermRows';

class App extends Component {
  render() {
    const { terms, dispatch } = this.props;
    const actions = bindActionCreators(TermActions, dispatch)
    return (
      <div>
        <AddTerm onAddClick={actions.addTerm} />
        <TermRows terms={terms} actions={actions}/>
      </div>
    );
  }
}

App.propTypes = {
  terms: PropTypes.arrayOf(PropTypes.shape({
  	id: PropTypes.string.isRequired,
  	word: PropTypes.string.isRequired,
  	definition: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    doc: PropTypes.number
  }))
};

function mapStateToProps(state) {
  return {
    terms: state.terms
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(App);