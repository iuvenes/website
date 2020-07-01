import React from 'react';
import PropTypes from 'prop-types';
import ConditionalLink from 'components/Conditional';
import { LogoWrapper, LogoImg } from './styles';

const Logo = ({ to, alt, title, click, image, className }) => (
	<LogoWrapper
		as={to && ConditionalLink}
		to={to}
		click={click}
		title={title}
		className={className}
	>
		<LogoImg src={image} alt={alt} draggable="false" />
	</LogoWrapper>
);

Logo.propTypes = {
	to: PropTypes.string,
	alt: PropTypes.string,
	title: PropTypes.string,
	click: PropTypes.func,
	image: PropTypes.string.isRequired,
	className: PropTypes.string,
};

Logo.defaultProps = {
	to: null,
	alt: null,
	title: null,
	click: null,
	className: null,
};

export default Logo;
