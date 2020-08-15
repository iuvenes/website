import styled from 'styled-components';

export const Wrapper = styled.div`
	overflow: -moz-scrollbars-none;
	overflow-x: scroll;
	-webkit-overflow-scrolling: touch;
	scrollbar-width: none;
	-ms-overflow-style: none;
	-webkit-tap-highlight-color: rgba(0, 0, 0, 0);

	::-webkit-scrollbar {
		width: 0 !important;
	}
`;

export const Container = styled.div.attrs(({ padding, width }) => ({
	style: {
		padding: `0 ${padding}px`,
		width: `${width}px`,
	},
}))`
	display: flex;
	cursor: pointer;
`;

export const SlideBtn = styled.button.attrs(({ slideWidth }) => ({
	style: {
		width: slideWidth,
	},
}))`
	margin: 0 11px;
	padding: 0;
	transform: scale(1, 0.98);
	transition: transform 0.3s ease-in-out;
	border: none;
	outline: none;
	cursor: pointer;

	:hover,
	:focus {
		transform: scale(1.02, 1);
	}

	:first-child {
		margin-left: ${({ theme }) => theme.value.minMargin};
	}

	:last-child {
		margin-right: ${({ theme }) => theme.value.minMargin};
	}
`;
