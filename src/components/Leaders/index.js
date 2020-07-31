import React from 'react';
import PropTypes from 'prop-types';

import { SectionText } from 'components/Share';
import { Wrapper, Content, Icons, Icon, Img } from './styles';

const Leaders = ({ text, icons, isPage, children }) => (
	<Wrapper isPage={isPage}>
		<Content>
			<SectionText>{text}</SectionText>
			{children}
		</Content>
		<Icons>
			{icons.map(({ id, publicURL }) => (
				<Icon key={id}>
					<Img src={publicURL} alt="" draggable={false} />
				</Icon>
			))}
		</Icons>
	</Wrapper>
);

Leaders.propTypes = {
	text: PropTypes.string,
	icons: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			publicURL: PropTypes.string.isRequired,
		}).isRequired,
	).isRequired,
	isPage: PropTypes.bool,
	children: PropTypes.node,
};

Leaders.defaultProps = {
	text: null,
	isPage: false,
	children: null,
};

export default Leaders;
