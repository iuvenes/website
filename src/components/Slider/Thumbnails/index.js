import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { getWidthArr } from 'utils';
import { useSliderContext } from '../context';

import { Wrapper, Container, SlideBtn } from './styles';

const data = {
	active: false,
	startX: 0,
	scrollLeft: 0,
};

const Thumbnails = ({ maxHeight, className }) => {
	const slider = useRef();
	const {
		changeSlide,
		images,
		widestAspect,
		dynamicMargin,
		actualWidth,
	} = useSliderContext();

	const [sliderWidth, setSliderWidth] = useState(0);
	const [slidesWidthArr, setSlidesWidthArr] = useState([0]);

	const activate = e => {
		data.active = true;
		data.startX = e.pageX - slider.current.offsetLeft;
		data.scrollLeft = slider.current.scrollLeft;
	};

	const deactivate = () => {
		data.active = false;
	};

	const handleMouseMove = e => {
		if (!data.active) return;
		const newPos = e.pageX - slider.current.offsetLeft;
		const walk = (newPos - data.startX) * 2;
		slider.current.scroll(data.scrollLeft - walk, 0);
	};

	const handleClick = i => {
		if (data.scrollLeft === slider.current.scrollLeft) {
			changeSlide(i);
		}
	};

	useDeepCompareEffect(() => {
		setSlidesWidthArr(
			getWidthArr(images, actualWidth, widestAspect, maxHeight),
		);
		setSliderWidth(slidesWidthArr.reduce((prev, next) => prev + next));
	}, [actualWidth, slidesWidthArr]);

	return (
		<Wrapper
			ref={slider}
			className={className}
			onMouseDown={activate}
			onMouseUp={deactivate}
			onMouseMove={handleMouseMove}
			onMouseLeave={deactivate}
		>
			<Container padding={dynamicMargin} width={sliderWidth}>
				{images.map(({ id, alt, file }, i) => (
					<SlideBtn
						onClick={() => handleClick(i)}
						key={id}
						slideWidth={slidesWidthArr[i]}
					>
						<Img
							fluid={file.childImageSharp.fluid}
							alt={alt}
							draggable={false}
						/>
					</SlideBtn>
				))}
			</Container>
		</Wrapper>
	);
};

Thumbnails.propTypes = {
	maxHeight: PropTypes.number,
	className: PropTypes.string,
};

Thumbnails.defaultProps = {
	maxHeight: 500,
	className: null,
};

export default Thumbnails;
