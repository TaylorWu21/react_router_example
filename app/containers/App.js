import React from 'react';
import { Link } from 'react-router';


class App extends React.Component {
	componentDidMount() {
		window.jQuery('.button-collapse').sideNav();
	}

	render() {
		return(
			<div>
				<nav>
				  <div className="nav-wrapper">
				    <a href="#!" className="brand-logo">My App</a>
				    <a href="#" data-activates="mobile-demo" className="button-collapse">
				    	<i className="material-icons">menu</i>
				    </a>
				    <ul className="right hide-on-med-and-down">
				      <li><Link to="/">Home</Link></li>
				      <li><Link to="/about">About</Link></li>
				      <li><Link to="/songs">Songs</Link></li>
				    </ul>
				    <ul className="side-nav" id="mobile-demo">
				      <li><Link to="/">Home</Link></li>
				      <li><Link to="/about">About</Link></li>
				      <li><Link to="/songs">Songs</Link></li>
				    </ul>
				  </div>
				</nav>
				{this.props.children}
			</div>
		)
	}
}

export default App;
