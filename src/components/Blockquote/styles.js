import styled from 'styled-components';

export const BlockquoteWrapper = styled.blockquote`
	display: inline-block;
	position: relative;
	margin: 0;
	padding: 1.5em 0;
	color: ${({ theme }) => theme.color.bright};
	white-space: pre-wrap;

	::before {
		content: '';
		display: block;
		position: absolute;
		top: 50%;
		right: 50%;
		width: 100%;
		height: 100%;
		transform: translate(14%, -50%);
		opacity: 0.3;
		background: ${({ icon }) => `url(${icon}) `};
		background-repeat: no-repeat;
		background-position: center center;
		background-size: contain;
	}
`;

export const BlockquoteText = styled.p`
	margin: 0;
	font-size: 1.215em;
	font-style: italic;
	line-height: 1.12em;
	text-align: right;
	white-space: pre-wrap;
`;

export const BlockquoteCite = styled.footer`
	margin-top: 1em;
	font-size: 0.61em;
	line-height: 1.2em;
	text-align: right;
	text-transform: uppercase;
`;
