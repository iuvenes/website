import React from 'react';

import SEO from 'components/SEO';
import Hero from 'views/Hero';
import Services from 'views/Services';

const IndexPage = () => (
	<>
		<SEO />
		<Hero id="hero" />
		<Services id="uslugi" />
	</>
);

export default IndexPage;
