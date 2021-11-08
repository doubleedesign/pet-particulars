import React from "react";
import {Container, Row, Col} from "react-grid-system";
import {HeaderElement} from "./Header.style";

export interface HeaderProps {
	title: string
}

export const Header: React.FC<HeaderProps> = function(props: {
	title: string
}) {

	return (
		<HeaderElement>
			<Container>
				<Row>
					<Col sm={12}>
						<h1>{props.title}</h1>
					</Col>
				</Row>
			</Container>
		</HeaderElement>
	)
}

export default Header;