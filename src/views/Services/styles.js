import styled from 'styled-components';

export const CardList = styled.ul`
	display: flex;
	flex-wrap: wrap;
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const CardItem = styled.li`
	flex: 1 0 300px;
	background: ${({ theme }) => theme.color.secondary};
	color: ${({ theme }) => theme.color.bright};

	:nth-child(even) {
		background: ${({ theme }) => theme.color.primary};
	}
`;
