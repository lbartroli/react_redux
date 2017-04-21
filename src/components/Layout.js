import React, {PropTypes} from 'react';
import Header from './common/header';

class Layout extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<Header />
				{this.props.children}
			</div>
		);
	}
}

Layout.propTypes = {
	children: PropTypes.object.isRequired
};

export default Layout;
