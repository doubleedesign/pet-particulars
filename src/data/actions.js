// Actions are instructions to the reducer

// Using an action creator function, we call the action, and then return an object
export const addPet = (pet) => ({
	type: 'ADD_PET',
	payload: { pet }
})