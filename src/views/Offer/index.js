import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import CardOverlay from 'components/CardOverlay';
import { SectionBright, SectionTitle, SectionText } from 'components/Share';
import { CardsList, TextWrapper, CardItem } from './styles';

const Offer = ({ id }) => {
	const {
		contentYaml: { offer },
	} = useStaticQuery(graphql`
		{
			contentYaml {
				offer {
					title
					text
					cards {
						id
						title
						text
						to
						cover {
							alt
							file {
								childImageSharp {
									fluid(quality: 45, maxWidth: 800) {
										...GatsbyImageSharpFluid_withWebp
									}
								}
							}
						}
					}
				}
			}
		}
	`);

	const { title, text, cards } = offer;

	return (
		<SectionBright id={id}>
			<TextWrapper>
				<SectionTitle>{title}</SectionTitle>
				<SectionText>{text}</SectionText>
			</TextWrapper>
			<CardsList>
				{cards.map(card => (
					<CardItem key={card.id}>
						<CardOverlay
							id={card.id}
							cover={card.cover}
							title={card.title}
							text={card.text}
							to={card.to}
						/>
					</CardItem>
				))}
			</CardsList>
		</SectionBright>
	);
};

Offer.propTypes = {
	id: PropTypes.string,
};

Offer.defaultProps = {
	id: null,
};

export default Offer;
