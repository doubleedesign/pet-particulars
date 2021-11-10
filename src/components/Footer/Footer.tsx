import React from 'react';
import {Col, Container, Row} from "react-grid-system";
import {FooterElement} from "./Footer.style";


export const Footer: React.FC = function() {

	return (
		<FooterElement>
			<Container>
				<Row>
					<Col sm={12}>
						<small>Developed by Leesa Ward. <a href="https://github.com/doubleedesign/pet-particulars" target="_blank">View on GitHub</a>.</small>
					</Col>
				</Row>
			</Container>
		</FooterElement>
	)
}

export default Footer;