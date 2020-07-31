function makeContactLink(link, type) {
	const removedSpaces = link.replace(/ /g, '');
	if (type === 'phone') return `tel:${removedSpaces}`;
	if (type === 'mail') return `mailto:${removedSpaces}`;
	return '';
}

export default makeContactLink;
