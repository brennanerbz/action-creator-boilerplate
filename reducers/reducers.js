import { combineReducers } from 'redux';
import { ADD_TERM, EDIT_TERM } from '../actions/actions';
import _ from 'lodash';

function terms(state = [], action) {
  switch (action.type) {
  case ADD_TERM:
    return [...state, {
 	  id: _.uniqueId('term'),
      word: '',
      definition: '',
      completed: false,
      doc: Date.now()
    }];
  case EDIT_TERM:
  	return state.map(term => term.id === action.id ?
  		Object.assign({}, term, {word: action.word, definition: action.definition}) : 
  		term);
  default:
    return state;
  }
}

const createTerms = combineReducers({
  terms
});

export default createTerms;

