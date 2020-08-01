import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: ${({ theme }) => theme.value.contentWidth};
	margin: 0 auto;
	padding: 4em ${({ theme }) => theme.value.minMargin} 2em;
	${({ theme }) => theme.mq.tabletMid} {
		text-align: center;
	}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	${({ theme }) => theme.mq.tabletMid} {
		flex-direction: column-reverse;
	}
`;

export const StyledSub = styled.h3`
	margin-bottom: 0.35em;
`;

export const Icon = styled.img`
	align-self: center;
	max-width: 250px;
	margin: 0 0 1em;
`;

export const ButtonList = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;
