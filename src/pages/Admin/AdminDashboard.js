import React, { useEffect, useState } from "react";
import {
  CreditCardOutlined,
  CarOutlined,
  ApartmentOutlined,
  UserOutlined,
  TeamOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import { Card, Row, Col, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

function AdminDashboard() {
  const username = "Admin"; // Optional: get from localStorage/context
  const [summary, setSummary] = useState({
    totalBookings: 0,
    totalBuses: 0,
    totalUsers: 0,
    totalEarnings: 0,
  });

  const getDashboardData = async () => {
    try {

      const response = await axios.get("/api/users/dashboard-summary");
      if (response.data.success) {
        setSummary(response.data.data);
      } else {
        message.error("Failed to fetch dashboard data");
      }
    } catch (error) {
      message.error("Something went wrong while loading dashboard data");
    }
  };

  useEffect(() => {
    getDashboardData();
  }, []);

  const data = [
    {
      title: "Bookings",
      count: summary.totalBookings,
      icon: <CreditCardOutlined style={{ fontSize: 24 }} />,
      color: "#1890ff",
      path: "/admin/bookings",
    },
    {
      title: "Buses",
      count: summary.totalBuses,
      icon: <CarOutlined style={{ fontSize: 24 }} />,
      color: "#13c2c2",
      path: "/admin/buses",
    },
    {
      title: "Routes",
      count: 9,
      icon: <ApartmentOutlined style={{ fontSize: 24 }} />,
      color: "#f5222d",
    },
    {
      title: "Customers",
      count: summary.totalUsers,
      icon: <UserOutlined style={{ fontSize: 24 }} />,
      color: "#595959",
      path: "/admin/users",
    },
    {
      title: "Admins",
      count: 2,
      icon: <TeamOutlined style={{ fontSize: 24 }} />,
      color: "#8c8c8c",
    },
    {
      title: "Earnings",
      count: summary.totalEarnings,
      icon: <DollarOutlined style={{ fontSize: 24 }} />,
      color: "#52c41a",
    },
  ];

  return (
    <div className="dashboard-container">
      <h3>
        Welcome, <span style={{ color: "#1890ff" }}>{username}</span>
      </h3>

      <Row gutter={[16, 16]} className="mt-3">
        {data.map((item, idx) => (
          <Col xs={24} sm={12} md={8} key={idx}>
            <Card
              style={{
                borderLeft: `5px solid ${item.color}`,
                boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              }}
            >
              <div className="d-flex justify-content-between">
                <div>
                  <div
                    className="fw-bold"
                    style={{
                      backgroundColor: item.color,
                      color: "#fff",
                      padding: "4px 12px",
                      borderRadius: 3,
                    }}
                  >
                    {item.title}
                  </div>
                  <div className="text-muted mt-2">
                    Total {item.title}
                  </div>
                  <div className="fs-5 fw-bold">{item.count}</div>
                  {item.path && (
                    <Link to={item.path} style={{ color: item.color }}>
                      View More →
                    </Link>
                  )}
                </div>
                <div className="align-self-start">{item.icon}</div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default AdminDashboard;
