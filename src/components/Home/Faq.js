import React from "react";
import { Row, Col, Typography, Button, Collapse } from "antd";

const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

const FAQSection = () => {
  const faqData = [
    {
      question: "How can I purchase a ticket from Shohoz Platform?",
      answer:
        "You can purchase a ticket by visiting our website or app, selecting your route, date, and choosing your seat. Then proceed to payment.",
    },
    {
      question: "Is there any time frame to buy a ticket?",
      answer:
        "Yes, tickets are available for purchase up to 30 minutes before departure depending on the operator and availability.",
    },
    {
      question: "What is the process of Migrate or Cancelling a ticket?",
      answer:
        "You can cancel your ticket from your account dashboard. Go to 'My Tickets', select the ticket, and click on 'Cancel'.",
    },
    {
      question: "How can I check Shohoz’s offers?",
      answer:
        "You can visit our Offers section on the website or app home page. We update it regularly with new deals.",
    },
    {
      question:
        "After purchasing a ticket from Shohoz, I cancelled that ticket due to a personal issue or the operator cancelled their trip. But I have not received my refund yet. What should I do now?",
      answer:
        "As per our refund policy, it takes 5-7 working days for Bkash/Nagad refunds, and 7-10 working days for card or internet banking. If you haven’t received the refund, please call 16374 or email us at info@shohoz.com.",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#319b83",
        padding: "60px 20px",
        color: "#fff",
        minHeight: "100vh",
      }}
    >
      <Row
        gutter={[32, 32]}
        justify="center"
        style={{ maxWidth: "1200px", margin: "0 auto" }}
      >
        {/* Left Side */}
        <Col xs={24} md={8}>
          <Title level={3} style={{ color: "#fff" }}>
            Got Questions? <br /> We've Got Answers
          </Title>
          <Paragraph style={{ color: "#fff" }}>
            We are always happy to hear from you. If you have any questions,
            suggestions or opinions, please do not hesitate to reach out to us.
          </Paragraph>
          <Button
            type="primary"
            style={{
              backgroundColor: "#fff",
              color: "#319b83",
              fontWeight: "bold",
              borderRadius: "8px",
              marginTop: "20px",
            }}
          >
            Contact Us
          </Button>
        </Col>

        {/* Right Side - FAQ */}
        <Col xs={24} md={16}>
          <Collapse
            defaultActiveKey={faqData.map((_, i) => String(i + 1))}
            expandIconPosition="end"
            ghost
            style={{ backgroundColor: "transparent", color: "#fff" }}
          >
            {faqData.map((faq, index) => (
              <Panel
                header={
                  <span style={{ color: "#fff", fontWeight: "bold" }}>
                    {faq.question}
                  </span>
                }
                key={index + 1}
                style={panelStyle}
              >
                <Text style={{ color: "#fff" }}>{faq.answer}</Text>
              </Panel>
            ))}
          </Collapse>
        </Col>
      </Row>
    </div>
  );
};

const panelStyle = {
  borderBottom: "1px solid #fff",
  color: "#fff",
  fontSize: "16px",
  fontWeight: 500,
};

export default FAQSection;
