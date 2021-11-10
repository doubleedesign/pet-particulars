import {connect} from 'react-redux';
import {ScreenClassProvider, Container, Row, Col} from "react-grid-system";
import Header from "./components/Header/Header";
import PetGroup from "./components/PetGroup/PetGroup";
import AddPetForm from "./components/AddPetForm/AddPetForm";
import PetCard from "./components/PetCard/PetCard";
import {AppWrapper, InnerWrapper} from "./App.style";
import Footer from "./components/Footer/Footer";

function App({pets}) {

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
		pets: state.pets
	}
}

export default connect(mapStateToProps)(App);