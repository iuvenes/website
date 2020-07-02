import React from 'react';
import PropTypes from 'prop-types';

import Conditional from 'components/Conditional';
import { MenuList, MenuItem, MenuLink } from './styles';

const Menu = ({ items, click, isOpen, bp, className }) => (
	<MenuList bp={bp} isOpen={isOpen} className={className}>
		{items.map(item => (
			<MenuItem bp={bp} key={item.title}>
				<MenuLink as={Conditional} to={item.to} click={click}>
					{item.title}
				</MenuLink>
			</MenuItem>
		))}
	</MenuList>
);

Menu.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	isOpen: PropTypes.bool.isRequired,
	bp: PropTypes.string.isRequired,
	click: PropTypes.func,
	className: PropTypes.string,
};

Menu.defaultProps = {
	click: null,
	className: null,
};

export default Menu;
