import React from 'react';
import PropTypes from 'prop-types';
import {  Icon, Popconfirm, Button, Input, Card  } from 'antd';
import styles from './Login.css';
class Login extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const suffix = <Icon type="close-circle" />;
		  return (
		   <div className={styles.login_div}>
		    <Card title="登录" bordered={false} className={styles.login_card}>
		      <Input className={styles.login_input} placeholder="UserName" prefix={<Icon type="user" />} suffix={suffix} name="userName" value={this.props.user.userName} onChange={this.props.onChange}/>
		      <Input type="password" className={styles.login_input} placeholder="PassWord" prefix={<Icon type="key" />} suffix={suffix} name="passWord" value={this.props.user.passWord} onChange={this.props.onChange}  />

		      <Button onClick={this.props.btnClick}>Login</Button> <a className={styles.login_forget}>forget password?</a>
		    </Card>
		  </div>

	  );
	}
};
Login.propTypes = {
  onChange: PropTypes.func.isRequired,
  btnClick: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
export default Login;
