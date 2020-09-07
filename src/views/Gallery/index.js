import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Slider, { Masonry, Gallery } from 'components/Slider';
import { SectionBright, SectionTitle, SectionSubtitle } from 'components/Share';
import { Wrapper, Content } from './styles';

const GalleryView = () => {
	const {
		contentYaml: { gallery },
	} = useStaticQuery(graphql`
		{
			contentYaml {
				gallery {
					title
					galleries {
						title
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
									original {
										height
										width
										src
									}
								}
							}
						}
					}
				}
			}
		}
	`);

	const { title: sectionTitle, galleries } = gallery;

	if (!galleries.length) return null;

	return (
		<Wrapper as={SectionBright}>
			<SectionTitle>{sectionTitle}</SectionTitle>
			{galleries.map(({ title, images }) => (
				<Content>
					<SectionSubtitle>{title}</SectionSubtitle>
					<Slider images={images}>
						<Masonry />
						<Gallery />
					</Slider>
				</Content>
			))}
		</Wrapper>
	);
};

export default GalleryView;
