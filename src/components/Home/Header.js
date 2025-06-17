import React, { useEffect, useState } from "react";
import {
  Row,
  Col,
  Input,
  Button,
  DatePicker,
  Select,
  Card,
  Drawer,
  message,
  Spin,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import Bus from "../../components/Bus";
import { useDispatch } from "react-redux";
import { HideLoading, ShowLoading } from "../../redux/alertsSlice";
import axios from "axios";

const { Option } = Select;

export default function HeroSection() {
  const dispatch = useDispatch();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [journeyDate, setJourneyDate] = useState(null);
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [buses, setBuses] = useState([]);
  const [toOption, setToOptions] = useState([]);
  const [fromOption, setFromOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const getBuses = async () => {
    const tempFilters = {
      from,
      to,
      journeyDate: journeyDate ? journeyDate.format("YYYY-MM-DD") : null,
    };

    try {
      dispatch(ShowLoading());
      setLoading(true);
      const response = await axios.post(
        "/api/buses/get-all-buses",
        tempFilters,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(HideLoading());
      setLoading(false);

      if (response.data.success) {
        setBuses(response.data.data);
        setDrawerVisible(true);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      setLoading(false);
      message.error(error.message);
    }
  };

  useEffect(() => {
  const fetchLocations = async () => {
    try {
      const response = await axios.get("/api/buses/from-to-lists", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (response.data.success) {
       setFromOptions(response?.data?.data?.fromList);
        setToOptions(response?.data?.data?.toList);
        console.log(response)
      }
    } catch (error) {
      message.error("Failed to load location lists");
    }
  };

  fetchLocations();
}, []);


  return (
    <section>
      <div
        style={{
          position: "relative",
          height: "450px",
          backgroundImage: 'url("/image/busticket.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.95)",
            padding: "24px",
            borderRadius: "8px",
            maxWidth: "800px",
            width: "100%",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
          }}
          bodyStyle={{ padding: 0 }}
        >
          <Row gutter={[16, 16]} style={{ padding: 16 }}>
            <Col xs={24} md={8}>
              <Select
                size="large"
                placeholder="From"
                style={{ width: "100%" }}
                onChange={(value) => setFrom(value)}
              >
                {
                  fromOption&&fromOption?.map((val,id)=>(
                    <Option key={id} value={val}>{val}</Option>
                  ))
                }
              </Select>
            </Col>
            <Col xs={24} md={8}>
              <Select
                size="large"
                placeholder="To"
                style={{ width: "100%" }}
                onChange={(value) => setTo(value)}
              >
                {
                  toOption&&toOption?.map((val,id)=>(
                    <Option key={id} value={val}>{val}</Option>
                  ))
                }
                
              </Select>
            </Col>
            <Col xs={24} md={8}>
              <DatePicker
                size="large"
                placeholder="Journey Date"
                style={{ width: "100%" }}
                onChange={(date) => setJourneyDate(date)}
              />
            </Col>
            <Col span={24}>
              <Button
                type="primary"
                size="large"
                icon={<SearchOutlined />}
                block
                onClick={getBuses}
              >
                Search Bus Tickets
              </Button>
            </Col>
          </Row>
        </Card>
      </div>

      <Drawer
        title="Search Results"
        placement="left"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        width={720}
      >
        {loading ? (
          <Spin size="large" />
        ) : (
          <Row gutter={[16, 16]}>
            {buses.length === 0 ? (
              <Col span={24}>
                <p>No buses found.</p>
              </Col>
            ) : (
              buses
                .filter((bus) => bus.status === "Yet To Start")
                .map((bus) => (
                  <Col xs={24} md={24} key={bus._id}>
                    <Bus bus={bus} />
                  </Col>
                ))
            )}
          </Row>
        )}
      </Drawer>
    </section>
  );
}
