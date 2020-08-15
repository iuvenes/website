import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import { SectionDark, SectionTitle } from 'components/Share';
import Slider, { ActiveSlide, Gallery, Thumbnails } from 'components/Slider';
import Button from 'components/Button';
import {
	TextWrapper,
	StyledActiveSlide,
	StyledGallery,
	ButtonWrapper,
} from './styles';

const Projects = ({ id }) => {
	const {
		contentYaml: { projects },
	} = useStaticQuery(graphql`
		{
			contentYaml {
				projects {
					title
					button {
						title
						to
					}
					images {
						id
						alt
						file {
							childImageSharp {
								fluid(quality: 75, maxWidth: 1600) {
									aspectRatio
									presentationHeight
									...GatsbyImageSharpFluid_withWebp
								}
							}
						}
					}
				}
			}
		}
	`);

	const { title, button, images } = projects;

	return (
		<SectionDark id={id}>
			<TextWrapper>
				<SectionTitle>{title}</SectionTitle>
			</TextWrapper>
			<Slider images={images}>
				<StyledActiveSlide as={ActiveSlide} />
				<StyledGallery as={Gallery} />
				<Thumbnails />
			</Slider>
			<ButtonWrapper>
				<Button title={button.title} to={button.to} />
			</ButtonWrapper>
		</SectionDark>
	);
};

Projects.propTypes = {
	id: PropTypes.string,
};

Projects.defaultProps = {
	id: null,
};

export default Projects;
