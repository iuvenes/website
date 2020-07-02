import styled from 'styled-components';

export const Wrapper = styled.header`
	position: fixed;
	z-index: 1000;
	top: 0;
	right: 0;
	left: 0;
	max-width: ${({ theme }) => theme.value.maxWidth};
	margin: 0 auto;
	background: ${({ theme }) => theme.color.navbar};
	${({ theme }) => theme.mq.tabletMid} {
		background: ${({ theme }) => theme.color.navbarTrnsp};
	}
`;

export const Nav = styled.nav`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.value.contentWidth};
	margin: 0 auto;
	padding: 1rem ${({ theme }) => theme.value.minMargin};
`;

export const LogoWrapper = styled.div`
	display: flex;
	flex: 1 0 auto;
	margin-right: 2em;
`;

export const StyledMenu = styled.div`
	flex: 1 3 auto;
`;

export const StyledBurger = styled.button`
	z-index: 100;
	${({ theme, bp }) => theme.mq[bp]} {
		display: none;
	}
`;
