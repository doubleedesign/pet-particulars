// Reducer typically contains two things: The initial state and the reducer itself

// The initial state object
const initialState = {
	pets: []
}

// Reducer performs some logic on the dispatched action
const reducer = (state = initialState, action) => {
	switch(action.type) {
		default: return state;
	}
}

export default reducer;