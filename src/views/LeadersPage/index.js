import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import LeadersWrapper from 'components/Leaders';
import { SectionBright, SectionTitle } from 'components/Share';
import { Wrapper } from './styles';

const Leaders = ({ id }) => {
	const {
		contentYaml: { leadersPage },
	} = useStaticQuery(graphql`
		{
			contentYaml {
				leadersPage {
					title
					text
					icons {
						id
						publicURL
					}
				}
			}
		}
	`);

	const { title, text, icons } = leadersPage;

	return (
		<SectionBright id={id}>
			<Wrapper>
				<SectionTitle>{title}</SectionTitle>
				<LeadersWrapper text={text} icons={icons} isPage />
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
