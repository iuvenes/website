import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

import { Wrapper } from './styles';

const Background = ({ image, alt, className }) => (
	<Wrapper
		as={Img}
		alt={alt}
		fluid={image.childImageSharp.fluid}
		className={className}
	/>
);

Background.propTypes = {
	image: PropTypes.shape().isRequired,
	alt: PropTypes.string,
	className: PropTypes.string,
};

Background.defaultProps = {
	alt: null,
	className: null,
};

export default Background;
