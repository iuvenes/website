import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-wrap: ${({ isPage }) => (isPage ? 'wrap-reverse' : 'wrap')};
	overflow: hidden;
`;

export const Content = styled.div`
	flex: 1 320px;
	max-width: 600px;
`;

export const Icons = styled.div`
	display: flex;
	flex: 1 400px;
	align-items: center;
	max-width: 500px;
	margin: 0 auto 2em;
	${({ theme }) => theme.mq.tabletMid} {
		padding: 0 2em;
	}
`;

export const Icon = styled.div`
	flex: 1;
`;

export const Img = styled.img`
	max-width: 100%;
	object-fit: cover;
`;
