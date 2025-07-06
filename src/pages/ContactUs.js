import React, { useState } from 'react';
import Navbar from '../components/Home/Navbar';
import axios from 'axios';

const ContactForm = () => {
  const [form, setForm] = useState({
    purpose: 'Bus',
    name: '',
    city: '',
    phone: '',
    email: '',
    message: ''
  });

  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("api/users/feedback", form);
      if (response.data.success) {
        setSuccessMsg("Your message has been sent.");
        setForm({
          purpose: 'Bus',
          name: '',
          city: '',
          phone: '',
          email: '',
          message: ''
        });
      }
    } catch (error) {
      setSuccessMsg("Something went wrong. Try again.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container py-5 my-5">
        <h2 className="text-center fw-bold">Contact Us</h2>
        <p className="text-center text-muted mb-4">
          Thank you for reaching us! We are always happy to hear from you
        </p>

        {successMsg && <div className="alert alert-success">{successMsg}</div>}

        <div className="card shadow-sm">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="purpose" className="form-label">Purpose</label>
                <select
                  id="purpose"
                  name="purpose"
                  className="form-select"
                  value={form.purpose}
                  onChange={handleChange}
                >
                  <option value="Bus">Bus</option>
                  <option value="Train">Train</option>
                  <option value="Flight">Flight</option>
                </select>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="name" className="form-label">Your Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    placeholder="Mahmud"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="city" className="form-label">Your City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="form-control"
                    value={form.city}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={form.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label htmlFor="email" className="form-label">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-success px-4">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
