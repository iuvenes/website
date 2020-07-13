import React from 'react';
import PropTypes from 'prop-types';
import { BlockquoteWrapper, BlockquoteCite, BlockquoteText } from './styles';

const Blockqoute = ({ quote, cite, icon }) => (
	<BlockquoteWrapper icon={icon.publicURL}>
		<BlockquoteText>{quote}</BlockquoteText>
		<BlockquoteCite>- {cite}</BlockquoteCite>
	</BlockquoteWrapper>
);

Blockqoute.propTypes = {
	quote: PropTypes.string.isRequired,
	cite: PropTypes.string.isRequired,
	icon: PropTypes.shape().isRequired,
};

export default Blockqoute;
