import React from 'react';

import {
    Form,
    Input,
    Icon,
    Button,
} from 'antd';

const Item = Form.Item

function Login() {

    return (
        <div className='login'>
            <header className='login-header'>
                <img src={logo} alt="logo" />
                <h1>Dash</h1>
            </header>
            <section className='login-context'>
                <h3>用户登陆</h3>
                <Form onSubmit={login} className="login-form">
                    <Item>
                        <Input prefix={<Icon type="user"  />}
                            placeholder="用户名" />
                    </Item>
                    <Item>
                        <Input prefix={<Icon type="lock"} />}
                            type="password" placeholder="密码" />
                    </Item>
                </Form>
            </section>
        </div>

    )
}

export default Login