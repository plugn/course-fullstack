// BOOKS REDUCERS
// export function booksReducers (state = {books:[]}, action) {
export function booksReducers (state = {
	books: [{
			id: 1,
			title: 'title 1',
			description: 'book description 1',
			price: 33.00
		},
		{
			id: 2,
			title: 'book title 2',
			description: 'this is the book description 2',
			price: 55.00
		}]
	}, action) {

	switch (action.type) {
		case 'GET_BOOKS':
			// return state.books.concat(action.payload);
			return {
				books: [...state, ...state.books]
			};
			break;

		case 'POST_BOOKS':
			// return state.books.concat(action.payload);
			return {
				books: [...state.books, ...action.payload]
			};
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
