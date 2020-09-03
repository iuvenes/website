import styled from 'styled-components';

export const CloseWrapper = styled.button`
	display: flex;
	position: absolute;
	z-index: 1001;
	top: 1.5em;
	right: 1.5em;
	align-items: center;
	justify-content: center;
	width: 3em;
	height: 3em;
	padding: 0;
	transition: transform 0.2s ease-out;
	border: none;
	background: transparent;
	font-size: 14px;
	cursor: pointer;

	:hover {
		transform: scale(1.2);
	}
`;

export const Cross = styled.span`
	position: relative;
	width: 100%;
	height: 0.4em;
	transform: rotate(135deg);
	transition: transform 0.2s ease-in;
	background: ${({ theme }) => theme.color.overlayBright};
	cursor: pointer;

	:active {
		transform: rotate(360deg) scale(0);
	}

	::before {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: 0.4em;
		transform: rotate(90deg);
		background: inherit;
	}
`;

export const NavWrapper = styled.button`
	position: absolute;
	z-index: 1001;
	top: 50%;
	right: ${({ next }) => next && '.25em'};
	left: ${({ prev }) => prev && '.25em'};
	margin: 0;
	padding: 0;
	transform: translateY(-50%);
	transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
	border: none;
	outline: none;
	background: transparent;
	color: ${({ theme }) => theme.color.overlayBright};
	font-size: 10em;
	line-height: 0;
	cursor: pointer;

	:hover,
	:focus {
		transform: scale(1.05);
		color: ${({ theme }) => theme.color.bright};
	}
`;
