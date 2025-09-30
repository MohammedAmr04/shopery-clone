import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router";

type FieldType = {
  email?: string;
  password?: string;
  rePassword?: string;
  accept?: string;
};


const SignUp: React.FC = () => (
  <div className="flex justify-center items-center py-20 bg-background">
    <div className="bg-background shadow-md rounded-xl px-8 pt-10 pb-8 w-md">
      <h1 className="text-3xl font-semibold leading-tight text-center mb-6 font-poppins text-gray-900">Create an Account</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        <Form.Item<FieldType>
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 0 }}
        >
          <Input placeholder="Email" size="large" className="placeholder-[var(--ant-primary-color)]" />
        </Form.Item>

        <Form.Item<FieldType>
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 0 }}
        >
          <Input.Password placeholder="Password" size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          name="rePassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password!" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords do not match!")
                );
              },
            }),
          ]}
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 0 }}
        >
          <Input.Password placeholder="Confirm Password" size="large" />
        </Form.Item>

        <Form.Item<FieldType>
          name="accept"
          valuePropName="checked"
          wrapperCol={{ span: 24 }}
          labelCol={{ span: 0 }}
        >
          <Checkbox className="w-full text-info">Accept all terms & conditions</Checkbox>
        </Form.Item>

        <Form.Item labelCol={{ span: 0 }} wrapperCol={{ span: 24 }}>
          <Button type="primary" className="rounded-[43px]!" htmlType="submit" size="large" block>
            Create Account
          </Button>
        </Form.Item>
        <p className="text-center">
          Already have an account? <Link className="text-text" to={"/login"}>Log in</Link>
        </p>
      </Form>
    </div>
  </div>
);

export default SignUp;
