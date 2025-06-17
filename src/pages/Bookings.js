import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { message, Modal, Table } from "antd";
import moment from "moment";
import { useReactToPrint } from "react-to-print";
import { FaBusAlt, FaMapMarkerAlt, FaChair, FaMoneyBillWave } from "react-icons/fa";
import { QRCodeCanvas } from 'qrcode.react';


import PageTitle from "../components/PageTitle";
import { axiosInstance } from "../helpers/axiosInstance";
import { ShowLoading, HideLoading } from "../redux/alertsSlice";

function Bookings() {
  const [showPrintModal, setShowPrintModal] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [bookings, setBookings] = useState([]);
  const dispatch = useDispatch();
  const componentRef = useRef();

  const getBookings = async () => {
    try {
      dispatch(ShowLoading());
      const response = await axiosInstance.post(
        "/api/bookings/get-bookings-by-user-id",
        {}
      );
      dispatch(HideLoading());
      if (response.data.success) {
        const mappedData = response.data.data.map((booking) => ({
          ...booking,
          ...booking.bus,
          key: booking._id,
        }));
        setBookings(mappedData);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    getBookings();
  }, []);

  const columns = [
    {
      title: "Bus Name",
      dataIndex: "name",
    },
    {
      title: "Bus Number",
      dataIndex: "number",
    },
    {
      title: "Journey Date",
      dataIndex: "journeyDate",
    },
    {
      title: "Journey Time",
      dataIndex: "departure",
    },
    {
      title: "Seats",
      dataIndex: "seats",
      render: (seats) => seats.join(", "),
    },
    {
      title: "Action",
      render: (_, record) => (
        <span
          className="text-blue-500 underline cursor-pointer"
          onClick={() => {
            setSelectedBooking(record);
            setShowPrintModal(true);
          }}
        >
          Print Ticket
        </span>
      ),
    },
  ];

  return (
    <div>
      <PageTitle title="Bookings" />
      <Table dataSource={bookings} columns={columns} className="mt-4" />

      {showPrintModal && selectedBooking && (
        <Modal
          title="Print Ticket"
          open={showPrintModal}
          onCancel={() => {
            setShowPrintModal(false);
            setSelectedBooking(null);
          }}
          okText="Print"
          onOk={handlePrint}
        >
          <div ref={componentRef} style={{ padding: 20, fontFamily: "Arial" }}>
            <div style={{ border: "2px dashed #1890ff", padding: 20, borderRadius: 10 }}>
              <h2 style={{ textAlign: "center", color: "#1890ff" }}>
                🚌 Bus Ticket
              </h2>

              <p><FaBusAlt /> <strong>Bus:</strong> {selectedBooking.name}</p>
              <p><FaMapMarkerAlt /> <strong>Route:</strong> {selectedBooking.from} → {selectedBooking.to}</p>
              <p><strong>Date:</strong> {moment(selectedBooking.journeyDate).format("DD MMM YYYY")}</p>
              <p><strong>Time:</strong> {selectedBooking.departure}</p>
              <p><FaChair /> <strong>Seats:</strong> {selectedBooking.seats.join(", ")}</p>
              <p><FaMoneyBillWave /> <strong>Total Fare:</strong> ৳{selectedBooking.fare * selectedBooking.seats.length}</p>

              <div style={{ marginTop: 20, textAlign: "center" }}>
                <div style={{ marginTop: 20, textAlign: "center" }}>
                  <QRCodeCanvas
                    value={JSON.stringify({
                      bookingId: selectedBooking._id,
                      seats: selectedBooking.seats,
                      journeyDate: selectedBooking.journeyDate,
                      busName: selectedBooking.name,
                    })}
                    size={128}
                  />
                  <p style={{ fontSize: "12px", marginTop: 10 }}>Scan to verify</p>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Bookings;
