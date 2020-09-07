import React from 'react';
import Photo from 'react-photo-gallery';
import { useSliderContext } from '../context';

const Masonry = () => {
	const { changeSlide, images } = useSliderContext();

	const photos = images.map(({ file }) => {
		const { src, width, height } = file.childImageSharp.original;
		return {
			src,
			width,
			height,
		};
	});

	return (
		<Photo photos={photos} onClick={(e, { index }) => changeSlide(index)} />
	);
};

export default Masonry;
