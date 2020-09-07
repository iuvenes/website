import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: ${({ theme }) => theme.value.contentWidth};
	margin: 0 auto;
	padding: 8em ${({ theme }) => theme.value.minMargin};
`;

export const Content = styled.div`
	padding: 2em 0;
`;

export default Wrapper;
