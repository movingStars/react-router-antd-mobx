/**
 * Created by YIJIEDAO2 on 2017/10/13.
 */
import React from 'react';
import { Router, Route, hashHistory, Redirect } from 'react-router';
import stores from './store.config';
import { Provider } from 'mobx-react';

//框架页面
import Layout from './pages/layout/components/index';

//登陆页面
import Login from './pages/login/components/index';

//功能页面
import Nav1 from './pages/nav1/index';
import Nav2 from './pages/nav2/index';
import Setting from './pages/setting/index';

const RouteConfig = (
  <Router history={hashHistory}>
    <Route path="/login" component={Login} />
    <Route path="" component={Layout}>
      <Route path="/setting" component={Setting} />
      <Route path="/nav1" component={Nav1} />
      <Route path="/nav2" component={Nav2} />
    </Route>
    <Redirect from='*' to='/login'  />
  </Router>
);

const RouteDiv = () => {
  return(
    <Provider {...stores}>

      {RouteConfig}

    </Provider>
  )
}

export default RouteDiv


