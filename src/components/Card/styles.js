import styled from 'styled-components';

export const Wrapper = styled.article`
	display: grid;
	grid-template-rows: 190px 1fr;
	height: 100%;

	${({ theme }) => theme.mq.mobileMid} {
		grid-template-rows: 280px 1fr;
	}
`;

export const Body = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	align-items: flex-end;
	max-width: 400px;
	margin: 0 auto;
	padding: 1.5em ${({ theme }) => theme.value.minMargin} 0;
	text-align: center;
	white-space: pre-wrap;
`;

export const Title = styled.h3`
	width: 100%;
	margin: 0 0 1.5em;
	font-size: 1.15em;
	font-weight: 600;
	line-height: 1.4;
	text-transform: uppercase;
	white-space: pre-wrap;
`;

export const Text = styled.p`
	width: 100%;
	margin: 0 0 2em;
	font-size: 1em;
	font-weight: 400;
	line-height: 1.5;
`;
