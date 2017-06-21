import { combineReducers } from 'redux'
import { cartReducers } from './cartReducers'
import { booksReducers } from './booksReducers'

export default combineReducers({
	books: booksReducers,
	cart: cartReducers
});