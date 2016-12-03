const React = require('react');
const ReactDOM = require('react-dom');
const {Component} = React;

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>Hello, World from React!</div>
		);
	}
}

ReactDOM.render(<App />, document.body);