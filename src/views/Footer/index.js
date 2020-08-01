import React from 'react';
import PropTypes from 'prop-types';
import { getDateRange } from 'utils';

import { Wrapper, Content } from './styles';

const Footer = ({ id }) => (
	<Wrapper id={id}>
		<Content>
			Copyright © {getDateRange()} Iuvenes Engineering. All Rights Reserved.
		</Content>
	</Wrapper>
);

Footer.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Footer;
