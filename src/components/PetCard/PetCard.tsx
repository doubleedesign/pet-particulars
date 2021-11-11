import React from 'react';
import dayjs from 'dayjs';
import {Birthday, PetCardElement} from "./PetCard.style";
import {FaBirthdayCake, FaCat, FaDog, IoFemaleOutline, IoMaleOutline} from "react-icons/all";
import {InnerWrapper} from "../../App.style";
const customParseFormat = require('dayjs/plugin/customParseFormat')

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
		dayjs.extend(customParseFormat);
		const today = dayjs();
		const dob = dayjs(props.data.dob, 'DD/MM/YYYY');
		const years = today.diff(dob, 'year');
		const months = today.diff(dob, 'month') - (years * 12);
		const birthday = dayjs(dob).format('D MMMM');
		const bornYear = dayjs(dob).format('YYYY');

		return (
			<Birthday>
				<p><FaBirthdayCake/> <strong>{birthday}</strong></p>
				<p>
					<span>
						{years > 1 ? `${years} years ` : null}
						{years === 1 ? `${years} year` : null}
						{months > 1 ? `${months} months ` : null}
						{months === 1 ? `${months} month ` : null}
						old
						&nbsp;<small>(born {bornYear})</small>
					</span>
				</p>
			</Birthday>
		)
	}

	return (
		<PetCardElement>
			<InnerWrapper>
				<header>
					<h3>{props.data.name}</h3>
					<div>
						{props.data.type === 'cat' ? <FaCat/> : <FaDog/>}
						{props.data.sex === 'female' ? <IoFemaleOutline/> : <IoMaleOutline/>}
					</div>
				</header>
				{props.data.dob ? <ShowAge/> : null}
			</InnerWrapper>
		</PetCardElement>
	)
}

export default PetCard;