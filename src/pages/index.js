import React from 'react';

import SEO from 'components/SEO';
import Hero from 'views/Hero';
import Services from 'views/Services';
import About from 'views/About';
import Offer from 'views/Offer';
import Projects from 'views/Projects';
import Leaders from 'views/Leaders';

const IndexPage = () => (
	<>
		<SEO />
		<Hero id="hero" />
		<Services id="uslugi" />
		<About id="o_nas" />
		<Offer id="oferta" />
		<Projects id="projekty" />
		<Leaders id="leaders" />
	</>
);

export default IndexPage;
