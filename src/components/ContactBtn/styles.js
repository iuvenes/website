import styled from 'styled-components';

import mail from 'assets/icons/mail.svg';
import phone from 'assets/icons/phone.svg';

const contact = {
	mail,
	phone,
};

export const Wrapper = styled.a`
	display: inline-flex;
	align-items: center;
	margin: 0 0 0.5em;
	overflow: hidden;
	transition: transform 0.2s ease-in;
	color: ${({ theme }) => theme.color.logoColor};
	font-size: 1.25em;
	line-height: 1.5;
	text-decoration: none;
	word-break: break-word;

	&::before {
		content: ${({ type }) => `url(${contact[type]}) `};
		margin-right: 0.7em;
		line-height: 0;
	}

	:hover,
	:focus {
		transform: scale(1.05);
	}
`;

export default Wrapper;
