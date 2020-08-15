import styled from 'styled-components';

export const TextWrapper = styled.div`
	max-width: ${({ theme }) => theme.value.contentWidth};
	margin: 0 auto;
	padding: 4em ${({ theme }) => theme.value.minMargin} 0;

	${({ theme }) => theme.mq.tabletMid} {
		padding-top: 5.75em;
	}
`;

export const StyledActiveSlide = styled.div`
	margin-bottom: 2em;
	${({ theme }) => theme.mq.tabletMid} {
		display: none;
	}
`;

export const StyledGallery = styled.div`
	display: none;
	${({ theme }) => theme.mq.tabletMid} {
		display: block;
	}
`;

export const ButtonWrapper = styled.div`
	max-width: ${({ theme }) => theme.value.contentWidth};
	margin: 0 auto;
	padding: 1em ${({ theme }) => theme.value.minMargin} 0;
	font-size: 0.85em;
	text-align: center;

	${({ theme }) => theme.mq.tabletMid} {
		padding: 1em 0;
	}
`;
