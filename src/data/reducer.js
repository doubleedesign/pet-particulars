// Reducer typically contains two things: The initial state and the reducer itself

// The initial state object
const initialState = {
	pets: []
}

// Reducer performs some logic on the dispatched action
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'ADD_PET': {
			return {...state, pets: [...state.pets, action.payload.pet]}
		}
		default: {
			return state;
		}
	}
}

export default reducer;