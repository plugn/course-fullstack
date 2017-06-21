import { createStore } from 'redux'
import reducers from './reducers/index'

// STEP 1 create the store
const store = createStore(reducers);

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