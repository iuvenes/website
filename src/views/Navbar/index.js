import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';

import Logo from 'components/Logo';
import Menu from 'components/Menu';
import Burger from 'components/Burger';
import { Wrapper, Nav, LogoWrapper, StyledMenu, StyledBurger } from './styles';

const Navbar = ({ id }) => {
	const {
		contentYaml: { menu, logo },
	} = useStaticQuery(graphql`
		{
			contentYaml {
				menu {
					title
					to
				}
				logo {
					title
					to
					cover {
						alt
						file {
							publicURL
						}
					}
				}
			}
		}
	`);

	const [isOpen, setIsOpen] = useState(false);

	const disableBurger = () => {
		setIsOpen(false);
	};

	const toggleBurger = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		window.addEventListener('orientationchange', disableBurger);
		return () => {
			window.removeEventListener('orientationchange', disableBurger);
		};
	}, []);

	return (
		<Wrapper id={id}>
			<Nav>
				<LogoWrapper>
					<Logo
						to={logo.to}
						title={logo.title}
						image={logo.cover.file.publicURL}
						alt={logo.cover.alt}
						click={disableBurger}
					/>
				</LogoWrapper>
				<StyledMenu
					as={Menu}
					items={menu}
					isOpen={isOpen}
					click={disableBurger}
					bp="tabletMid"
				/>
				<StyledBurger
					as={Burger}
					click={toggleBurger}
					isOpen={isOpen}
					bp="tabletMid"
				/>
			</Nav>
		</Wrapper>
	);
};

Navbar.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Navbar;
