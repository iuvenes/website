import styled from 'styled-components';

export const MenuList = styled.ul`
	display: flex;
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	position: absolute;
	top: 0;
	right: 0;
	flex-direction: column;
	width: 60vw;
	height: 100vh;
	margin: 0;
	padding: 3em 1.25rem;
	transition: opacity 0.35s ease-out, visibility 0.35s;
	opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
	background: ${({ theme }) => theme.color.bright};
	list-style: none;
	will-change: opacity;

	::before {
		content: '';
		position: absolute;
		z-index: -1;
		top: 0;
		right: 0;
		width: 100vw;
		height: 100vh;
		background: ${({ theme }) => theme.color.overlayBright};
	}

	${({ theme, bp }) => theme.mq[bp]} {
		visibility: visible;
		position: static;
		flex-direction: row;
		justify-content: space-around;
		width: auto;
		height: auto;
		padding: 0;
		opacity: 1;
		background: transparent;
		color: ${({ theme }) => theme.color.bright};

		::before {
			display: none;
		}
	}
`;

export const MenuItem = styled.li`
	display: flex;
	padding: 1.5em 0;
	font-size: 1.25em;

	${({ theme, bp }) => theme.mq[bp]} {
		align-items: center;
		justify-content: center;
		padding: 0 0.5rem;
		font-size: 1em;
		text-align: center;
	}
`;

export const MenuLink = styled.a`
	display: block;
	transition: transform 0.2s ease-in, color 0.2s ease-in;
	outline: none;
	color: inherit;
	font-weight: 600;
	text-decoration: none;
	text-transform: uppercase;

	:hover,
	:focus {
		transform: scale(1.05);
		color: ${({ theme }) => theme.color.primary};
	}
`;
