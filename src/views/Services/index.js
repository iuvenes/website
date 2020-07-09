import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import { graphql, useStaticQuery } from 'gatsby';
import { SectionTitle } from 'components/Share';
import { CardList, CardItem } from './styles';

const Services = ({ id }) => {
	const {
		contentYaml: { services },
	} = useStaticQuery(graphql`
		{
			contentYaml {
				services {
					title
					cards {
						id
						title
						text
						to
						cover {
							alt
							file {
								childImageSharp {
									fluid(quality: 35, maxWidth: 900) {
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

	const { title, cards } = services;

	return (
		<section id={id}>
			<SectionTitle hide>{title}</SectionTitle>
			<CardList>
				{cards.map(el => (
					<CardItem key={el.id}>
						<Card
							id={el.id}
							cover={el.cover}
							title={el.title}
							text={el.text}
							to={el.to}
						/>
					</CardItem>
				))}
			</CardList>
		</section>
	);
};

Services.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Services;
