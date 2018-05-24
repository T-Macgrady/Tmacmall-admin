import React from 'react';

import Util from 'util/mm.jsx';
import User from 'service/user-service.jsx';

import './index.scss';

const _mm    = new Util(),
	_user  = new User();

class Login extends React.Component{
	constructor(props){
		super(props);
		this.state={
			username : '',
			password : '',
			redirect : _mm.getUrlParam('redirect') || '/'
		}
	}
	// 组件挂载后设置title
    componentWillMount(){
        document.title = '登录 - TMMALL ADMIN';
    }
    //当用户名发生改变
	onInputChange(e){
		let inputName  = e.target.name,
		    inputValue = e.target.value
		this.setState({
			[inputName] : inputValue
		});	
	}
	//按回车键也登录
	onInputKeyUp(e){
		e.keyCode === 13 ? this.onSubmit() : null;
	}
	//点击登录按钮提交表单
	onSubmit(){
		let loginInfo = {
                username : this.state.username,
                password : this.state.password
            }, 
            checkResult = _user.checkLoginInfo(loginInfo);
		if(checkResult.status){
			_user.login(loginInfo).then((res) => {
				_mm.setStorage('userInfo',res);
                this.props.history.push(this.state.redirect);
			},(errMsg) => {
				_mm.errorTips(errMsg);
			})
		}
        // 验证不通过
        else{
            _mm.errorTips(checkResult.msg);
        }
	}
	render(){
		return(
			<div className="col-md-4 col-md-offset-4" >
				<div className="panel panel-default login-panel">
					<div className="panel-heading">
						<h3 className="panel-title">
							欢迎登录 - TMACMALL后台管理系统
						</h3>
					</div>
					<div className="panel-body">
                        <div className="form-group">
                            <input type="text"
                                name="username"
                                className="form-control"
                                placeholder="请输入用户名" 
                                onKeyUp={e => this.onInputKeyUp(e)}
                                onChange={e => this.onInputChange(e)}/>
                        </div>
                        <div className="form-group">
                            <input type="password" 
                                name="password"
                                className="form-control" 
                                placeholder="请输入密码" 
                                onKeyUp={e => this.onInputKeyUp(e)}
                                onChange={e => this.onInputChange(e)}/>
                        </div>
                        <button className="btn btn-lg btn-primary btn-block"
                            onClick={e => {this.onSubmit(e)}}>登录</button>
					</div>
				</div>
			</div>
		)
	}
}

export default Login;