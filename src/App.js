import React from 'react';
import axios from 'axios';
import './App.css';

//Import Components
import NavBar from './components/layouts/NavBar';
import Users from './components/users/Users';
import Search from './components/users/Search';

class App extends React.Component {
	state = {
		users: [],
		loading: false
	};

	async componentDidMount() {
		this.setState({ loading: true });
		const res = await axios.get(`https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_SECRET}`);

		this.setState({ users: res.data, loading: false });
	}
	render() {
		return (
			<div className="App">
				<NavBar />
				<div className="container">
					<Search />
					<Users loading={this.state.loading} users={this.state.users} />
				</div>
			</div>
		);
	}
}

export default App;
