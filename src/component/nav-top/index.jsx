/*
* @Author: Lizh
* @Date:   2018-05-20 23:06:56
* @Last Modified by:   Lizh
* @Last Modified time: 2018-05-21 11:19:52
*/
 
import React from 'react';
import { Link }     from 'react-router-dom';

class NavTop extends React.Component{
	render(){
		return (
			<div className="navbar navbar-default top-navbar">
	            <div className="navbar-header">
	                <Link className="navbar-brand" to="/"><b>Tmac</b>mall</Link>
	            </div>

	            <ul className="nav navbar-top-links navbar-right">
	               
	                
	                <li className="dropdown">
	                    <a className="dropdown-toggle" href="javascript:;">
	                        <i className="fa fa-user fa-fw"></i>
                             <span>欢迎您</span>
	                    </a>
	                    <ul className="dropdown-menu dropdown-user">
	                        <li>
		                        <a>
		                        	
	                                <i className="fa fa-sign-out fa-fw"></i>
	                                <span>退出登录</span>
		                        </a>
	                        </li>
	                    </ul>
	                
	                </li>
	                
	            </ul>
	        </div>
		);
	}
}

export default NavTop;