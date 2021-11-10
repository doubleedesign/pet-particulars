// Reducer typically contains two things: The initial state and the reducer itself

// The initial state object
const initialState = {
	pets: [],
	savedStatus: true
}

// Reducer performs some logic on the dispatched action
const reducer = (state = initialState, action) => {
	switch(action.type) {
		case 'LOAD_PETS': {
			return {
				...state,
				pets: action.payload.pets
			}
		}
		case 'ADD_PET': {
			return {
				...state,
				pets: [...state.pets, action.payload.pet]
			}
		}
		case 'SAVE_STATUS': {
			return {
				pets: state.pets,
				savedStatus: action.payload.status
			}
		}
		default: {
			return state;
		}
	}
}

export default reducer;