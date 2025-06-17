import React from "react";
import { Layout, Menu, Button, Input, DatePicker, Radio, Row, Col, Select, Typography } from "antd";
import { SearchOutlined, PhoneOutlined, SwapOutlined } from "@ant-design/icons";
import Navbar from "../components/Home/Navbar";
import HeroSection from "../components/Home/Header";
import BuyTicketsSteps from "../components/Home/BuyTicketProcess";
import TravelOptions from "../components/Home/TravelPreview";
import FAQSection from "../components/Home/Faq";
import Footer from "../components/Home/Footer";


const { Header, Content } = Layout;
const { Option } = Select;
const { Title, Text } = Typography;

export default function UserHome() {
  return (
    <>
    <Navbar />
     <HeroSection />
     <BuyTicketsSteps />
     <TravelOptions />
     <FAQSection />
     <Footer />
    </>
  );
}
