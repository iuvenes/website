function getLowestImgAspect(imgArr) {
	const imgHeightArr = imgArr.map(
		({ file }) => file.childImageSharp.fluid.presentationHeight,
	);

	const lowestHeight = imgHeightArr.reduce((a, b) => Math.min(a, b));

	return imgArr.find(
		({ file }) => file.childImageSharp.fluid.presentationHeight === lowestHeight,
	).file.childImageSharp.fluid.aspectRatio;
}

function getImageMaxHeight(imgArr, actualWidth) {
	const maxHeight = getLowestImgAspect(imgArr);

	return actualWidth / maxHeight;
}

export default getImageMaxHeight;
