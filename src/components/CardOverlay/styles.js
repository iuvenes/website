import styled from 'styled-components';

export const Wrapper = styled.article`
	display: flex;
	position: relative;
	z-index: 1;
	width: 100%;
	color: ${({ theme }) => theme.color.dark};
`;

export const Background = styled.div.attrs(() => ({
	style: {
		position: 'absolute',
	},
	imgStyle: {
		objectPosition: 'center center',
		objectFit: 'cover',
	},
}))`
	z-index: -1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;

export const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	margin-top: 15em;
	background: ${({ theme }) => theme.color.overlayBright};
	text-align: center;
`;

export const Content = styled.div.attrs(({ margin }) => ({
	style: {
		margin: `0 ${margin}px`,
	},
}))`
	margin: 0 auto;
	padding: 1.5em ${({ theme }) => theme.value.minMargin} 1em;
`;

export const Title = styled.h3`
	margin: 0 auto 1.25em;
	font-size: 1.2em;
	font-weight: 600;
	line-height: 1.375;
	text-align: left;
	text-transform: uppercase;
`;

export const Text = styled.p`
	margin: 0 auto 0.5em;
	font-size: 0.9em;
	line-height: 1.75;
	text-align: left;
`;

export const StyledBtn = styled.a`
	font-size: 0.8em;
`;
