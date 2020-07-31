import React from 'react';
import PropTypes from 'prop-types';

import { makeContactLink } from 'utils';
import Conditional from 'components/Conditional';
import { Wrapper } from './styles';

const ContactBtn = ({ title, to, type }) => (
	<Wrapper as={Conditional} to={makeContactLink(to, type)} type={type}>
		{title}
	</Wrapper>
);

ContactBtn.propTypes = {
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

export default ContactBtn;
