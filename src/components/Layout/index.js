import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from 'assets/styles';
import { Main } from './styles';

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<GlobalStyle />
		<Main>{children}</Main>
	</ThemeProvider>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
