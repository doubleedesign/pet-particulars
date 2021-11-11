import { useEffect } from 'react';
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

function App({pets, savedStatus, dispatch}) {
	const db = getDatabase(firebaseApp);
	const dbRef = ref(db, 'pets');

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
				dispatch(loadPets(response));
			})
			.catch(error => {
				console.error(error);
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
									<PetGroup>
										{pets.map((pet) => {
											return <PetCard key={pet.id} data={pet}/>
										})}
									</PetGroup>
									{savedStatus
										?
										<Message type="success">
											<AiFillCheckCircle/>
											<p>Up-to-date</p>
											<button disabled>Save pets</button>
										</Message>
										:
										<Message type="warning">
											<TiWarning/>
											<p>You have unsaved changes</p>
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