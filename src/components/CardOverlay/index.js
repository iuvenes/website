import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { marginContext } from 'components/Layout';

import Button from 'components/Button';
import {
	Wrapper,
	Background,
	ContentWrapper,
	Content,
	Title,
	Text,
	StyledBtn,
} from './styles';

const CardOverlay = ({ id, cover, title, text, to }) => {
	const { dynamicMargin: cardMargin } = useContext(marginContext);

	return (
		<Wrapper id={id}>
			<Background
				as={Img}
				alt={cover.alt}
				fluid={cover.file.childImageSharp.fluid}
				draggable={false}
			/>
			<ContentWrapper>
				<Content margin={cardMargin}>
					<Title>{title}</Title>
					<Text>{text}</Text>
				</Content>
				{to && <StyledBtn as={Button} to={to} title="więcej" />}
			</ContentWrapper>
		</Wrapper>
	);
};

CardOverlay.propTypes = {
	id: PropTypes.string.isRequired,
	cover: PropTypes.shape({
		alt: PropTypes.string,
		file: PropTypes.shape({
			childImageSharp: PropTypes.shape({
				fluid: PropTypes.shape().isRequired,
			}).isRequired,
		}).isRequired,
	}).isRequired,
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

export default CardOverlay;
