import React, { Component, PropTypes } from 'react';

export default class AddTerm extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onAddClick}>
          Add
        </button>
      </div>
    );
  }
}

AddTerm.propTypes = {
  onAddClick: PropTypes.func.isRequired
};