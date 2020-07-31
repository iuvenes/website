import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: ${({ theme }) => theme.value.contentWidth};
	margin: 0 auto;
	padding: 4em ${({ theme }) => theme.value.minMargin};
`;

export const Quote = styled.h3`
	margin: 0 auto 2em;
	font-size: 0.75em;
	font-weight: 400;
	line-height: 1.35;
	text-align: center;

	${({ theme }) => theme.mq.tabletMid} {
		display: none;
	}
`;
