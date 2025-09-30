import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { Link } from 'react-router';
import { Typography } from "antd";
const { Title } = Typography;

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
    <div className="bg-background shadow-md rounded-2xl px-3 pt-5 pb-8 w-md">
      <Title className="text-text title text-3xl font-semibold text-center mb-6 poppins">
        Sign In
      </Title>

      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        className="max-w-full !p-2"
      >
      
        <Form.Item<FieldType>
          name="username"
          className="!mb-4"
          rules={[
            { required: true, message: "Please input your Email!" },
            { type: "email", message: "Email must include @ and be valid!" },
          ]}
        >
          <Input
            placeholder="Email"
            size="large"
            className="!placeholder-info focus:!placeholder-primary"
          />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          className="!mb-4"
          rules={[
            { required: true, message: "Please input your password!" },
            { min: 6, message: "Password must be at least 6 characters!" },
            {
              pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
              message: "Password must contain at least one letter!",
            },
          ]}
        >
          <Input.Password
            placeholder="Password"
            size="large"
            classNames={{
            input: "!placeholder-info focus:!placeholder-primary"
            }}/>
        </Form.Item>
        <div className="flex justify-between items-center mb-4 font-semibold ">
          <Form.Item<FieldType> name="remember" valuePropName="checked" noStyle>
            <Checkbox className="remeber !text-gray-600">Remember me</Checkbox>
          </Form.Item>
          <Link
            to="/ForgotPassword"
            className="font-semibold !text-gray-600 hover:!text-primary hover:!underline"
          >
            Forget Password
          </Link>
        </div>
        <Form.Item>
          <Button
            type="primary"
            size="middle"
            htmlType="submit"
            className="w-full !font-semibold !rounded-4xl bg-primary hover:bg-green-700 text-white"
          >
            Login
          </Button>
        </Form.Item>
        <p className="text-center text-gray-600 font-medium">
          Don’t have account?{" "}
          <Link to="/src/components/SignUp.tsx" className="font-semibold text-text">
            <span className="text-text hover:text-primary hover:underline">
              Register
            </span>
          </Link>
        </p>
      </Form>
    </div>
  </div>
);

export default Login;
