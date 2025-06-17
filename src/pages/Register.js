import React from "react";
import { Form, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../redux/alertsSlice";
import "../resourses/auth.css";

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/users/register", values);
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        navigate("/login");
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
        background: "linear-gradient(to right, #f6d365 0%, #fda085 100%)",
      }}
    >
      <div
        className="card shadow-lg p-4"
        style={{
          width: "100%",
          maxWidth: 400,
          background: "#fff",
          borderRadius: "16px",
          border: "1px solid #eee",
        }}
      >
        <h2 className="text-center mb-2" style={{ color: "#ff5722" }}>
          Register for Himachol
        </h2>
        <p className="text-center mb-4" style={{ color: "#666" }}>
          Create an account to book tickets.
        </p>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Full Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Your full name"
            />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <input
              type="email"
              className="form-control"
              placeholder="example@mail.com"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter a password" }]}
          >
            <input
              type="password"
              className="form-control"
              placeholder="Choose a strong password"
            />
          </Form.Item>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <Link to="/login">Already have an account?</Link>
            <button className="btn btn-warning px-4" type="submit">
              Register
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Register;
