import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Header = () => {
	return (
		<nav>
			<IndexLink to="/" activeClassName="active">Home</IndexLink>
			&nbsp;|&nbsp;
			<Link to="/courses" activeClassName="active">Courses</Link>
			&nbsp;|&nbsp;
			<Link to="/about" activeClassName="active">About</Link>
		</nav>
	);
};

export default Header;
