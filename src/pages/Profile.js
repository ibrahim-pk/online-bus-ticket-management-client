import React, { useEffect, useState } from "react";
import { Form, Input, Button, Card, Typography, message } from "antd";

const { Title } = Typography;

const Profile = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

  // Get user from localStorage on component mount
  useEffect(() => {
    const localUser = localStorage.getItem("bus-user");
    if (localUser) {
      const user = JSON.parse(localUser);
      setUserData(user);
      form.setFieldsValue({
        name: user.name,
        email: user.email,
        password: user.password,
      });
    }
  }, [form]);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const res = await fetch("api/users/edit", {
        method: "PUT", // Assuming it's a PUT request
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...values, _id: userData._id }), // Send user ID too
      });

      const data = await res.json();

      if (res.ok) {
        message.success("Profile updated successfully");
        localStorage.setItem("bus-user", JSON.stringify(data.updatedUser));
      } else {
        message.error(data.error || "Failed to update profile");
      }
    } catch (err) {
      message.error("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <Card style={styles.card}>
        <Title level={4} style={{ textAlign: "center", marginBottom: 20 }}>
          Edit Profile
        </Title>

        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              loading={loading}
              block
              style={{ marginTop: 10 }}
            >
              Update Profile
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

const styles = {
  container: {
    minHeight: "80vh",
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

export default Profile;
