import styled from 'styled-components';
import {theme} from "../../Theme";

export const PetCardElement = styled.li`
	width: 100%;
	flex-basis: 100%;
	max-width: 50%;
	box-sizing: border-box;
	padding-left: ${theme.spacing.sm};
	padding-right: ${theme.spacing.sm};
	margin-bottom: ${theme.spacing.md};
	
	@media screen and (min-width: ${theme.breakpoints.sm}) {
		width: 50%;
		flex-basis: 50%;
		max-width: 50%;
	}

    @media screen and (min-width: ${theme.breakpoints.lg}) {
        width: 33.33%;
        flex-basis: 33.33%;
        max-width: 33.33%;
    }
	
	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: nowrap;
		width: 100%;
		padding-bottom: ${theme.spacing.sm};
		border-bottom: 1px solid ${theme.colors.light};
		margin-bottom: ${theme.spacing.md};
		
		h3 {
			font-family: ${theme.fonts.headings};
		}
	}
`

export const Birthday = styled.div`
	
	p {
		margin-bottom: ${theme.spacing.sm};
		
		svg, strong {
			color: ${theme.colors.tertiary};
		}
		
		strong {
			font-weight: ${theme.fontWeights.bold};
		}
		
		span {
			display: block;
            font-size: ${theme.fontSizes.sm};
		}
		
		small {
			font-size: ${theme.fontSizes.xs};
		}
	}
`