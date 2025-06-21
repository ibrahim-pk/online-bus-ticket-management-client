import React from 'react';
import {
  BsBusFront,
  BsAirplaneEngines,
  BsTrainFront,
  BsWater,
  BsCalendarEvent,
  BsStars
} from 'react-icons/bs';
import Navbar from '../components/Home/Navbar';

const tickets = [
  {
    icon: <BsBusFront size={32} className="text-success" />,
    title: "Bus Ticket",
    description: "No more queuing at counters. Tickets of 100+ bus operators available online."
  },
  {
    icon: <BsAirplaneEngines size={32} className="text-success" />,
    title: "Air Ticket",
    description: "Now book your air tickets for domestic travel in Bangladesh."
  },
  {
    icon: <BsTrainFront size={32} className="text-success" />,
    title: "Train Ticket",
    description: "100% tickets of Bangladesh Railway are available online. Get yours now!"
  },
  {
    icon: <BsWater size={32} className="text-success" />,
    title: "Launch Ticket",
    description: "Searching for launch/ship tickets? Grab them online from our exclusive inventory."
  },
  {
    icon: <BsCalendarEvent size={32} className="text-success" />,
    title: "Event Ticket",
    description: "From concerts to sports, skill development to mental development, book your event tickets online hassle-free."
  },
  {
    icon: <BsStars size={32} className="text-success" />,
    title: "Park Ticket",
    description: "Skip the lines and dive into fun! Purchase park tickets from our online inventory."
  },
];

const TicketBlog = () => {
  return (
    <div>
        <Navbar></Navbar>
    <div className="container my-5">
      {tickets.map((ticket, index) => (
        <div key={index} className="row mb-4 pb-3 border-bottom">
          <div className="col-2 text-center">
            {ticket.icon}
            <div className="fw-bold text-success mt-2">{ticket.title}</div>
          </div>
          <div className="col-10">
            <p className="mb-0">{ticket.description}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default TicketBlog;
