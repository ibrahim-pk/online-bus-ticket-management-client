import React from "react";
import { Row, Col, Typography } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const TravelOptions = () => {
  return (
    <div
      style={{
        backgroundColor: "#f7f9fa",
        padding: "40px 20px",
        minHeight: "100vh",
      }}
    >
      <Row
        gutter={[32, 32]}
        align="middle"
        justify="space-between"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Left Content */}
        <Col xs={24} md={12}>
          <Title level={2} style={{ fontWeight: 700 }}>
            All your{" "}
            <span style={{ color: "#00A651" }}>travel options</span> in one
            place
          </Title>
          <Paragraph style={{ fontSize: "16px", color: "#555" }}>
            More than <strong>1,000</strong> trusted travel partners across
            trains, buses, flights, and launch so that you can focus on the
            journey.
          </Paragraph>

          <Row gutter={16} style={{ marginTop: "30px" }}>
            <Col>
              <Title level={4} style={{ color: "#00A651" }}>
                250 Million+
              </Title>
              <Paragraph>Tickets Sold</Paragraph>
            </Col>
            <Col>
              <Title level={4} style={{ color: "#00A651" }}>
                3000+
              </Title>
              <Paragraph>Routes</Paragraph>
            </Col>
            <Col>
              <Title level={4} style={{ color: "#00A651" }}>
                10 Million+
              </Title>
              <Paragraph>Happy Users</Paragraph>
            </Col>
          </Row>
        </Col>

        {/* Right Image */}
        <Col xs={24} md={12} style={{ textAlign: "center" }}>
          <img
            src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/bus-ticket-booking-ad-design-template-bad1c357f7e908ce0ca2a539b7c62955_screen.jpg?ts=1719630041"
            alt="Travel App"
            style={{ maxWidth: "70%", height: "auto" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default TravelOptions;
