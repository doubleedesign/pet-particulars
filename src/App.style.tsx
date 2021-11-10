import styled from 'styled-components';
import {theme} from "./Theme";

export const AppWrapper = styled.div`
	font-family: ${theme.fonts.body};
	background: ${theme.colors.primary};
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	
	main {
        width: 100%;
        flex-basis: 100%;
        max-width: 100%;
		margin-bottom: ${theme.spacing.lg};
	}
`

export const InnerWrapper = styled.div`
	background: white;
	box-sizing: border-box;
	padding: ${theme.spacing.md};
	box-shadow: ${theme.boxShadows.sm};
    margin-bottom: ${theme.spacing.lg};
	
	@media screen and (min-width:${theme.breakpoints.lg}) {
		margin: 0;
		height: 100%;
	}
	
	h2 {
		font-family: ${theme.fonts.headings};
		font-size: ${theme.fontSizes.lg};
		color: ${theme.colors.secondary};
		margin-bottom: ${theme.spacing.md};
	}
`