import React from "react";
import { Form, Input, Rate, Button } from "antd";

const ReviewForm = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Submitted:", values);
  };

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "auto",
        padding: 24,
        background: "#fff",
        borderRadius: 8,
      }}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        {/* Name */}
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter your name" }]}
        >
          <Input placeholder="Enter your name" />
        </Form.Item>

        {/* Email */}
        <Form.Item
          name="email"
          label="Email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email address" },
          ]}
        >
          <Input placeholder="Enter your email" />
        </Form.Item>

        {/* Rating */}
        <Form.Item
          name="rating"
          label="Rating"
          rules={[{ required: true, message: "Please give a rating" }]}
        >
          <Rate />
        </Form.Item>

        {/* Feedback */}
        <Form.Item
          name="feedback"
          label="Feedback"
          rules={[{ required: true, message: "Please enter your feedback" }]}
        >
          <Input.TextArea rows={4} placeholder="Enter your answer" />
        </Form.Item>

        {/* Submit */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ backgroundColor: "#00796b", borderColor: "#00796b" }}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ReviewForm;
