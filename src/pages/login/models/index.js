/**
 * Created by YIJIEDAO2 on 2017/10/24.
 */
import { observable, action, useStrict } from 'mobx';
import { hashHistory } from 'react-router';
import { message } from 'antd';
useStrict(true);

class loginStore {

  loading;

  constructor(){
    this.loading = false;
  }

  @action handleLogin = (username, password, form) => {

    this.loading = true;

    setTimeout(()=>{

      action(()=>{this.loading = false;})();

      if(username == '111' && password == '111'){
        hashHistory.push({
          pathname:'/nav2'
        })
        message.success('登陆成功！');

      }else{
        form.resetFields();
        message.error('用户名或密码错误！');

      }

    },3000)

  }

}

const login = new loginStore();

export default login;
