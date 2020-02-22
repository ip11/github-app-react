import React from 'react';
import './App.css';

//Import Components
import NavBar from './components/layouts/NavBar';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<NavBar />
			</div>
		);
	}
}

export default App;
