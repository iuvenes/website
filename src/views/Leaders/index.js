import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import LeadersWrapper from 'components/Leaders';
import { SectionBright, SectionTitle } from 'components/Share';
import { Wrapper, Quote } from './styles';

const Leaders = ({ id }) => {
	const {
		contentYaml: { leaders },
	} = useStaticQuery(graphql`
		{
			contentYaml {
				leaders {
					title
					text
					quote
					icons {
						id
						publicURL
					}
				}
			}
		}
	`);

	const { title, text, quote, icons } = leaders;

	return (
		<SectionBright id={id}>
			<Wrapper>
				<SectionTitle>{title}</SectionTitle>
				<LeadersWrapper text={text} icons={icons}>
					<Quote>&ldquo;{quote}&rdquo;</Quote>
				</LeadersWrapper>
			</Wrapper>
		</SectionBright>
	);
};

Leaders.propTypes = {
	id: PropTypes.string,
};

Leaders.defaultProps = {
	id: null,
};

export default Leaders;
