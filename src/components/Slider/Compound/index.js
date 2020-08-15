import React, { useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { marginContext } from 'components/Layout';
import { getImageMaxHeight, getWidestAspect } from 'utils';
import sliderContext from '../context';

const Slider = ({ images, children }) => {
	const imagesLength = images.length;
	if (!imagesLength) return null;

	const { Provider } = sliderContext;
	const [activeSlideId, setActiveSlideId] = useState(0);
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);

	const { dynamicMargin, actualWidth } = useContext(marginContext);

	const changeSlide = newTabId => {
		setIsGalleryOpen(true);
		if (newTabId < 0) setActiveSlideId(imagesLength - 1);
		else if (newTabId >= imagesLength) setActiveSlideId(0);
		else setActiveSlideId(newTabId);
	};

	const closeGallery = () => setIsGalleryOpen(false);

	const value = {
		activeSlideId,
		changeSlide,
		closeGallery,
		isGalleryOpen,
		images,
		widestAspect: useMemo(() => getWidestAspect(images), []),
		maxHeight: useMemo(() => getImageMaxHeight(images, actualWidth), [
			actualWidth,
		]),
		actualWidth,
		dynamicMargin,
	};

	return <Provider value={value}>{children}</Provider>;
};

Slider.propTypes = {
	images: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			alt: PropTypes.string,
			file: PropTypes.shape().isRequired,
		}),
	).isRequired,
	children: PropTypes.node.isRequired,
};

export default Slider;
