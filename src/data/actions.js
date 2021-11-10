// Actions are instructions to the reducer

// Using an action creator function, we call the action, and then return an object
export const loadPets = (pets) => {
	return({
		type: 'LOAD_PETS',
		payload: {pets}
	});
}

export const addPet = (pet) => {
	return ({
		type: 'ADD_PET',
		payload: {pet}
	});
}

export const setSavedStatus = (status) => {
	return ({
		type: 'SAVE_STATUS',
		payload: {status: status}
	});
}