import { createStore } from 'redux';

// STEP 3 define reducers
const reducer = function (state = {books:[]}, action) {
console.log('action.payload', action.payload);

	switch (action.type) {
		case 'POST_BOOK':
			// return state.books.concat(action.payload);
			let newState = {
				books: [...state.books, ...action.payload]
			};
			console.log('new', newState);
			return newState;
			break;
	}

	return state;
};

// STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function () {
	console.log('current state is: ', store.getState());
});

// STEP 2 create and dispatch actions
store.dispatch({
	type: 'POST_BOOK',
	payload: [
		{
			id: 1,
			title: 'book title 1',
			description: 'book description 1',
			price: 33.33
		},
		{
			id: 2,
			title: 'book title 2',
			description: 'this is the book description 2',
			price: 50.33
		}
	]
});

store.dispatch({
	type: 'POST_BOOK',
	payload: [{
		id: 15,
		title: 'Third',
		description: '3rd',
		price: 100
	}]
})