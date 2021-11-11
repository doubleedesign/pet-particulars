import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { loadPets, setSavedStatus } from "./data/actions";
import {getDatabase, onValue, ref, set} from "firebase/database";
import firebaseApp from './data/firebase';
import { ScreenClassProvider, Container, Row, Col } from "react-grid-system";
import Header from "./components/Header/Header";
import PetGroup from "./components/PetGroup/PetGroup";
import AddPetForm from "./components/AddPetForm/AddPetForm";
import PetCard from "./components/PetCard/PetCard";
import {AppWrapper, InnerWrapper} from "./App.style";
import Footer from "./components/Footer/Footer";
import Message from "./components/Message/Message";
import {AiFillCheckCircle, TiWarning} from "react-icons/all";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

function App({pets, savedStatus, dispatch}) {
	const db = getDatabase(firebaseApp);
	const dbRef = ref(db, 'pets');
	const [messages, setMessages] = useState([]);

	// Function to get saved pets from firebase,
	// waiting until it returns a defined value before trying to load it into the redux store
	// Ref: https://bigcodenerd.org/realtime-database-firebase-promises-api/
	const getPets = () => {
		return new Promise((resolve, reject) => {
			const onError = (error) => {
				reject(error);
			}

			const onData = (snap) => {
				resolve(snap.val());
			}

			onValue(dbRef, onData, onError);
		})
	};

	// Set initial state in redux from Firebase data
	useEffect(() => {
		getPets()
			.then(response => {
				if(response.length > 0) {
					dispatch(loadPets(response));
				}
				else {
					dispatch(loadPets([]));
				}
			})
			.catch(error => {
				console.error(error);
				dispatch(loadPets([]));
			})
	}, []);

	// Save pets when button is clicked
	const savePets = () => {
		set(dbRef, pets)
			.then(response => {
				dispatch(setSavedStatus(true));
			})
			.catch(error => {
				console.error(error);
			});
	};

	useEffect(() => {
		if(pets.length > 0) {
			dayjs.extend(relativeTime);
			const today = dayjs();
			let newMessages = [];

			pets.map((pet) => {
				const checkup = dayjs(pet.lastCheckup, 'DD/MM/YYYY');
				const diff = today.diff(checkup, 'month');

				if(diff === 12) {
					newMessages.push(`${pet.name}'s checkup is due this month`);
				}
				else if(diff > 12) {
					newMessages.push(`${pet.name} is overdue for their checkup`);
				}

				//setMessages(messages => [...messages, newMessages]);
				setMessages(newMessages);
			})
		}
	}, [pets]);


	return (
		<AppWrapper>
			<ScreenClassProvider>
				<Header title="Pet Particulars"/>
				<main>
					<Container>
						<Row>
							<Col sm={12} lg={8}>
								<InnerWrapper>
									<h2>My Pets</h2>
									{messages ?
										messages.map((message) => {
											return (
												<Message type="warning" key={message}>
													<p><TiWarning/> {message}</p>
												</Message>
											)
										})
									: null }
									<PetGroup>
										{pets ? pets.map((pet) => {
											return <PetCard key={pet.id} data={pet}/>
										}) : null}
									</PetGroup>
									{savedStatus
										?
										<Message type="success">
											<span>
												<AiFillCheckCircle/>
												<p>Up-to-date</p>
											</span>
											<button disabled>Save pets</button>
										</Message>
										:
										<Message type="warning">
											<span>
												<TiWarning/>
												<p>You have unsaved changes</p>
											</span>
											<button onClick={savePets}>Save pets</button>
										</Message>
									}
								</InnerWrapper>
							</Col>
							<Col sm={12} lg={4}>
								<InnerWrapper>
									<h2>Add a Pet</h2>
									<AddPetForm/>
								</InnerWrapper>
							</Col>
						</Row>
					</Container>
				</main>
				<Footer/>
			</ScreenClassProvider>
		</AppWrapper>
	);
}

const mapStateToProps = (state) => {
	return {
		pets: state.pets,
		savedStatus: state.savedStatus
	}
}

export default connect(mapStateToProps)(App);