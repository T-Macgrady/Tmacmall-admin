// react 
import React 	 		from 'react';
// react-dom
import ReactDOM 		from 'react-dom';
// react-router 
import { BrowserRouter as Router, Route, Redirect, Switch, Link } from 'react-router-dom';

//页面
import Home 			from 'page/home/index.jsx';
import User 		    from 'page/user/index.jsx';
import ProductRouter 	from 'page/product/router.jsx';
import ProductList    	from 'page/product/index/index.jsx';
import Order            from 'page/order/index.jsx';
import OrderDetail      from 'page/order/detail.jsx';

import Layout 			from 'component/layout/index.jsx';
import Login 			from 'page/login/index.jsx';
import ErrorPage     	from 'page/error/index.jsx';

class App extends React.Component{
	render(){
		let LayoutRouter = (
			<Layout>
				<Switch>
					<Route  	exact path='/' component={Home}/>
					<Route  	path='/user/index' component={User}/>
					<Route  	path='/product' component={ProductRouter}/>
					<Route  	path='/product-category' component={ProductRouter}/>
					<Route  	path='/order/index' component={Order}/>
					<Route  	path='/order/detail/:orderNumber' component={OrderDetail}/>
                    <Redirect   exact from="/index.html" to="/"/>
                    <Redirect   exact from="/user" to="/user/index"/>
                    <Redirect   exact from="/order" to="/order/index"/>
                    <Route      component={ErrorPage}/>
				</Switch>
		    </Layout>
		)
		return (
			<Router>
				<Switch>
					<Route path='/login' component={Login}/>
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