import React from 'react';
import PropTypes from 'prop-types';
import Conditional from 'components/Conditional';
import { Wrapper, HeroLink } from './styles';

const HeroLinks = ({ links, className }) => (
	<Wrapper className={className}>
		{links.map(({ title, to }) => (
			<li key={title}>
				<HeroLink as={Conditional} to={to}>
					{title}
				</HeroLink>
			</li>
		))}
	</Wrapper>
);

HeroLinks.propTypes = {
	links: PropTypes.arrayOf(
		PropTypes.shape({
			title: PropTypes.string.isRequired,
			to: PropTypes.string.isRequired,
		}),
	).isRequired,
	className: PropTypes.string,
};

HeroLinks.defaultProps = {
	className: null,
};

export default HeroLinks;
