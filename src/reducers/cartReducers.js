export function cartReducers(state={cart:[]}, action) {
	// console.log('cartRecucers() action', action);
	
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				cart: [...state, ...action.payload]
			};
		break;
	}

	return state;
}