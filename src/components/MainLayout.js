import React from 'react';
import { connect } from 'dva';
import {Link} from 'react-router';
import { Layout, Menu, Breadcrumb, Icon, Button, Avatar } from 'antd';
import styles from './MainLayout.less';
const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class MainLayout extends React.Component {
	constructor(props) {
		super(props);
	}

	state = {
    	collapsed: false,
    	current: '1',
    	openKeys: [],
  	}
  	toggleCollapsed = () => {
	    this.setState({
	      collapsed: !this.state.collapsed,
	    });
  	}
  	
	handleClick = (e) => {
		console.log('Clicked: ', e);
		this.setState({ current: e.key });
	}
	onOpenChange = (openKeys) => {
		const state = this.state;
		const latestOpenKey = openKeys.find(key => !(state.openKeys.indexOf(key) > -1));

		let nextOpenKeys = [];
		if (latestOpenKey) {
		  nextOpenKeys = this.getAncestorKeys(latestOpenKey).concat(latestOpenKey);
		}
		this.setState({ openKeys: nextOpenKeys });
	}
	getAncestorKeys = (key) => {
		const map = {
		  sub3:['sub2','sub3']
		};
		return map[key] || [];
	}



	render() {
		return (
	<Layout style={{height:`100%`}}>
		<Sider style={{ background: '#fff' }} trigger={null} collapsible breakpoint="md" onCollapse={(collapsed, type) => { this.toggleCollapsed(); }} collapsed={this.state.collapsed}>
		<div  className={styles.logo}>
			<Link to="/">
		    	<Avatar style={{ backgroundColor: '#87d068' }}  size={this.state.collapsed?"":"large"} icon="user" />
			</Link>
		</div>
			
			<Menu
			openKeys={this.state.openKeys}
        	selectedKeys={[this.state.current]}
			mode="inline"
			onOpenChange={this.onOpenChange}
        	onClick={this.handleClick}
			style={{ height: '100%', borderRight: 0 }} >
				<SubMenu key="sub1" title={<span><Icon type="user" /><span>图表学习</span></span>}>
					<Menu.Item key="1">
						<Link to="/map">
					    中国地图
						</Link>
					</Menu.Item>
					<Menu.Item key="2">option2</Menu.Item>
					<Menu.Item key="3">option3</Menu.Item>
					<Menu.Item key="4">option4</Menu.Item>
				</SubMenu>
				<SubMenu key="sub2" title={<span><Icon type="laptop" /><span>subnav 2</span></span>}>
					<Menu.Item key="5">option5</Menu.Item>
					<Menu.Item key="6">option6</Menu.Item>
					<Menu.Item key="7">option7</Menu.Item>
					<Menu.Item key="8">option8</Menu.Item>
					<SubMenu key="sub3" title={<span><Icon type="notification" /><span>subnav 3</span></span>}>
					<Menu.Item key="9">option9</Menu.Item>
					<Menu.Item key="10">option10</Menu.Item>
					<Menu.Item key="11">option11</Menu.Item>
					<Menu.Item key="12">option12</Menu.Item>
				</SubMenu>
				</SubMenu>
				<SubMenu key="sub4" title={<span><Icon type="notification" /><span>subnav 3</span></span>}>
					<Menu.Item key="13">option9</Menu.Item>
					<Menu.Item key="14">option10</Menu.Item>
					<Menu.Item key="15">option11</Menu.Item>
					<Menu.Item key="16">option12</Menu.Item>
				</SubMenu>
			</Menu>
		</Sider>
		
		<Layout>
			<Header  style={{ background: '#fff',marginLeft:5,marginRight:5 }} >
			<Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggleCollapsed}
            />
			</Header>
			<Content style={{ background: '#fff', padding: 24, margin: 5, height: `auto` }}>
			{this.props.children}
			</Content>
			<Footer style={{ textAlign: 'center' }}>
			Ant Design ©2016 Created by Ant UED
			</Footer>
		</Layout>
	</Layout>
			)

	}
};
export default MainLayout;