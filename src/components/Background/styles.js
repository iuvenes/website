import styled from 'styled-components';

export const Wrapper = styled.div.attrs(() => ({
	style: {
		position: 'absolute',
	},
	imgStyle: {
		objectPosition: 'left bottom',
		objectFit: 'cover',
	},
}))`
	z-index: -1;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
`;
export default Wrapper;
