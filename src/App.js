import {connect} from 'react-redux';
import {ScreenClassProvider, Container, Row, Col} from "react-grid-system";
import Header from "./components/Header/Header";
import PetGroup from "./components/PetGroup/PetGroup";
import AddPetForm from "./components/AddPetForm/AddPetForm";
import PetCard from "./components/PetCard/PetCard";

function App({pets}) {

	return (
		<ScreenClassProvider>
			<Header title="Pet Particulars"/>
			<main>
				<Container>
					<Row>
						<Col sm={12} lg={8}>
							<h2>My Pets</h2>
							<PetGroup>
								{pets.map((pet) => {
									return <PetCard key={pet.id} data={pet}/>
								})}
							</PetGroup>
						</Col>
						<Col sm={12} lg={4}>
							<h2>Add a Pet</h2>
							<AddPetForm/>
						</Col>
					</Row>
				</Container>
			</main>
			<footer>
				<Container>
					<Row>
						<Col sm={12}>
							<small>Developed by Leesa Ward.</small>
						</Col>
					</Row>
				</Container>
			</footer>
		</ScreenClassProvider>
	);
}

const mapStateToProps = (state) => {
	return {
		pets: state.pets
	}
}

export default connect(mapStateToProps)(App);