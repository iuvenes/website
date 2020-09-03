import React from 'react';
import PropTypes from 'prop-types';

import { CloseWrapper, Cross, NavWrapper } from './styles';

export const CloseBtn = ({ click }) => (
	<CloseWrapper onClick={click}>
		<Cross />
	</CloseWrapper>
);

export const NavBtn = ({ click, prev, next, className }) => (
	<NavWrapper prev={prev} next={next} onClick={click} className={className}>
		{prev && '‹'}
		{next && '›'}
	</NavWrapper>
);

CloseBtn.propTypes = {
	click: PropTypes.func.isRequired,
};

NavBtn.propTypes = {
	click: PropTypes.func.isRequired,
	prev: PropTypes.bool,
	next: PropTypes.bool,
	className: PropTypes.string,
};

NavBtn.defaultProps = {
	prev: false,
	next: false,
	className: null,
};
