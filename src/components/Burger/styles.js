import styled from 'styled-components';

function calculateHeight(btnHeight, lineHeight) {
	const lineGap = (btnHeight - lineHeight) / 2;
	return [`${btnHeight / 16}em`, `${lineHeight / 16}em`, `${lineGap / 16}em`];
}

const [btnHeight, lineHeight, lineGap] = calculateHeight(30, 5);
const transition = 'transform 0.25s ease-out';

export const BurgerWrapper = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: ${btnHeight};
	height: ${btnHeight};
	padding: 0;
	border: none;
	outline: none;
	background: transparent;
	font-size: 1em;
	cursor: pointer;
`;

export const BurgerLines = styled.span`
	display: block;
	position: relative;
	width: ${btnHeight};
	height: ${lineHeight};
	transform: ${({ isOpen }) => isOpen && 'rotate(225deg)'};
	transition: ${transition};
	background: ${({ theme, isOpen }) => !isOpen ? theme.color.bright : theme.color.dark};
	cursor: pointer;
	filter: ${({ theme, isOpen }) => !isOpen ? `drop-shadow(2px 2px 2px ${theme.color.dark}) ` : 'none'};

	::after,
	::before {
		content: '';
		display: block;
		position: absolute;
		width: 100%;
		height: ${lineHeight};
		transition: ${transition};
		background: inherit;
	}

	::before {
		transform: ${({ isOpen }) => !isOpen ? `translatey(-${lineGap}) ` : 'rotate(90deg)'};
	}

	::after {
		transform: ${({ isOpen }) => !isOpen ? `translatey(${lineGap}) ` : 'translateY(0)'};
	}
`;
