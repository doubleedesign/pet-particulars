import styled from 'styled-components';
import {theme} from "../../Theme";

export const HeaderElement = styled.header`
	padding-top: ${theme.spacing.lg};
	padding-bottom: ${theme.spacing.lg};
	background: ${theme.colors.primary};
    width: 100%;
    flex-basis: 100%;
    max-width: 100%;
	align-self: flex-start;
	
	@media screen and (min-width:${theme.breakpoints.xl}) {
		padding-top: ${theme.spacing.xl};
		padding-bottom: ${theme.spacing.xl};
	}
	
	h1 {
		font-family: ${theme.fonts.headings};
		font-size: ${theme.fontSizes.xl};
		color: white;
	}
`