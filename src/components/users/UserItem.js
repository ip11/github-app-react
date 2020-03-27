import React from 'react';
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';

const UserItem = ({user: {avatar_url,login,html_url}}) => {
	return (
		<div className="card text-center">
			<img src={avatar_url} alt="" className="round-img" style={{ width: '120px' }} />
			<h3> {login}</h3>
			<div>
				<Link to={`/users/${login}`} className="btn btn-dark btn-sm my-1">
					{' '}
					Git Profile
				</Link>
			</div>
		</div>
	);
};


UserItem.propTypes = {
    user : PropTypes.object.isRequired
}
export default UserItem;
