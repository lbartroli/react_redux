import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
	return (
		<nav>
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			&nbsp;|&nbsp;
			<Link to="/courses" activeClassName="active">Courses</Link>
			&nbsp;|&nbsp;
			<Link to="/about" activeClassName="active">About</Link>
			{loading && <LoadingDots className="pull-right" interval={100} dots={20} />}
		</nav>
	);
};

Header.propTypes = {
	loading: PropTypes.bool.isRequired
};

export default Header;
