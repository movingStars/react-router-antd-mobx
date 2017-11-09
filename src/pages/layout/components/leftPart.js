/**
 * Created by YIJIEDAO2 on 2017/10/14.
 */
import React from 'react';
import { Layout, Menu, Switch, Icon } from 'antd';
import { observer } from 'mobx-react';

const { Sider } = Layout;

const { SubMenu } = Menu;

const LeftPart = observer(({ leftPart, styles, sideMenu }) => {

  let { collapsed, darkTheme, selectKey, goRoute, openKey, switchMenu, selectMenu, switchTheme } = leftPart;

  return(

    <Sider trigger={null} collapsible collapsed={collapsed} className={darkTheme ?  styles.blackSider : styles.whiteSider}>

      <div className={darkTheme ? styles.logo : styles.whiteLogo}>
        {collapsed &&
        <span>易</span>
        }

        {!collapsed &&
        <span>易融后台管理系统</span>
        }
      </div>

      <Menu
        mode={collapsed ? 'vertical': 'inline'}
        theme={darkTheme ? 'dark':'light'}
        selectedKeys={[selectKey]}
        openKeys={[openKey]}
        onOpenChange={(e)=>{switchMenu(e[e.length-1])}}
        onSelect={(e)=>{selectMenu(e.key)}}
      >

        {
          sideMenu.map((item)=>{
            return(
              <SubMenu key={item.title} title={<span><Icon type={item.icon} /><span>{collapsed ? '' : item.title}</span></span>}>
                {
                  item.child.map((childItem,chiKey)=>{
                    return(
                      <Menu.Item key={item.title+chiKey}>
                        <a href={childItem.link} onClick={()=>goRoute(item.title,childItem.title)}>{childItem.title}</a>
                      </Menu.Item>
                    )
                  })
                }
              </SubMenu>
            )
          })
        }

      </Menu>

      {/* 修改主题switch */}
      {
        !collapsed &&

        <div className={styles.changeDiv}>
          <Switch defaultChecked={darkTheme} onChange={() => switchTheme()}/>
        </div>
      }

    </Sider>

  );

});

export default LeftPart;
