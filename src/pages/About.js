import React from 'react';
import Navbar from '../components/Home/Navbar';

const AboutPage = () => {
  return (
    <div>
        <Navbar />
    
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold">About Us</h1>
        <p className="text-muted">Learn more about our project and mission</p>
      </div>

      <div className="bg-white border rounded p-4 shadow-sm">
        <p>
          Welcome to our <strong>Bus Booking System</strong> project — a university-level software
          solution designed to simplify and modernize the process of booking bus tickets. This
          system is developed as part of our academic coursework, with the primary goal of
          demonstrating how technology can improve everyday services like transportation.
        </p>

        <p>
          Our project simulates a functional online bus reservation platform, allowing users to:
        </p>

        <ul className="ms-4">
          <li>Search available routes and buses</li>
          <li>View seat availability</li>
          <li>Book and cancel tickets</li>
          <li>Receive confirmation details</li>
        </ul>

        <p>
          The system is built with a focus on <strong>user-friendliness</strong>, <strong>data
          handling</strong>, and <strong>practical features</strong>. It includes modules for admin
          management, user registration, and route scheduling to showcase the complete booking
          process.
        </p>

        <p>
          Though it is not intended for public use, this project highlights our skills in software
          design, database integration, and web application development.
        </p>
      </div>
    </div>
    </div>
  );
};

export default AboutPage;
