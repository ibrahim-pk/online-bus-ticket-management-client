import React, { useEffect, useState } from "react";
import { Table, message, Modal, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import PageTitle from "../../components/PageTitle";
import { axiosInstance } from "../../helpers/axiosInstance";
import { HideLoading, ShowLoading } from "../../redux/alertsSlice";

function AdminUsers() {
  const dispatch = useDispatch();

  const [users, setUsers] = useState([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [form] = Form.useForm();

  // Fetch all users
  const getUsers = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/users/get-all-users", {});
      dispatch(HideLoading());

      if (response.data.success) {
        setUsers(response.data.data);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  // Update user permission or status
  const updateUserPermissions = async (user, action) => {
    try {
      let payload = { ...user };

      if (action === "make-admin") {
        payload.isAdmin = true;
      } else if (action === "remove-admin") {
        payload.isAdmin = false;
      } else if (action === "block") {
        payload.isBlocked = true;
      } else if (action === "unblock") {
        payload.isBlocked = false;
      }

      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/users/update-user-permissions", payload);
      dispatch(HideLoading());

      if (response.data.success) {
        getUsers();
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  // Edit user info
  const EditUser = (user) => {
    setSelectedUser(user);
    form.setFieldsValue({
      name: user.name,
      email: user.email,
    });
    setIsEditModalVisible(true);
  };

  const handleUpdateUser = async () => {
    try {
      const values = await form.validateFields();

      const payload = {
        ...selectedUser,
        name: values.name,
        email: values.email,
      };

      dispatch(ShowLoading());
      const response = await axiosInstance.post("/api/users/update-user-permissions", payload);
      dispatch(HideLoading());

      if (response.data.success) {
        message.success("User updated successfully");
        getUsers();
        setIsEditModalVisible(false);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error("Something went wrong");
    }
  };

  // Table columns
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
      title: "Status",
      render: (data) => (data.isBlocked ? "Blocked" : "Active"),
    },
    {
      title: "Role",
      render: (data) => (data.isAdmin ? "Admin" : "User"),
    },
    {
      title: "Action",
      render: (text, record) => (
        <div className="d-flex gap-3">
          <p className="underline" onClick={() => EditUser(record)}>
            Edit
          </p>
          {record?.isBlocked ? (
            <p className="underline" onClick={() => updateUserPermissions(record, "unblock")}>
              Unblock
            </p>
          ) : (
            <p className="underline" onClick={() => updateUserPermissions(record, "block")}>
              Block
            </p>
          )}
          {record?.isAdmin ? (
            <p className="underline" onClick={() => updateUserPermissions(record, "remove-admin")}>
              Remove Admin
            </p>
          ) : (
            <p className="underline" onClick={() => updateUserPermissions(record, "make-admin")}>
              Make Admin
            </p>
          )}
        </div>
      ),
    },
  ];

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-between my-2">
        <PageTitle title="Users" />
      </div>

      <Table columns={columns} dataSource={users} rowKey="_id" />

      {/* Edit User Modal */}
      <Modal
        title="Edit User"
        open={isEditModalVisible}
        onCancel={() => setIsEditModalVisible(false)}
        onOk={handleUpdateUser}
        okText="Update"
      >
        <Form layout="vertical" form={form}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter name" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter email" },
              { type: "email", message: "Enter a valid email" },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminUsers;
