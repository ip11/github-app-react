import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const NavBar = ({ icon, title }) => {
	return (
		<nav className="navbar bg-primary">
			<h1>
				<i className={icon} /> {title}
			</h1>
			<ul>
				<li>
					<Link to="/"> Home</Link>
				</li>
				<li>
					<Link to="/about"> About </Link>
				</li>
			</ul>
		</nav>
	);
};

NavBar.defaultProps = {
	title: 'GitHub App',
	icon: 'fab fa-github'
};

NavBar.propTypes = {
	title: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired
};

export default NavBar;

//Step1 : Download the styles and Setup NavBar with GitHub
//Step2 : Git Hub Icon with FontAwesome
//Step 3 : Props With NavBar and Intro to Default Props
//Step 4 : impt PropTypes
