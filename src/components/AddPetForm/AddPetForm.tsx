import React, {ChangeEvent, useRef, useState} from 'react';
import {hashString} from "react-hash-string";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {connect} from "react-redux";
import {addPet, setSavedStatus} from "../../data/actions";
import {FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from "@mui/material";
import {FormElement} from "./AddPetForm.style";

// @ts-ignore
function AddPetForm({pets, dispatch}) {
	const nameInput = useRef<HTMLInputElement>(null);
	const typeInput = useRef<HTMLSelectElement>(null);
	const [sexChoice, setSexChoice] = useState<string|null>(null);
	const [currentName, setCurrentName] = useState<string>('');
	const [currentDob, setCurrentDob] = useState<Date|null>();
	const [lastCheckupDate, setLastCheckupDate] = useState<Date|null>();

	const handleNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
		setCurrentName(event.target.value);
	}

	const handleSexChoice = (event: any) => {
		setSexChoice(event.target.value);
	}

	const handleSubmit = (event: { preventDefault: () => void; }) => {
		event.preventDefault();

		// Get the field values using refs
		// Ref: https://www.designcise.com/web/tutorial/how-to-access-form-control-elements-in-the-onsubmit-event-handler-in-react
		const enteredPet = {
			id: hashString(nameInput?.current?.value),
			name: nameInput?.current?.value,
			type: typeInput?.current?.value,
			dob: currentDob?.toLocaleDateString(),
			sex: sexChoice,
			lastCheckup: lastCheckupDate?.toLocaleDateString()
		}

		// Use reducer to find any objects within the pet array that have the same ID generated from the name
		// Ref: https://stackoverflow.com/a/53971345
		let duplicates = [];
		if(pets) {
			duplicates = pets.reduce(function (dupes: any[], current: { id: number; }, index: any) {
				if (current.id === hashString(nameInput?.current?.value)) {
					dupes.push(index)
				}
				return dupes;
			}, [])
		}

		// If no duplicate was found for this pet name:
		if(duplicates.length === 0) {
			// Add the pet to state via redux
			dispatch(addPet(enteredPet));

			// Update the status
			dispatch(setSavedStatus(false));

			// Clear the form
			setCurrentName('');
			setCurrentDob(null);
			setSexChoice(null);
			setLastCheckupDate(null);
			// @ts-ignore
			nameInput.current.value = '';
		}
		else {
			console.error('A pet by this name has already been entered')
		}
	}

	return (
		<FormElement>
			<form onSubmit={handleSubmit}>
				<input type="text"
				       name="name"
				       placeholder="Name"
				       ref={nameInput}
				       onBlur={handleNameChange} />
				<label htmlFor="type">is a</label>
				<select id="type" name="type" ref={typeInput}>
					<option value="dog">Dog</option>
					<option value="cat">Cat</option>
				</select>
				<label htmlFor="dob">born on</label>
				<DatePicker id="dob"
				            placeholderText="Birthdate"
				            selected={currentDob}
				            showMonthDropdown
				            showYearDropdown
				            dateFormat="dd/MM/yyyy"
				            onChange={(date: any) => setCurrentDob(date)} />
				{currentName ?
					<FormControl component="fieldset">
						<FormLabel component="legend">{currentName} is a good</FormLabel>
						<RadioGroup row onChange={handleSexChoice}>
							<FormControlLabel value="male" control={<Radio />} label="Boy" checked={sexChoice === 'male'} />
							<FormControlLabel value="female" control={<Radio />} label="Girl" checked={sexChoice === 'female'} />
						</RadioGroup>
					</FormControl>
				: null }
				<label htmlFor="checkup">{currentName ? `${currentName}'s` : null} last checkup date</label>
				<DatePicker id="checkup"
				            placeholderText="Last checkup"
				            selected={lastCheckupDate}
				            showMonthDropdown
				            showYearDropdown
				            dateFormat="dd/MM/yyyy"
				            onChange={(date: any) => setLastCheckupDate(date)} />

				<button type="submit">Add pet</button>
			</form>
		</FormElement>
	)
}

const mapStateToProps = (state: { pets: any; }) => {
	return {
		pets: state.pets
	}
}

export default connect(mapStateToProps)(AddPetForm);