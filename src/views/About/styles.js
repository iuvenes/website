import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: ${({ theme }) => theme.value.contentWidth};
	margin: 0 auto;
	padding: 4em ${({ theme }) => theme.value.minMargin};

	${({ theme }) => theme.mq.tabletMid} {
		display: grid;
		grid-auto-columns: 1fr;
		grid-column-gap: 2em;
	}
`;

export const QuoteWrapper = styled.div`
	grid-column: 2;
	grid-row: 1/4;
	align-self: center;
	margin-bottom: 1em;
	font-size: 1em;
	text-align: right;

	${({ theme }) => theme.mq.tabletMid} {
		font-size: 1.5em;
	}

	${({ theme }) => theme.mq.tabletBig} {
		font-size: 1.8em;
	}
`;
