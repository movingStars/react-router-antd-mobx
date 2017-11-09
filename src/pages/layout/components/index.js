/**
 * Created by YIJIEDAO2 on 2017/5/30.
 */
import React from 'react';
import { observer } from 'mobx-react';
import { action, useStrict } from 'mobx';

import styles from './index.css';
import LeftPart from './leftPart';
import RightPart from './rightPart';

//ant组件
import { Layout } from 'antd';

//侧边栏配置
import { sideMenu } from '../../../utils/constant';

useStrict(true);

@observer(['layOut']) export default class LayOut extends React.Component {

  componentDidMount(){

    if(sessionStorage.getItem('username')){

      this.props.layOut.login();

    }

    this.url2menu();

  }

  @action
  url2menu = () => {

    let flag = window.location.href.split('#')[1].substr(1);

    for(let i = 0; i < sideMenu.length; i++){

      for(let j = 0; j < sideMenu[i].child.length; j++){

        let dad = sideMenu[i];//一级菜单

        let initChild = sideMenu[i].child[j];//二级菜单

        if(initChild.link.substr(1) == flag){

          this.props.layOut.setDefMenu(dad.title,initChild.index,initChild.title);

        }

      }

    }

  }

  render(){

    const { layOut, children } = this.props;

    console.log(this.props.children)

    return(

      <Layout style={{ height: '100vh', flexDirection:'row' }}>

        {/* 左边侧边导航 */}
        <LeftPart leftPart={layOut} styles={styles} sideMenu={sideMenu}/>

        {/* 右边内容部分 */}
        <RightPart rightPart={layOut} styles={styles} url2menu={this.url2menu} children={children}/>

      </Layout>

    )

  }

}
