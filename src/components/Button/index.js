import React from 'react';
import PropTypes from 'prop-types';

import Conditional from 'components/Conditional';
import { CTA, Bright, Dark } from './styles';

const BtnMore = ({ title, to, cta, bright, className }) => {
	let Wrapper = Dark;
	if (cta) Wrapper = CTA;
	if (bright) Wrapper = Bright;

	return (
		<Wrapper as={Conditional} to={to} className={className}>
			{title}
		</Wrapper>
	);
};

BtnMore.propTypes = {
	title: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	cta: PropTypes.bool,
	bright: PropTypes.bool,
	className: PropTypes.string,
};

BtnMore.defaultProps = {
	cta: false,
	bright: false,
	className: null,
};

export default BtnMore;
