import styled from 'styled-components';

export const Wrapper = styled.div`
	max-width: ${({ theme }) => theme.value.contentWidth};
	margin: 0 auto;
	padding: 8em ${({ theme }) => theme.value.minMargin} 4em;
`;

export default Wrapper;
