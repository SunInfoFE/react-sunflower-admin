import React, { Component } from 'react';
import { Layout, Menu, Icon} from 'antd';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import page1 from './components/pages/page1'
import page2 from './components/pages/page2'
import page3 from './components/pages/page3'
import './App.css';
import './style/antd.min.css'

const {Header,Sider,Content} = Layout;
 // TODO: 路由待加入
class App extends Component {
  state = {
    collapsed: false
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }
  render() {
    return (
      <Router>
      <Layout style={{height: '100%'}}>
      <Sider
        trigger={null}
        collapsible
        collapsed={this.state.collapsed}
      >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="page1">
              <Icon type="user" />
              <span>nav 1</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="page2">
              <Icon type="video-camera" />
              <span>nav 2</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
            <Link to="page3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Link>
            </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={this.toggle}
          />
        </Header>
        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff',minHeight: 'calc(100% - 200px)'}}>
          <Route exact path='/page1' component={page1}></Route>
          <Route path='/page2' component={page2}></Route>
          <Route path='/page3' component={page3}></Route>
        </Content>
      </Layout>
    </Layout>
    </Router>
    );
  }
}

export default App;
