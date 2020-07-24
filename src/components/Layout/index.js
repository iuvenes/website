import React, { useEffect, useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyle } from 'assets/styles';

import Navbar from 'views/Navbar';
import { Main } from './styles';

export const marginContext = createContext({
	dynamicMargin: 0,
	actualWidth: 0,
});

const contentWidth = parseInt(theme.value.contentWidth, 10);
const maxWidth = parseInt(theme.value.maxWidth, 10);

const Layout = ({ children }) => {
	const { Provider: MarginProvider } = marginContext;

	const [layoutValues, setLayoutValues] = useState({
		dynamicMargin: 0,
		actualWidth: 0,
	});

	useEffect(() => {
		const getCardWidth = () => {
			const documentWidth = document
				.querySelector('body')
				.getBoundingClientRect().width;
			const newWidth = documentWidth < maxWidth ? documentWidth : maxWidth;

			if (newWidth <= contentWidth) {
				setLayoutValues({
					dynamicMargin: 0,
					actualWidth: newWidth,
				});
			}

			if (newWidth > contentWidth) {
				setLayoutValues({
					dynamicMargin: (newWidth - contentWidth) / 2,
					actualWidth: newWidth,
				});
			}
		};

		getCardWidth();
		window.addEventListener('resize', getCardWidth);
		return () => window.removeEventListener('resize', getCardWidth);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<MarginProvider value={layoutValues}>
				<Navbar id="navbar" />
				<Main>{children}</Main>
			</MarginProvider>
		</ThemeProvider>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Layout;
