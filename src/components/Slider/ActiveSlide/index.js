import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import { useSliderContext } from '../context';

const ActiveSlide = ({ className }) => {
	const { activeSlideId, maxHeight, images } = useSliderContext();
	const { file, alt } = images[activeSlideId];

	return (
		<Img
			className={className}
			fluid={file.childImageSharp.fluid}
			alt={alt}
			draggable={false}
			style={{ maxHeight }}
		/>
	);
};

ActiveSlide.propTypes = {
	className: PropTypes.string,
};

ActiveSlide.defaultProps = {
	className: null,
};

export default ActiveSlide;
