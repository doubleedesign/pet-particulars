import styled from 'styled-components';
import {InnerWrapper} from "../../App.style";
import {theme} from "../../Theme";

export const PetGroupElement = styled.ul`
	padding-top: ${theme.spacing.sm};
	margin-left: -${theme.spacing.sm};
	margin-right: -${theme.spacing.sm};
	margin-top: ${theme.spacing.md};
	display: flex;
	flex-wrap: wrap;
	align-items: flex-start;
	justify-content: flex-start;
	
	${InnerWrapper} {
		width: 100%;
		display: block;
	}
`