import {connect} from 'react-redux';
import { useRef } from 'react';
import { hashString } from 'react-hash-string';
import { addPet } from "./data/actions";

function App({pets, dispatch}) {
	const nameInput = useRef(null);
	const typeInput = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();

		// Get the field values using refs
		// Ref: https://www.designcise.com/web/tutorial/how-to-access-form-control-elements-in-the-onsubmit-event-handler-in-react
		const enteredPet = {
			id: hashString(nameInput?.current.value),
			name: nameInput?.current.value,
			type: typeInput?.current.value
		}

		// Use reducer to find any objects within the pet array that have the same ID generated from the name
		// Ref: https://stackoverflow.com/a/53971345
		let duplicates = pets.reduce(function(dupes, current, index) {
			if (current.id === hashString(nameInput?.current.value)) {
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
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" name="name" ref={nameInput} />
				<input type="text" name="type" ref={typeInput} />
				<button type="submit">Add pet</button>
			</form>
			<ul>
				{pets.map((pet) => {
					return <li key={pet.id}>{pet.name} is a {pet.type}</li>
				})}
			</ul>
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		pets: state.pets
	}
}

export default connect(mapStateToProps)(App);