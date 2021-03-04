import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Form, Input, Button } from 'antd';

const layout = {
  labelCol: {
    span: 2,
  },
  wrapperCol: {
    span: 8,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 2,
    span: 16,
  },
};

export default function NewAnimalForm({onAdd}){
  const formRef = React.createRef();
  return (
    <Form {...layout} ref={formRef} name="control-ref" onFinish={onAdd}>
      <Form.Item
        name="name"
        label="name"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          New Animal
        </Button>
      </Form.Item>
    </Form>
  );
}
