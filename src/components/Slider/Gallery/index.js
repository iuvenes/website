import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import FocusTrap from 'react-focus-trap';
import { useSliderContext } from '../context';

import { CloseBtn, NavBtn } from '../Buttons';
import { Wrapper, Container } from './styles';

const Gallery = ({ className }) => {
	const {
		changeSlide,
		isGalleryOpen,
		closeGallery,
		activeSlideId,
		images,
	} = useSliderContext();
	const { file, alt } = images[activeSlideId];
	const { aspectRatio } = file.childImageSharp.fluid;

	return (
		<Wrapper className={className} isOpen={isGalleryOpen}>
			<FocusTrap active={isGalleryOpen} onExit={closeGallery}>
				<CloseBtn click={closeGallery} />
				<NavBtn prev click={() => changeSlide(activeSlideId - 1)} />
				<NavBtn next click={() => changeSlide(activeSlideId + 1)} />
			</FocusTrap>
			<Container>
				<Img
					style={{
						width: `${aspectRatio * 95}vh`,
					}}
					fluid={file.childImageSharp.fluid}
					alt={alt}
					draggable={false}
				/>
			</Container>
		</Wrapper>
	);
};

Gallery.propTypes = {
	className: PropTypes.string,
};

Gallery.defaultProps = {
	className: null,
};

export default Gallery;
