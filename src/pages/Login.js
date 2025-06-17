import React from "react";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../redux/alertsSlice";
import "../resourses/auth.css"; // Optional: keep or enhance

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/users/login", values);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        localStorage.setItem("token", response.data.data);
        window.location.href = "/bookings";
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center auth"
      style={{
        height: "100vh",
        background: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "100%",
          maxWidth: 400,
          background: "white",
          borderRadius: 16,
          border: "1px solid #f0f0f0",
        }}
      >
        <h2 className="text-center mb-2" style={{ color: "#1890ff" }}>
          Himachol Express
        </h2>
        <p className="text-center mb-4" style={{ color: "#555" }}>
          Please login to continue
        </p>
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
            />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </Form.Item>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <Link to="/register">Don't have an account?</Link>
            <button className="btn btn-primary px-4" type="submit">
              Login
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
