/**
 * Created by YIJIEDAO2 on 2017/10/14.
 */
import React from 'react';
import { hashHistory } from 'react-router';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { observer } from 'mobx-react';

const { SubMenu } = Menu;
const { Header, Content, Footer } = Layout;

const RightPart = observer(({ rightPart, styles, url2menu, children }) => {

  let { darkTheme, collapsed, switchMenu, switchFold, logOut, parentRoute, RouteTitle } = rightPart;

  const switchFoldFun = () => {

    if(!collapsed){

      switchMenu(undefined);

    }else{
      //url地址转换为menu
      url2menu();

    }
    //折叠切换
    switchFold();

  }

  const logOutFun = () => {

    //退出登录
    logOut();
    //移除session里面的用户名
    sessionStorage.removeItem('username');

    hashHistory.push({
      pathname:'/login'
    });

  }

  return(

    <Layout>

      <Header className={darkTheme ? styles.header : styles.whiteHeader}>

        <Icon
          className={styles.trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={switchFoldFun}
        />

        {/* 顶部导航 */}
        <Menu
          theme={darkTheme ? 'light' : 'dark'}
          mode="horizontal"
          className={styles.topMenu}
          onClick={logOutFun}
        >
          <SubMenu key="sub1" title={<span><Icon type="user" /><span>{ sessionStorage.getItem('username') }</span></span>}>
            <Menu.Item key="1"><Icon type="logout" />退出</Menu.Item>
          </SubMenu>
        </Menu>

      </Header>

      <Content className={styles.content}>

        <Breadcrumb className={styles.bread}>
          <Breadcrumb.Item>当前位置</Breadcrumb.Item>
          <Breadcrumb.Item>{parentRoute}</Breadcrumb.Item>
          <Breadcrumb.Item>{RouteTitle}</Breadcrumb.Item>
        </Breadcrumb>

        {/* 路由容器 */}
        <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
          {children}
        </div>

      </Content>

      <Footer style={{ textAlign: 'center' }}>
        易融后台管理系统 ©2017 Created by 滁州众人信
      </Footer>

    </Layout>

  );

});

export default RightPart;
