import styled from 'styled-components';

export const SectionBright = styled.section`
	background: ${({ theme }) => theme.color.bgBright};
`;

export const SectionDark = styled.section`
	background: ${({ theme }) => theme.color.bgDark};
`;

export const SectionTitle = styled.h2`
	position: ${({ hide }) => (hide ? 'absolute' : 'static')};
	left: -999em;
	margin: 0 0.3125rem 1em;
	color: ${({ theme }) => theme.color.bright};
	font-size: 1.7em;
	font-weight: 700;
	text-shadow: 2px 0 5px #999;
	text-transform: uppercase;
`;

export const SectionSubtitle = styled.h3`
	margin: 0 0 1em;
	color: ${({ theme }) => theme.color.dark};
	font-size: 1.35em;
	font-weight: 400;
	line-height: 1.35;
`;

export const SectionText = styled.p`
	margin: 0 0 2em;
	color: ${({ theme }) => theme.color.dark};
	font-size: 1em;
	font-weight: 400;
	line-height: 1.75;
	white-space: pre-wrap;
`;
