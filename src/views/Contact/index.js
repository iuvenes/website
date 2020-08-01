import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import {
	SectionDark,
	SectionTitle,
	SectionSubtitle,
	SectionText,
} from 'components/Share';
import ContactBtn from 'components/ContactBtn';
import { Wrapper, Container, Icon, StyledSub, ButtonList } from './styles';

const Contact = ({ id }) => {
	const { contentYaml } = useStaticQuery(graphql`
		{
			contentYaml {
				contact {
					title
					subtitle
					text
					icon {
						publicURL
					}
					links {
						title
						type
						to
					}
				}
			}
		}
	`);

	const { title, subtitle, text, icon, links } = contentYaml.contact;

	return (
		<SectionDark id={id}>
			<Wrapper>
				<SectionTitle>{title}</SectionTitle>
				<Container>
					<div>
						<StyledSub as={SectionSubtitle}>{subtitle}</StyledSub>
						<SectionText>{text}</SectionText>
					</div>
					<Icon src={icon.publicURL} alt="" draggable={false} />
				</Container>
				<ButtonList>
					{links.map(({ to, type, title: name }) => (
						<li key={to}>
							<ContactBtn type={type} title={name} to={to} />
						</li>
					))}
				</ButtonList>
			</Wrapper>
		</SectionDark>
	);
};

Contact.propTypes = {
	id: PropTypes.string,
};

Contact.defaultProps = {
	id: null,
};

export default Contact;
