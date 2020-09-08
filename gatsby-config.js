const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'Iuvenes Engineering',
		description: 'Strona firmy Iuvenes Engineering',
		url: 'https://www.iuvenes.pl',
		author: '@lasmedia',
	},
	plugins: [
		{
			resolve: 'gatsby-plugin-root-import',
			options: {
				src: path.join(__dirname, 'src'),
				assets: path.join(__dirname, 'src/assets'),
				components: path.join(__dirname, 'src/components'),
				layouts: path.join(__dirname, 'src/layouts'),
				pages: path.join(__dirname, 'src/pages'),
				utils: path.join(__dirname, 'src/utils'),
				views: path.join(__dirname, 'src/views'),
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'icons',
				path: `${__dirname}/src/assets/icons`,
			},
		},
		{
			resolve: 'gatsby-plugin-styled-components',
			options: {
				displayName: false,
				fileName: false,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'content',
				path: `${__dirname}/content`,
			},
		},
		'gatsby-transformer-yaml',
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-plugin-netlify-cms',
			options: {
				htmlTitle: 'Panel zarządzania',
				htmlFavicon: (__dirname, 'src/assets/icons/iuvenes.png'),
			},
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Iuvenes Engineering',
				short_name: 'Iuvenes',
				lang: 'pl',
				start_url: '/',
				background_color: '#4A615D',
				theme_color: '#4A615D',
				display: 'minimal-ui',
				icon: 'src/assets/icons/iuvenes.png',
			},
		},
	],
};
