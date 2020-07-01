import styled from 'styled-components';

export const LogoWrapper = styled.div`
	display: inline-block;
	height: 2em;
	transition: transform 0.3s ease-in, filter 0.3s ease-in;
	outline: none;
	filter: drop-shadow(2px 2px 2px ${({ theme }) => theme.color.dark});

	:hover,
	:focus {
		transform: scale(1.05);
	}
`;

export const LogoImg = styled.img`
	display: block;
	height: 100%;
`;
