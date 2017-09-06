import React from 'react';
import {
	connect
} from 'dva';
import Login from '../components/Login';

class LoginPage extends React.Component {
	constructor(props) {
		super(props);
	}
	onChange = (e) => {
		var data = this.props.user;
		data[e.target.name] = e.target.value;
		this.props.dispatch({
			type: 'user/change',
			payload: data,
		});
	}
	btnClick = (e) => {
		var data = this.props.user;
		console.log(data);
	}
	render() {
		return (
			<Login btnClick={this.btnClick} onChange={this.onChange} user={this.props.user}/>
		);
	}
}

// export default Products;
export default connect(({
	user
}) => ({
	user,
}))(LoginPage);