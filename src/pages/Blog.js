import React from 'react';
import {
  BsLightbulb,
  BsShieldCheck,
  BsPeople,
  BsLaptop,
  BsTree
} from 'react-icons/bs';
import Navbar from '../components/Home/Navbar';

const blogSections = [
  {
    icon: <BsLightbulb size={32} className="text-primary" />,
    title: "Innovation at Heart",
    description:
      "We are passionate about building solutions that make everyday life easier. Bus_Booking website uses simple technology to solve the traditional challenges of bus travel – from long queues to ticket unavailability. With just a few clicks, users can search routes, view available seats, and book tickets from anywhere, anytime.",
  },
  {
    icon: <BsShieldCheck size={32} className="text-primary" />,
    title: "Safety First",
    description:
      "In our system, passenger trust matters. We’ve included features like ticket verification and booking history to promote transparency and reliability. While this is a demo project, we’ve modeled our design on real-life platforms that prioritize customer safety and comfort.",
  },
  {
    icon: <BsPeople size={32} className="text-primary" />,
    title: "Empowering the Community",
    description:
      "This website is designed to give users full control over their journey. Whether choosing the best route or selecting a preferred seat, our system offers flexibility and freedom that puts the power in the hands of the traveler.",
  },
  {
    icon: <BsLaptop size={32} className="text-primary" />,
    title: "Built by Learners, for Learning",
    description:
      "This system was developed by students as part of an academic project to explore how technology can be used to solve real-world problems. Through this, we’ve not only learned the value of good software design but also the importance of user experience and responsibility.",
  },
  {
    icon: <BsTree size={32} className="text-primary" />,
    title: "Committed to the Future",
    description:
      "We believe in building systems that are efficient and sustainable. Even in a classroom setting, our focus has been on creating a platform that is scalable, reliable, and easy to maintain — showing that even small projects can make a big difference.",
  },
];

const TicketBlog = () => {
  return (
    <div>
      <Navbar />
      <div className="container my-5">
        <h2 className="text-center fw-bold mb-5">Blog Page</h2>
        {blogSections.map((section, index) => (
          <div key={index} className="row mb-5 pb-3 border-bottom">
            <div className="col-2 text-center">
              {section.icon}
              <div className="fw-bold text-primary mt-2">{section.title}</div>
            </div>
            <div className="col-10">
              <p className="mb-0 text-muted">{section.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicketBlog;
