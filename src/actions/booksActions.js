// POST books
export function postBooks(books) {
	return {
		type: 'POST_BOOKS',
		payload: books
	}
}
