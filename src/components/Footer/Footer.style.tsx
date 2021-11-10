import styled from 'styled-components';
import {theme} from "../../Theme";

export const FooterElement = styled.footer`
	padding-top: ${theme.spacing.md};
	padding-bottom: ${theme.spacing.md};
	background: ${theme.colors.dark};
	margin-top: auto;
	width: 100%;
	flex-basis: 100%;
	max-width: 100%;
	
	small {
		display: block;
		text-align: center;
		font-size: ${theme.fontSizes.xs};
		color: ${theme.colors.light};
		
		a {
            color: ${theme.colors.light};
			transition: color 0.3s ease;
			
			&:hover, &:focus, &:active {
				color: white;
			}
		}
	}
`