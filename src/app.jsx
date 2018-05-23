// react 
import React from 'react';
// react-dom
import ReactDOM from 'react-dom';
// react-router 
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

//页面
import Home from 'page/home/index.jsx';
import Layout from 'component/layout/index.jsx';

class App extends React.Component{
	render(){
		return (
			<Router>
				<Layout>
					<Route exact path='/' component={Home}/>
					<Route path='/product' component={Home}/>
					<Route path='/product.category' component={Home}/>
				</Layout>
			</Router>
		)
	}
}

ReactDOM.render(
	<App />,
  document.getElementById('app')
);