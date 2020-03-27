import React, { Fragment } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

//Import Components
import NavBar from './components/layouts/NavBar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';
import About from './components/pages/About';

class App extends React.Component {
	state = {
		users: [],
		user: {},
		loading: false,
		alert: null
	};

	async componentDidMount() {
		this.setState({ loading: true });
		const res = await axios.get(
			`https://api.github.com/users?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process.env
				.GITHUB_SECRET}`
		);

		this.setState({ users: res.data, loading: false });
	}

	searchUsers = async (text) => {
		this.setState({ loading: true });

		const res = await axios.get(
			`https://api.github.com/search/users?q=${text}&client_id=${process.env
				.GITHUB_CLIENT_ID}&client_secret=${process.env.GITHUB_SECRET}`
		);

		this.setState({ users: res.data.items, loading: false });
	};

	//getSingleUser
	getUser = async (username) => {
		this.setState({ loading: true });

		const res = await axios.get(
			`https://api.github.com/users/${username}?client_id=${process.env.GITHUB_CLIENT_ID}&client_secret=${process
				.env.GITHUB_SECRET}`
		);

		this.setState({ user: res.data, loading: false });
	};

	clearUsers = () => {
		this.setState({ users: [], loading: false });
	};

	setAlert = (msg, type) => {
		this.setState({ alert: { msg: msg, type: type } });

		setTimeout(() => {
			this.setState({ alert: null });
		}, 3000);
	};
	render() {
		return (
			<Router>
				<div className="App">
					<NavBar />
					<div className="container">
						<Alert alert={this.state.alert} />
						<Switch>
							<Route
								exact
								path="/"
								render={(props) => (
									<Fragment>
										<Search
											searchUsers={this.searchUsers}
											clearUsers={this.clearUsers}
											showClear={this.state.users.length > 0 ? true : false}
											setAlert={this.setAlert}
										/>
										<Users loading={this.state.loading} users={this.state.users} />
									</Fragment>
								)}
							/>
							<Route exact path="/about" component={About} />
							<Route
								exact
								path="/users/:login"
								render={(props) => (
									<User
										{...props}
										getUser={this.getUser}
										user={this.state.user}
										loading={this.state.loading}
									/>
								)}
							/>
						</Switch>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
