/**
 * Created by YIJIEDAO2 on 2017/10/25.
 */
import { observable, action, autorun, useStrict } from 'mobx';

class layOutStore{

  @observable isLogin;
  @observable collapsed;
  @observable darkTheme;
  @observable openKey;//当前选择的一级菜单
  @observable selectKey;//当前选择的二级菜单
  @observable RouteTitle;//面包屑名称
  @observable parentRoute;//第一级面包屑名称,替代openkey，防止丢失

  constructor(){
    this.isLogin = false;
    this.collapsed = false;
    this.darkTheme = true;
    this.openKey = '';
    this.selectKey = '';
    this.RouteTitle = '';
    this.parentRoute = '';
  }

  @action login = () => {
    this.isLogin = true;
  }

  @action logOut = () => {
    this.isLogin = false;
  }

  @action switchFold = () => {
    this.collapsed = !this.collapsed;
  }

  @action switchTheme = () => {
    this.darkTheme = !this.darkTheme;
  }

  @action switchMenu = (key) => {
    this.openKey = key;
  }

  @action selectMenu = (key) => {
    this.selectKey = key;
  }

  @action goRoute = (key, title) => {
    this.openKey = key;
    this.parentRoute = key;
    this.RouteTitle = title;
  }

  @action setDefMenu = (dadTitle, childIndex, childTitle) => {
    this.openKey = dadTitle;
    this.selectKey = dadTitle + childIndex;
    this.RouteTitle = childTitle;
    this.parentRoute = dadTitle;
  }

}

const layOut = new layOutStore();

export default layOut;
