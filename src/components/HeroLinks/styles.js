import styled from 'styled-components';
import arrowDark from 'assets/icons/arrowDark.svg';
import arrowBright from 'assets/icons/arrowBright.svg';

export const Wrapper = styled.ul`
	position: absolute;
	margin: 0;
	padding: 0.65em ${({ theme }) => theme.value.minMargin} 0.95em;
	background: ${({ theme }) => theme.color.heroLinks};
	list-style: none;
`;

export const HeroLink = styled.a`
	display: block;
	position: relative;
	padding: 0.8em ${({ theme }) => theme.value.minMargin} 0.8em 0;
	transition: color 0.2s ease-out;
	border: none;
	background: transparent;
	color: ${({ theme }) => theme.color.dark};
	font-family: inherit;
	font-size: 0.8em;
	font-weight: 600;
	line-height: 1.4;
	text-align: left;
	text-decoration: none;
	cursor: pointer;

	::before,
	::after {
		content: '';
		position: absolute;
		top: 50%;
		right: 0;
		width: 1em;
		height: 1em;
		transform: translateY(-50%);
		transition: opacity 0.2s ease-out;
		background-repeat: no-repeat;
		background-size: contain;
	}

	::before {
		opacity: 0;
		background-image: url(${arrowBright});
	}

	::after {
		opacity: 1;
		background-image: url(${arrowDark});
	}

	:hover,
	:active,
	:focus {
		color: ${({ theme }) => theme.color.bright};

		::before {
			opacity: 1;
		}

		::after {
			opacity: 0;
		}
	}
`;
