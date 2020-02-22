import React from 'react';
import './App.css';

//Import Components
import NavBar from './components/layouts/NavBar';
import UserItem from "./components/users/UserItem"
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<UserItem />
			</div>
		);
	}
}

export default App;
