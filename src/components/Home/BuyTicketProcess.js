import React from "react";
import { Row, Col, Card, Typography } from "antd";
import {
  ScheduleOutlined,
  DollarCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function BuyTicketsSteps() {
  return (
    <section style={{ padding: "40px 16px", backgroundColor: "#f9fafb" }}>
      <div style={{ maxWidth: 1000, margin: "0 auto", textAlign: "center" }}>
        <Title level={3}>Buy Tickets in 3 Easy Steps</Title>
        <Paragraph>
          Everything you need to plan your travel and buy tickets easily.
        </Paragraph>

        <Row gutter={[24, 24]} justify="center" style={{ marginTop: 32 }}>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ height: "100%" }}>
              <ScheduleOutlined style={{ fontSize: "2rem", color: "#1677ff" }} />
              <Title level={4} style={{ marginTop: 16 }}>Search Trips</Title>
              <Paragraph>
                Find your preferred travel route and time from a wide range of
                options.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ height: "100%" }}>
              <DollarCircleOutlined style={{ fontSize: "2rem", color: "#10b981" }} />
              <Title level={4} style={{ marginTop: 16 }}>Select & Pay</Title>
              <Paragraph>
                Choose your seat and make payment using multiple options securely.
              </Paragraph>
            </Card>
          </Col>
          <Col xs={24} sm={12} md={8}>
            <Card bordered={false} style={{ height: "100%" }}>
              <CheckCircleOutlined style={{ fontSize: "2rem", color: "#f59e0b" }} />
              <Title level={4} style={{ marginTop: 16 }}>Get Ticket</Title>
              <Paragraph>
                Receive e-ticket via SMS/email. Just show it while boarding. Easy!
              </Paragraph>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}
