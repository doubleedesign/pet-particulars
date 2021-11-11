import React from 'react';
import dayjs from 'dayjs';
import {InfoItem, PetCardElement} from "./PetCard.style";
import {FaBirthdayCake, FaCat, FaDog, FaUserNurse, IoFemaleOutline, IoMaleOutline} from "react-icons/all";
import {InnerWrapper} from "../../App.style";
const customParseFormat = require('dayjs/plugin/customParseFormat');
const relativeTime = require('dayjs/plugin/relativeTime');

export interface PetProps {
	data: {
		id: string,
		name: string,
		type: string,
		dob: string,
		sex: string,
		lastCheckup: string
	}
}
export const PetCard: React.FC<PetProps> = function(props: {
	data: {
		id: string,
		name: string,
		type: string,
		dob: string,
		sex: string,
		lastCheckup: string
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
			<InfoItem>
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
			</InfoItem>
		)
	}

	const ShowCheckup = () => {
		dayjs.extend(relativeTime);
		const today = dayjs();
		const checkup = dayjs(props.data.lastCheckup, 'DD/MM/YYYY');

		return (
			<InfoItem>
				<p>
					<span><FaUserNurse/>Last checkup: {props.data.lastCheckup}</span>
					<small>({dayjs(checkup).from(today)})</small>
				</p>
			</InfoItem>
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
				{props.data.lastCheckup ? <ShowCheckup/> : null}
			</InnerWrapper>
		</PetCardElement>
	)
}

export default PetCard;