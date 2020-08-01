import styled from 'styled-components';

export const Wrapper = styled.footer`
	background: ${({ theme }) => theme.color.bgBright};
`;

export const Content = styled.p`
	max-width: ${({ theme }) => theme.value.contentWidth};
	margin: 0 auto;
	padding: 1.5em ${({ theme }) => theme.value.minMargin};
	font-size: 0.75em;
`;
