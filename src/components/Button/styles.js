import styled from 'styled-components';
import arrowDark from 'assets/icons/arrowDark.svg';
import arrowColor from 'assets/icons/arrowColor.svg';
import arrowBright from 'assets/icons/arrowBright.svg';

const Button = styled.a`
	display: inline-block;
	position: relative;
	margin: 0 auto;
	padding: 1em 1.5em 1.5em;
	border: none;
	background: transparent;
	font-family: inherit;
	text-decoration: none;
	text-transform: uppercase;
	cursor: pointer;

	::before,
	::after {
		content: '';
		position: absolute;
		bottom: 0.5em;
		left: 50%;
		width: 1em;
		height: 1em;
		transform: translateX(-50%) rotate(90deg);
		background-repeat: no-repeat;
		background-size: contain;
	}

	:hover,
	:active,
	:focus {
		::before,
		::after {
			transform: translate(-50%, 0.15em) rotate(90deg);
		}
	}
`;

export const Dark = styled(Button)`
	transition: color 0.3s linear;
	color: ${({ theme }) => theme.color.dark};

	::before {
		transition: transform 0.3s linear, opacity 0.3s linear;
		opacity: 1;
		background-image: url(${arrowDark});
	}

	::after {
		transition: transform 0.3s linear, opacity 0.3s linear;
		opacity: 0;
		background-image: url(${arrowColor});
	}

	:hover,
	:active,
	:focus {
		color: ${({ theme }) => theme.color.logoColor};

		::before {
			opacity: 0;
		}

		::after {
			opacity: 1;
		}
	}
`;

export const Bright = styled(Button)`
	color: ${({ theme }) => theme.color.bright};

	::before {
		transition: transform 0.3s linear;
		background-image: url(${arrowBright});
	}

	::after {
		display: none;
	}
`;

export const CTA = styled(Button)`
	padding: 0.85em 1.25em;
	transition: color 0.25s linear;
	border: 1px solid transparent;
	border-color: ${({ theme }) => theme.color.ctaBorder};
	color: ${({ theme }) => theme.color.bright};
	text-transform: lowercase;

	::before {
		display: none;
	}

	/* hover's overlay */
	::after {
		z-index: -1;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		transform: none;
		transition: opacity 0.25s linear;
		opacity: 0;
		background: ${({ theme }) => theme.color.ctaOverlay};
	}

	:hover,
	:active,
	:focus {
		color: ${({ theme }) => theme.color.dark};

		::after {
			transform: none;
			opacity: 1;
		}
	}

	${({ theme }) => theme.mq.tabletMid} {
		padding-bottom: 1.5em;
		border: none;
		text-transform: uppercase;

		/* arrow */
		::before {
			display: block;
			bottom: 0.25em;
			transition: transform 0.3s linear;
			background-image: url(${arrowBright});
		}

		:hover,
		:active,
		:focus {
			color: ${({ theme }) => theme.color.bright};
		}
	}
`;
