import {createStore} from 'redux'
import reducers from './reducers/index'
import {addToCart} from './actions/cartActions'
import {postBooks, deleteBook, updateBook} from './actions/booksActions'

// STEP 1 create the store
const store = createStore(reducers);

store.subscribe(function () {
	console.log('current state is: ', store.getState());
});

// STEP 2 create and dispatch actions
store.dispatch(postBooks(
	[
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
));

store.dispatch(postBooks(
	[{
		id: 15,
		title: 'Third',
		description: '3rd',
		price: 100
	}]
));

store.dispatch(deleteBook(
	{id: 1}
));

store.dispatch(updateBook(
	{
		id: 2,
		title: 'rapid UI'
	}
));

// CART ACTIONS
// ADD to CART 'ADD_TO_CART'
store.dispatch(addToCart([{id: 2}]));
