import React, { Component } from 'react';
import PropTypes from 'prop-types'

export class NavBar extends Component {
	static defaultProps = {
		title: 'GitHub App',
		icon: 'fab fa-github'
    };
    
    static propTypes = {
        title : PropTypes.string.isRequired,
        icon : PropTypes.string.isRequired
    }
	render() {
		return (
			<nav className="navbar bg-primary">
				<h1>
					<i className={this.props.icon} /> {this.props.title}
				</h1>
			</nav>
		);
	}
}

export default NavBar;

//Step1 : Download the styles and Setup NavBar with GitHub
//Step2 : Git Hub Icon with FontAwesome
//Step 3 : Props With NavBar and Intro to Default Props
//Step 4 : impt PropTypes
