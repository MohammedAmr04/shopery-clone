import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router';


type FieldType = {
  username?: string;
  password?: string;
  remember?: boolean;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login: React.FC = () => (
  <div className="flex justify-center items-center min-h-screen ">
    
    <div className="bg-background shadow-md rounded-2xl px-3 pt-5 pb-8  w-md">
      <h1 className="text-3xl font-semibold text-center mb-6 poppins">Sign In</h1>
      

      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className='max-w-full :placeholder-pink-50 '
      >
        <Form.Item<FieldType>
          name="username"
          rules={[
            { required: true, message: 'Please input your Email!' },
            { type: 'email', message: 'Email must include @ and be valid!' },
          ]}
        >
          <Input placeholder="Email" size="large"  className="!placeholder:text-pink-500"/>
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[
            { required: true, message: 'Please input your password!' },
            { min: 6, message: 'Password must be at least 6 characters!' },
            {
               pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
               message: 'Password must contain at least one letter!',
             },
          ]}
        >
          <Input.Password placeholder="Password" size="large"  className="!placeholder:text-pink-500"/>
        </Form.Item>

        <div className="flex justify-between items-center mb-4 font-semibold ">
          <Form.Item<FieldType> name="remember" valuePropName="checked" noStyle>
            <Checkbox className='remeber'>Remember me</Checkbox>
          </Form.Item>
          <Link to="/ForgotPassword" className=" font-semibold ">
            Forget Password
          </Link>
        </div>

        <Form.Item>
          <Button
            type="primary"
            size='middle'
            htmlType="submit"
            className="w-full font-bold  bg-primary hover:bg-green-700 text-white"
          >Login
          </Button>
        </Form.Item>

        <p className="text-center text-gray-600 font-medium">
          Don’t have account?{" "}
          <Link to="/SignUp" className="font-semibold text-text ">
             <span className='text-text hover:text-primary'>Register</span>
          </Link>
        </p>
      </Form>
    </div>
  </div>
);

export default Login;
