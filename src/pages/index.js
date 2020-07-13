import React from 'react';

import SEO from 'components/SEO';
import Hero from 'views/Hero';
import Services from 'views/Services';
import About from 'views/About';

const IndexPage = () => (
	<>
		<SEO />
		<Hero id="hero" />
		<Services id="uslugi" />
		<About id="o_nas" />
	</>
);

export default IndexPage;
