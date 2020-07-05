import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Background from 'components/Background';
import Button from 'components/Button';
import HeroLinks from 'components/HeroLinks';
import { Wrapper, Header, H1, H2, StyledCTA, StyledLinks } from './styles';

const Hero = ({ id }) => {
	const {
		contentYaml: { hero },
	} = useStaticQuery(graphql`
		{
			contentYaml {
				hero {
					title
					subtitle
					button {
						title
						to
					}
					links {
						title
						to
					}
					cover {
						alt
						file {
							childImageSharp {
								fluid(quality: 60, maxWidth: 1600) {
									...GatsbyImageSharpFluid_withWebp_tracedSVG
								}
							}
						}
					}
				}
			}
		}
	`);

	const { title, subtitle, button, links, cover } = hero;

	return (
		<Wrapper id={id}>
			<Background image={cover.file} alt={cover.alt} />
			<Header>
				<H1>{title}</H1>
				<H2>{subtitle}</H2>
				<StyledCTA as={Button} cta title={button.title} to={button.to} />
			</Header>
			<StyledLinks as={HeroLinks} links={links} />
		</Wrapper>
	);
};

Hero.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Hero;
