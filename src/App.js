import React, { Component } from 'react';
import { Layout, Menu, Icon, Breadcrumb} from 'antd';
import './App.css';
import './style/antd.min.css'

const {
  Header,
  Sider,
  Content
} = Layout;

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
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>基本组件</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>表单编辑</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>表格</span>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="upload" />
              <span>路由</span>
            </Menu.Item>
            <Menu.Item key="5">
              <Icon type="upload" />
              <span>权限演示</span>
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
            <Breadcrumb style={{ display: 'inline-block', verticalAlign: 'baseline'}}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item><a href="">一级</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="">二级</a></Breadcrumb.Item>
            </Breadcrumb>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: 'calc(100vh - 112px)' }}>
            Content
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
