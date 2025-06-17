import React from "react";
import { Row, Col, Typography, Button } from "antd";
import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Footer = () => {
  return (
    <div style={styles.footerWrapper}>
      <Row gutter={[40, 32]} justify="space-between" align="top">
        <Col xs={24} md={6}>
          <div>
            <img
              src="/logo.svg" // Replace with actual logo path
              alt="Himachol Logo"
              style={{ height: 40, marginBottom: 20 }}
            />
            <Paragraph style={styles.text}>
              Himachol, owned and operated by Shohoj Limited, is Bangladesh's
              largest online ticket destination, which is committed to making
              your life convenient, easier and smarter.
            </Paragraph>
          </div>
        </Col>

        <Col xs={24} sm={8} md={6}>
          <Title level={5} style={styles.heading}>
            Quick Links
          </Title>
          <ul style={styles.list}>
            {[
              "Home",
              "About Us",
              "Contact Us",
              "Deals and Offer",
              "Insurance Claim",
              "Cancel Ticket",
              "Bus Reservation",
              "Blog",
            ].map((item, i) => (
              <li key={i} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        </Col>

        <Col xs={24} sm={8} md={6}>
          <Title level={5} style={styles.heading}>
            Services
          </Title>
          <ul style={styles.list}>
            {[
              "Bus Tickets",
              "Air Tickets",
              "Train Tickets",
              "Launch Tickets",
              "Event Tickets",
              "Park Tickets",
            ].map((item, i) => (
              <li key={i} style={styles.listItem}>{item}</li>
            ))}
          </ul>
        </Col>

        <Col xs={24} sm={8} md={4}>
          <Title level={5} style={styles.heading}>
            Information
          </Title>
          <ul style={styles.list}>
            <li style={styles.listItem}>Privacy Policy</li>
            <li style={styles.listItem}>Terms & Conditions</li>
          </ul>

          <div style={{ marginTop: 30 }}>
            <FacebookOutlined style={styles.icon} />
            <InstagramOutlined style={styles.icon} />
            <LinkedinOutlined style={styles.icon} />
          </div>
        </Col>
      </Row>

      <Row justify="center" style={{ marginTop: 40 }}>
        <Col>
          <Paragraph style={styles.copyright}>
            Copyright © 2015 - 2025 Shohoj Ltd. All Rights Reserved.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
};

const styles = {
  footerWrapper: {
    backgroundColor: "#319b83",
    padding: "60px 30px 40px",
    color: "#ffffff",
  },
  heading: {
    color: "#ffffff",
    fontWeight: 600,
  },
  text: {
    color: "#ffffff",
    fontSize: 15,
  },
  list: {
    listStyleType: "none",
    padding: 0,
    margin: 0,
  },
  listItem: {
    color: "#ffffff",
    fontSize: 15,
    lineHeight: "30px",
  },
  icon: {
    fontSize: 20,
    color: "#ffffff",
    marginRight: 16,
    cursor: "pointer",
  },
  copyright: {
    color: "#ffffff",
    fontSize: 13,
    textAlign: "center",
  },
};

export default Footer;
