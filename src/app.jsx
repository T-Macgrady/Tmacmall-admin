// react 
import React from 'react';
// react-dom
import ReactDOM from 'react-dom';
// react-router 
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

//页面
import Home from 'page/home/index.jsx';
import User from 'page/user/index.jsx';
import Layout from 'component/layout/index.jsx';
import Login from 'page/login/index.jsx';
import ErrorPage        from 'page/error/index.jsx';

class App extends React.Component{
	render(){
		let LayoutRouter = (
			<Layout>
				<Switch>
					<Route exact path='/' component={Home}/>
					<Route path='/product' component={Home}/>
					<Route path='/user' component={User}/>
					<Route path='/product-category' component={Home}/>
                    <Redirect exact from="/dist/index.html" to="/"/>
                    <Route component={ErrorPage}/>
				</Switch>
		    </Layout>
		)
		return (
			<Router>
				<Switch>
					<Route path='/login' component={Login}/>
					{/*被jsx包裹住的变量才需要加{}*/}
					<Route path='/' render = { props => LayoutRouter }/>
				</Switch>
			</Router>
		)
	}
}

ReactDOM.render(
	<App />,
  document.getElementById('app')
);