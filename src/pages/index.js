import React from 'react';

import SEO from 'components/SEO';
import Hero from 'views/Hero';
import Services from 'views/Services';
import About from 'views/About';
import Offer from 'views/Offer';

const IndexPage = () => (
	<>
		<SEO />
		<Hero id="hero" />
		<Services id="uslugi" />
		<About id="o_nas" />
		<Offer id="oferta" />
	</>
);

export default IndexPage;
