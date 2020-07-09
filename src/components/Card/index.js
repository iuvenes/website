import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import Button from 'components/Button';
import { Wrapper, Body, Title, Text } from './styles';

const Card = ({ id, cover, title, text, to }) => (
	<Wrapper id={id}>
		<Img
			fluid={cover.file.childImageSharp.fluid}
			alt={cover.alt}
			draggable={false}
		/>
		<Body>
			<Title>{title}</Title>
			<Text>{text}</Text>
		</Body>
		{to && <Button to={to} title="więcej" bright />}
	</Wrapper>
);

Card.propTypes = {
	id: PropTypes.string.isRequired,
	cover: PropTypes.shape({
		alt: PropTypes.string.isRequired,
		file: PropTypes.shape({
			childImageSharp: PropTypes.shape({
				fluid: PropTypes.shape().isRequired,
			}).isRequired,
		}).isRequired,
	}).isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	to: PropTypes.string,
};

Card.defaultProps = {
	to: null,
};

export default Card;
