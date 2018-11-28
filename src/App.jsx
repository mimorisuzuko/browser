import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import './App.scss';

class App extends Component {
	@autobind
	onClick() {
		console.log('Click!');
	}

	render() {
		return (
			<div styleName='base' onClick={this.onClick}>
				Hello, World!
			</div>
		);
	}
}

export default App;
