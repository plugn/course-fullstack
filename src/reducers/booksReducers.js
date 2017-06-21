// BOOKS REDUCERS
export function booksReducers (state = {books:[]}, action) {
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
}
