import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import reducers from './reducers/index'
import {addToCart} from './actions/cartActions'
import {postBooks, deleteBook, updateBook} from './actions/booksActions'
import BooksList from './components/pages/booksList'

import ExampleMap from './components/Map1'

// STEP 1 create the store
const middleware = applyMiddleware(logger);
const store = createStore(reducers, middleware);

render(
	<Provider store={store}>
		{/*<BooksList />*/}
		<ExampleMap/>
	</Provider>,
	document.getElementById('app')
);

// // STEP 2 create and dispatch actions
// store.dispatch(postBooks(
// 	[
// 		{
// 			id: 1,
// 			title: 'book title 1',
// 			description: 'book description 1',
// 			price: 33.33
// 		},
// 		{
// 			id: 2,
// 			title: 'book title 2',
// 			description: 'this is the book description 2',
// 			price: 50.33
// 		}
// 	]
// ));
//
// store.dispatch(postBooks(
// 	[{
// 		id: 15,
// 		title: 'Third',
// 		description: '3rd',
// 		price: 100
// 	}]
// ));
//
// store.dispatch(deleteBook(
// 	{id: 1}
// ));
//
// store.dispatch(updateBook(
// 	{
// 		id: 2,
// 		title: 'rapid UI'
// 	}
// ));
//
// // CART ACTIONS
// // ADD to CART 'ADD_TO_CART'
// store.dispatch(addToCart([{id: 2}]));
