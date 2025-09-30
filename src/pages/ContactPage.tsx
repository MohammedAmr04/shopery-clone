import React from "react";
import { Form, Input, Button, Typography } from "antd";
import Breadcrumb from "../components/ui/BreadcrumbComponent";
import { FiPhoneCall } from "react-icons/fi";
import { PiMapPinLineThin } from "react-icons/pi";
import { HiOutlineMailOpen } from "react-icons/hi";

const { Title } = Typography;

type ContactForm = {
  name?: string;
  email?: string;
  message?: string;
  subject?: string;
};

const Contact: React.FC = () => {
  const onFinish = (values: ContactForm) => {
    console.log("Form values:", values);
  };

  return (
    <>
      <Breadcrumb />
      <div className="flex flex-col lg:flex-row justify-center items-stretch m-auto gap-6 pt-10 px-4 bg-gray-50">
      
        <div className="bg-card shadow-xl rounded-md flex flex-col pt-6 pb-4 sm:flex-row lg:flex-col sm:divide-x lg:divide-x-0 lg:divide-y divide-gray-200 w-full sm:w-auto lg:w-72 h-full">
          <div className="flex flex-col items-center justify-center gap-2 p-6 flex-1">
            <PiMapPinLineThin className="text-icon text-6xl" />
            <p className="text-textcontact !leading-relaxed text-center">
              2715 Ash Dr. San Jose, South <br /> Dakota 83475
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 p-6 flex-1">
            <HiOutlineMailOpen className="text-icon text-6xl" strokeWidth={1} />
            <p className="text-textcontact !leading-relaxed text-center">
              Proxy@gmail.com <br /> Help.proxy@gmail.com
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2 p-6 flex-1">
            <FiPhoneCall className="text-icon text-6xl" strokeWidth={1} />
            <p className="text-textcontact !leading-relaxed text-center">
              (219) 555-0114 <br /> (164) 333-0487
            </p>
          </div>
        </div>

        <div className="bg-card shadow-xl rounded-md p-6 sm:p-8 w-full lg:w-[600px] h-full">
          <Title level={2} className="poppins text-primary mb-4">
            Just Say Hello!
          </Title>
          <p className="poppins text-info mb-6 !leading-tight pe-0 md:pe-6">
            Do you fancy saying hi to me or you want to get started with your
            project and you need my help? Feel free to contact me.
          </p>

          <Form
            name="contact"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Form.Item<ContactForm>
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
              >
                <Input placeholder="Your Name" size="large" />
              </Form.Item>

              <Form.Item<ContactForm>
                name="email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Email must be valid" },
                ]}
              >
                <Input placeholder="Your Email" size="large" />
              </Form.Item>
            </div>

            <Form.Item<ContactForm>
              name="message"
              rules={[{ required: true, message: "Please enter your message" }]}
            >
              <Input placeholder="Write Your Message" className="resize-none" />
            </Form.Item>

            <Form.Item<ContactForm>
              name="subject"
              rules={[{ required: true, message: "Please enter your subject" }]}
            >
              <Input.TextArea
                rows={4}
                placeholder="Subject"
                className="resize-none"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="w-full sm:w-52 !rounded-4xl !font-semibold bg-primary hover:bg-green-700"
              >
                Send Message
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Contact;
