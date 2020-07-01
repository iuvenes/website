import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const ConditionalLink = ({ to, click, title, className, children }) => {
	const firstChar = to && to.slice(0, 1);

	const onClick = e => {
		e.currentTarget.blur();
		if (click) {
			click();
		}
	};

	// Gatsby Link
	if (firstChar === '/') {
		return (
			<Link onClick={onClick} to={to} className={className} title={title}>
				{children}
			</Link>
		);
	}

	// default outer link
	return (
		<a
			onClick={onClick}
			href={to}
			className={className}
			title={title}
			target="_blank"
			rel="noopener noreferrer"
		>
			{children}
		</a>
	);
};

ConditionalLink.propTypes = {
	to: PropTypes.string,
	title: PropTypes.string,
	click: PropTypes.func,
	className: PropTypes.string,
	children: PropTypes.node,
};

ConditionalLink.defaultProps = {
	to: null,
	title: null,
	click: null,
	className: null,
	children: null,
};

export default ConditionalLink;
