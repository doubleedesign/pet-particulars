import React, {useRef} from 'react';
import {hashString} from "react-hash-string";
import {connect} from "react-redux";
import {addPet} from "../../data/actions";

// @ts-ignore
function AddPetForm({pets, dispatch}) {
	const nameInput = useRef<HTMLInputElement>(null);
	const typeInput = useRef<HTMLInputElement>(null);

	const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();

		// Get the field values using refs
		// Ref: https://www.designcise.com/web/tutorial/how-to-access-form-control-elements-in-the-onsubmit-event-handler-in-react
		const enteredPet = {
			id: hashString(nameInput?.current?.value),
			name: nameInput?.current?.value,
			type: typeInput?.current?.value
		}


		// Use reducer to find any objects within the pet array that have the same ID generated from the name
		// Ref: https://stackoverflow.com/a/53971345
		let duplicates = pets.reduce(function(dupes: any[], current: { id: number; }, index: any) {
			if (current.id === hashString(nameInput?.current?.value)) {
				dupes.push(index)
			}
			return dupes;
		}, [])

		// Update state if no duplicate was found for this pet's name
		if(duplicates.length === 0) {
			dispatch(addPet(enteredPet));
		}
		else {
			console.error('A pet by this name has already been entered')
		}
	}


	return (
		<form onSubmit={handleSubmit}>
			<input type="text" name="name" ref={nameInput} />
			<input type="text" name="type" ref={typeInput} />
			<button type="submit">Add pet</button>
		</form>
	)
}

const mapStateToProps = (state: { pets: any; }) => {
	return {
		pets: state.pets
	}
}

export default connect(mapStateToProps)(AddPetForm);