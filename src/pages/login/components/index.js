/**
 * Created by YIJIEDAO2 on 2017/10/13.
 */
import React from 'react';
import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import { Form, Icon, Input, Button, message } from 'antd';
const FormItem = Form.Item;

import styles from './index.css';
import bgImg from '../../../images/bg.jpg';

const style = {
  loginBg:{
    height: '100vh',
    width: '100vw',
    backgroundImage: 'url('+bgImg+')',
    backgroundSize: 'cover'
  }
}

@observer(['login']) class Login extends React.PureComponent {

  handleSubmit = (e) => {

    e.preventDefault();

    let form = this.props.form;

    form.validateFields((err, values) => {

      if (!err) {
        console.log(values)
        //登陆请求
        this.props.login.handleLogin(values.username, values.password, form);

      }else {

        message.error('用户名和密码不能为空！')

      }
    });
  }

  render(){

    const { getFieldDecorator } = this.props.form;
    const { loading } = this.props.login;

    console.log(loading)

    return(

      <div style={style.loginBg}>

        <Form onSubmit={this.handleSubmit} className={styles.loginForm}>

          <div className={styles.title}>易融后台管理系统</div>

          <FormItem hasFeedback className={styles.item}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: ' ' }]
            })(
              <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="用户名" />
            )}
          </FormItem>

          <FormItem hasFeedback className={styles.item}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: ' '}]
            })(
              <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="密码" />
            )}
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit" className={styles.loginButton} loading={loading}>
              登陆
            </Button>
          </FormItem>

        </Form>

      </div>

    )

  }

}

export default Form.create()(Login);
