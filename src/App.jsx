import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import './App.scss';

class App extends Component {
	render() {
		return (
			<div styleName='base' onClick={this.onClick}>
				Hello, World!
			</div>
		);
	}

	@autobind
	onClick() {
		console.log('Click!');
	}
}

export default App;