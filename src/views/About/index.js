import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Blockquote from 'components/Blockquote';
import {
	SectionDark,
	SectionTitle,
	SectionSubtitle,
	SectionText,
} from 'components/Share';
import { Wrapper, QuoteWrapper } from './styles';

const About = ({ id }) => {
	const {
		contentYaml: { about },
	} = useStaticQuery(graphql`
		{
			contentYaml {
				about {
					title
					subtitle
					text
					quote {
						text
						cite
						icon {
							publicURL
						}
					}
				}
			}
		}
	`);

	const { title, subtitle, text, quote } = about;

	return (
		<SectionDark id={id}>
			<Wrapper>
				<SectionTitle>{title}</SectionTitle>
				<SectionSubtitle>{subtitle}</SectionSubtitle>
				<QuoteWrapper>
					<Blockquote quote={quote.text} cite={quote.cite} icon={quote.icon} />
				</QuoteWrapper>
				<SectionText>{text}</SectionText>
			</Wrapper>
		</SectionDark>
	);
};

About.propTypes = {
	id: PropTypes.string.isRequired,
};

export default About;
