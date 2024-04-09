import React from 'react';
import googlecloud from '../assets/portfolio/googlecloud.png';
import spam from '../assets/portfolio/spam.png';
import ticket from '../assets/portfolio/ticket.jpg';
import mern from '../assets/portfolio/mern.png';
import calculator from '../assets/portfolio/calculator.png';
import posture from '../assets/portfolio/posture.png';
import nptel from '../assets/portfolio/nptel.png';
import imagecap from '../assets/portfolio/imagecap.png';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      text: 'Human posture Detection - PoseNet', 
      src: posture,
    },
    {
      id: 2,
      text: 'Spam Message Detection - Machine Learning, Naive-bayers', 
      src: spam,
    },
    {
      id: 3,
      text: 'Ticket Enquiry System - React, MongoDB, Node.js, Render', 
      src: ticket,
    },
    {
      id: 4,
      text: 'Image Caption Generator - Tensorflow, Deep Learning', 
      src: imagecap,
    },
    {
      id: 5,
      text: 'Calculator - React, HTML/CSS, JS', 
      src: calculator,
    },
    {
      id: 6,
      text: 'Certficate - MERN Full Stack from Ethnus', 
      src: mern,
    },
    {
      id: 7,
      text: 'Certficate - Python from NPTEL-IIT Madras', 
      src: nptel,
    },
    {
      id: 8,
      text: 'Certficate - Google Cloud Foundation - 16 badges from Google', 
      src: googlecloud,
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-white via-white to-blue-300 text-black md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bol d inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out my projects and Certificates</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, text, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <p className="text-l font-bold">{text}</p> 
              <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
