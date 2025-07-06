import React, { useState } from "react";
import { Form, Input, Button, Typography, message, Card } from "antd";
import Navbar from "./Home/Navbar";

const { Title, Paragraph } = Typography;

const ResetPassword = () => {
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await fetch("api/password/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: values.email }),
      });

      const data = await res.json();

      if (res.ok) {
        message.success(data.message || "Password reset link sent to your email.");
      } else {
        message.error(data.error || "Invalid email or user not found.");
      }
    } catch (error) {
      message.error("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
        <Navbar />
        <div style={styles.container}>
      <Card bordered={false} style={styles.card} bodyStyle={{ padding: 30 }}>
        <Title level={3} style={{ textAlign: "center", marginBottom: 10 }}>
          Reset Your Password
        </Title>
        <Paragraph style={{ textAlign: "center", color: "#888", marginBottom: 30 }}>
          Enter your email address below. We'll send you a link to reset your password.
        </Paragraph>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="email"
            label="Email Address"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input placeholder="e.g. yourname@example.com" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              loading={loading}
              style={{ marginTop: 10 }}
            >
              Send Reset Link
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f0f2f5",
    padding: 20,
  },
  card: {
    width: "100%",
    maxWidth: 420,
    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
    borderRadius: 12,
    backgroundColor: "#fff",
  },
};

export default ResetPassword;
