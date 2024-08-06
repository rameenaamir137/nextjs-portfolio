"use client"
import React from 'react';
import { EyeIcon, RocketLaunchIcon, TagIcon } from '@heroicons/react/24/outline';

interface CardProps {
  title: string;
  content: string;
  icon: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, content, icon }) => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = event.currentTarget;
    card.classList.add('transform', 'translate-x-2', 'translate-y-2');
    setTimeout(() => {
      card.classList.remove('transform', 'translate-x-2', 'translate-y-2');
    }, 300);
  };

  return (
    <div 
      className=" bg-[#183f63] p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-300 ease-in-out animate-fadeIn animate-slideUp cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center mb-4">
        <div className="text-teal-500 mr-4">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white flex items-center">
          {title}
        </h3>
      </div>
      <p className="text-white leading-relaxed">{content}</p>
    </div>
  );
};

const Cards: React.FC = () => {
  return (
    <section className="bg-white py-1 px-8">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center">
          <div className="flex justify-center space-x-4 mb-4">
            <div className="w-1/3 flex justify-center">
              <Card
                title="Vision"
                content="Our vision is to provide a platform to aspiring and motivated minds for conducting scientific research to develop smart indigenous solutions to local problems and add value to society while achieving new levels of performance through cutting-edge and modern technology."
                icon={<EyeIcon className="h-8 w-8" />}
              />
            </div>
            <div className="w-1/3 flex justify-center">
            <Card
              title="Mission"
              content="Our mission is to identify tech-savvy individuals with a strong passion for research and innovation to sustain NUST-SEECS research projects for a longer run and to develop smart projects based on IoT and subsequently advance them to a product level."
              icon={<TagIcon className="h-8 w-8" />}
            />
          </div>
          <div className="w-1/3 flex justify-center">
              <Card
                title="Inception"
                content="Research on emerging technologies like the Internet of Things (IoT) is globally vital. Since August 2017, NUST SEECS has hosted various IoT events such as symposia, workshops, and boot camps, leading to smart local solutions. In August 2018, a lab was established to advance IoT research."
                icon={<RocketLaunchIcon className="h-8 w-8" />}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
