import React from 'react';
import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';

type FieldType = {
  email?: string;
  password?: string;
  rePassword?:string;
  accept?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
  console.log('Success:', values);
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const SignUp: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      name="email"
      rules={[{ required: true, message: 'Please input your email!' }]}
    >
      <Input placeholder="email" />
    </Form.Item>

    <Form.Item<FieldType>
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password placeholder='password' />
    </Form.Item>

    <Form.Item<FieldType>
      name="rePassword"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password placeholder='Confirm Password' />
    </Form.Item>

    <Form.Item<FieldType> name="accept" label={null}>
      <Checkbox>Accept all terms & condetions</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  
);

export default SignUp;