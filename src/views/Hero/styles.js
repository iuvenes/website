import styled from 'styled-components';

export const Wrapper = styled.section`
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	max-height: 762px;
	padding: 0 ${({ theme }) => theme.value.minMargin};
	overflow: hidden;

	${({ theme }) => theme.mq.tabletMid} {
		align-items: center;
		justify-content: flex-end;
	}
`;

export const Header = styled.header`
	display: flex;
	flex-direction: column;
	max-width: 360px;
	color: ${({ theme }) => theme.color.bright};
	font-size: 0.8em;
	text-align: left;

	${({ theme }) => theme.mq.tabletMid} {
		max-width: none;
		font-size: 1.15em;
		text-align: center;
	}
`;

export const H1 = styled.h1`
	display: block;
	position: relative;
	margin: 0 0 0.5em;
	font-size: 2em;
	font-weight: 700;
	line-height: 1.25;
	white-space: pre-wrap;

	::after {
		content: '';
		position: absolute;
		bottom: -0.3em;
		left: 0;
		width: 40%;
		height: 0.125rem;
		background: ${({ theme }) => theme.color.bright};
	}

	${({ theme }) => theme.mq.tabletMid} {
		white-space: normal;

		::after {
			display: none;
		}
	}
`;

export const H2 = styled.h2`
	max-width: 320px;
	margin: 0;
	font-size: 1.25em;
	font-weight: 400;
	line-height: 1.25;

	${({ theme }) => theme.mq.tabletMid} {
		max-width: none;
		line-height: 1.5;
		white-space: pre-wrap;
	}
`;

export const StyledCTA = styled.button`
	align-self: flex-end;
	margin: 1.5em 4em 2em 0;
	font-size: 1.15em;
	${({ theme }) => theme.mq.tabletMid} {
		align-self: center;
		margin: 6em 3em 2em;
		font-size: 0.75em;
	}
`;

export const StyledLinks = styled.div`
	z-index: 2;
	bottom: 0;
	left: 0;
	margin-top: 4em;

	${({ theme }) => theme.mq.tabletMid} {
		display: none;
	}
`;
