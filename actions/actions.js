export const ADD_TERM = 'ADD_TERM';
export const EDIT_TERM = 'EDIT_TERM';

export function addTerm() {
	return { type: ADD_TERM };
}

export function editTerm(id, word, def) {
	return { type: EDIT_TERM, id, word, def}
}