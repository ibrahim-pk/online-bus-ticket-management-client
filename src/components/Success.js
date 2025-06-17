import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Card, Row, Col, Typography, Spin, message } from "antd";
import axios from "axios";

const { Title, Paragraph } = Typography;

const SuccessPage = () => {
    const [searchParams] = useSearchParams();
    const location = searchParams.get("location");
    const [places, setPlaces] = useState([]);
    const [loading, setLoading] = useState(false);



    useEffect(() => {
        const fetchData = async () => {
            if (location) {
                setLoading(true)
                const { data } = await axios.get(`/api/bookings/location?location=${location}`)
                console.log(data)
                setPlaces(data?.data)
                setLoading(false)
            }
        }
        fetchData()
    }, [location]);

    return (
        <div style={{ padding: "40px" }}>
            <Title level={2} style={{ textAlign: "center", color: "#52c41a" }}>
                ✅ টিকিট ক্রয় সফল হয়েছে!
            </Title>
            <Paragraph style={{ textAlign: "center", fontSize: "16px" }}>
                আপনার গন্তব্যস্থল {location}। নিচে কিছু দর্শনীয় স্থান দেখানো হলো যা আপনি ঘুরে দেখতে পারেন:
            </Paragraph>

            {loading ? (
                <Spin size="large" style={{ display: "block", marginTop: 50 }} />
            ) : (
                <Row gutter={[16, 16]} style={{ marginTop: 30 }}>
                    {places.map((place, index) => (
                        <Col xs={24} md={12} lg={6} key={index}>
                            <Card
                                hoverable
                                cover={<img alt={place?.name} src={place?.image} style={{ height: "180px", objectFit: "cover" }} />}
                            >
                                <Card.Meta title={place?.name} description={place?.description} />
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </div>
    );
};

export default SuccessPage;
