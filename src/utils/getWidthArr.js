function getWidthArr(images, actualWidth, biggestAspect, maxHeight) {
	const isImageWider = biggestAspect * maxHeight > actualWidth;
	const value = isImageWider ? (actualWidth * 0.8) / biggestAspect : maxHeight;

	return images.map(
		({ file }) => file.childImageSharp.fluid.aspectRatio * value,
	);
}

export default getWidthArr;
