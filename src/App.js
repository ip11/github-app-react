import React from 'react';
import './App.css';

//Import Components
import NavBar from './components/layouts/NavBar';
import Users from "./components/users/Users";
class App extends React.Component {
	render() {
		return (
			<div className="App">
				<NavBar />
				<Users/>
			</div>
		);
	}
}

export default App;
