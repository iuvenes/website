function getDateRange() {
	const year = new Date().getFullYear();
	return year === 2019 ? year : `2019 - ${year}`;
}

export default getDateRange;
