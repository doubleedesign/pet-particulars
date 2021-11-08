import React from 'react';
import {PetCardElement} from "./PetCard.style";
import {FaCat, FaDog, IoFemaleOutline, IoMaleOutline} from "react-icons/all";

export interface PetProps {
	data: {
		id: string,
		name: string,
		type: string,
		dob: string,
		sex: string
	}
}
export const PetCard: React.FC<PetProps> = function(props: {
	data: {
		id: string,
		name: string,
		type: string,
		dob: string,
		sex: string
	}
}) {

	const ShowAge = () => {
		const today = new Date();

		return (
			<>
			</>
		)
	}


	return (
		<PetCardElement>
			<h3>{props.data.name}</h3>
			{props.data.type === 'cat' ? <FaCat/> : <FaDog/>}
			{props.data.sex === 'female' ? <IoFemaleOutline/> : <IoMaleOutline/>}
			{props.data.dob ? <ShowAge/> : null}
		</PetCardElement>
	)
}

export default PetCard;