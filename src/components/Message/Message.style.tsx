import styled from 'styled-components';
import {theme} from "../../Theme";

export const MessageCard = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-end;
	align-items: center;
    font-weight: ${theme.fontWeights.bold};
	color: ${(props: { type:string }) => {
        // @ts-ignore
        return theme.colors[props.type];
    }};
	
	svg {
		margin-right: ${theme.spacing.xs};
	}
	
	button {
		margin-left: ${theme.spacing.md};
		border: 0;
		font-size: ${theme.fontSizes.md};
		font-family: ${theme.fonts.body};
		padding: ${theme.spacing.sm};
		background: ${theme.colors.tertiary};
		color: white;
		font-weight: ${theme.fontWeights.bold};
		cursor: pointer;
		transition: all 0.3s ease;
		
		&:hover, &:focus, &:active {
			background: ${theme.colors.tertiaryDark};
		}
		
		&[disabled] {
			background: #EEE;
			pointer-events: none;
			cursor: not-allowed;
		}
	}
`;