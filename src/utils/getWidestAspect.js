function getWidestAspect(imgArr) {
	const aspectsArr = imgArr.map(
		({ file }) => file.childImageSharp.fluid.aspectRatio,
	);

	return aspectsArr.reduce((a, b) => Math.max(a, b));
}

export default getWidestAspect;
