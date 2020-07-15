import styled from 'styled-components';

export const TextWrapper = styled.div`
	max-width: ${({ theme }) => theme.value.contentWidth};
	margin: 0 auto;
	padding: 4em ${({ theme }) => theme.value.minMargin} 0;

	${({ theme }) => theme.mq.tabletMid} {
		padding-top: 5.75em;
	}
`;

export const CardsList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const CardItem = styled.li`
	display: flex;
	flex: 1 0 50%;
	min-width: 320px;
	background: black;
`;
