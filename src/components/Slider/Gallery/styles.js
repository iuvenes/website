import styled from 'styled-components';

export const Wrapper = styled.div`
	visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
	position: fixed;
	z-index: 1000;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transition: opacity 0.3s ease-out, visibility 0.3s ease-out;
	opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
	background: ${({ theme }) => theme.color.overlayDark};
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding: ${({ theme }) => theme.value.minMargin};
`;
