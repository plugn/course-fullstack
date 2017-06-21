// POST books
export function getBooks() {
	return {
		type: 'GET_BOOKS'
	}
}

export function postBooks(books) {
	return {
		type: 'POST_BOOKS',
		payload: books
	}
}

export function deleteBook(payload) {
	return {
		type: 'DELETE_BOOK',
		payload: payload
	}
}

export function updateBook(payload) {
	return {
		type: 'UPDATE_BOOK',
		payload: payload
	}
}