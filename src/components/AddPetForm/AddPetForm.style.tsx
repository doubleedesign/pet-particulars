import styled from 'styled-components';
import {theme} from "../../Theme";

export const FormElement = styled.div`
	
	input[type=text],
	select {
		width: 100%;
		border-radius: 0;
		font-size: ${theme.fontSizes.md};
		padding: ${theme.spacing.sm};
		box-sizing: border-box;
		border: 1px solid ${theme.colors.dark};
		background: white;
		font-family: ${theme.fonts.body};
		margin-bottom: ${theme.spacing.sm};
	}
	
	button[type=submit] {
		width: 100%;
		display: block;
        border: 0;
        appearance: none;
		font-family: ${theme.fonts.headings};
		font-size: ${theme.fontSizes.md};
		background: ${theme.colors.secondary};
		color: white;
		padding: ${theme.spacing.md};
		cursor: pointer;
		transition: all 0.3s ease;
		
		&:hover, &:focus, &:active {
			background: ${theme.colors.secondaryDark};
		}
	}
`