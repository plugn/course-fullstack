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

		case 'DELETE_BOOK':
			// copy of books array
			const currentBookToDelete = [...state.books];
			const indexToDelete = currentBookToDelete.findIndex(function (book) {
				return book.id === action.payload.id;
			});
			if (-1 === indexToDelete) { return state; }

			// use slice to remove the book at the specified index
			return {
				books: [
					...currentBookToDelete.slice(0, indexToDelete),
					...currentBookToDelete.slice(indexToDelete + 1)
				]
			};
		break;

		case 'UPDATE_BOOK':
			// copy of books array
			const currentBookToUpdate = [...state.books];

			const indexToUpdate = currentBookToUpdate.findIndex(function (book) {
				return book.id === action.payload.id;
			});

			if (-1 === indexToUpdate) { return state; }

			const newBookToUpdate = {
				...currentBookToUpdate[indexToUpdate],
				title: action.payload.title
			};

			// use slice to remove the book at the specified index
			return {
				books: [
					...currentBookToUpdate.slice(0, indexToUpdate),
					newBookToUpdate,
					...currentBookToUpdate.slice(indexToUpdate + 1)
				]
			};
		break;
	}

	return state;
};

// STEP 1 create the store
const store = createStore(reducer);

store.subscribe(function () {
	console.log('current state is: ', store.getState().books);
	// console.log('current state is: ', store.getState().books.map((book)=>book.id));
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
});

store.dispatch({
	type: 'DELETE_BOOK',
	payload: {
		id: 1
	}
});
store.dispatch({
	type: 'UPDATE_BOOK',
	payload: {
		id: 2,
		title: 'make UI development rapid'
	}

});