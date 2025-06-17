import React from "react";
import { Layout, Menu, Button, Card } from "antd";
import {
  CarOutlined,
  RocketOutlined,
  FieldTimeOutlined,
  ContainerOutlined,
  CalendarOutlined,
  EnvironmentOutlined,
  PhoneOutlined
} from "@ant-design/icons";
import { TypeAnimation } from 'react-type-animation';
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Card style={{ margin: 0, padding: 0, borderRadius: 0, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} bodyStyle={{ padding: 0 }}>
      <div style={{ backgroundColor: 'white', padding: '8px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Left: Animated Brand */}
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#16a34a', whiteSpace: 'nowrap' }}>
          <TypeAnimation
            sequence={["Himachol", 1000]}
            wrapper="span"
            cursor={false}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </div>

        {/* Center: Menu */}
        <Menu
          mode="horizontal"
          style={{ flex: 1, justifyContent: 'center', display: 'flex', borderBottom: 'none', margin: '0 16px' }}
          defaultSelectedKeys={["bus"]}
        >
          <Menu.Item key="bus" icon={<CarOutlined />}>Bus</Menu.Item>
          <Menu.Item key="air" icon={<RocketOutlined />}>Air</Menu.Item>
          <Menu.Item key="train" icon={<FieldTimeOutlined />}>Train</Menu.Item>
          <Menu.Item key="launch" icon={<ContainerOutlined />}>Launch</Menu.Item>
          <Menu.Item key="event" icon={<CalendarOutlined />}>Event</Menu.Item>
          <Menu.Item key="park"><Link to="/login">Login</Link>  </Menu.Item>
        </Menu>

        {/* Right: Phone Button */}
        <div style={{ whiteSpace: 'nowrap' }}>
          <Button type="primary" icon={<PhoneOutlined />} shape="round">
            16374
          </Button>
        </div>
      </div>
    </Card>
  );
}
