import React, { useEffect, useState } from "react";
import { Input, Table, message } from "antd";
import { axiosInstance } from "../../helpers/axiosInstance";
import PageTitle from "../../components/PageTitle";
import axios from "axios";

function AdminFeedback() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch feedback from server
  const getFeedbacks = async () => {
    try {
      const response = await axios.get(
        `/api/users/feedback${search ? `?search=${search}` : ""}`
      );
      if (response.data.success) {
        setFeedbacks(response.data.data);
      } else {
        message.error("Could not fetch feedbacks");
      }
    } catch (error) {
      message.error("Something went wrong");
    }
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Message",
      dataIndex: "message",
    },
    {
      title: "Submitted On",
      dataIndex: "createdAt",
      render: (text) => new Date(text).toLocaleString(),
    },
  ];

  return (
    <div>
      <PageTitle title="User Feedbacks" />

      <div className="d-flex justify-content-between align-items-center my-3">
        <Input
          placeholder="Search by email"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ width: 300 }}
          onPressEnter={getFeedbacks}
        />
        <button className="btn btn-success" onClick={getFeedbacks}>
          Search
        </button>
      </div>

      <Table
        dataSource={feedbacks}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 6 }}
      />
    </div>
  );
}

export default AdminFeedback;
