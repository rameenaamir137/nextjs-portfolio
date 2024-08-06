"use client";

import React, { useState } from 'react';

type Award = {
  id: number;
  title: string;
  image: string;
  categories?: string[];
  description?: string;
  date?: string;
};

const awards: Award[] = [
  {
    id: 1,
    title: "Dr. Rafia Mumtaz won Women of Wonders Award 2021 for precision agriculture by WoWpk and InspireMill",
    image: "/team/awards/wow.jpeg",
  },
  {
    id: 2,
    title: "SEECS Researchers signed a Memorandum of Agreement with Islamabad Diagnostic Center",
    image: "/team/awards/IDC.jpg",
  },
  
  {
    id: 3,
    title: "Final Year Project titled Aqua Drone for Water Quality Assessment won first prize of worth Rs. 40000 in COMPPEC",
    image: "/team/awards/fyp-a2023.jpg",
  },
  {
    id: 4,
    title: "Final Year Project titled Profit Signals won Merit Award in COMPPEC",
    image: "/team/awards/fyp-b2023.jpg",
  },
  
  {
    id: 5,
    title: "Dr. Rafia Mumtaz is awarded SEECS Best Researcher Award 2018",
    image: "/team/awards/download_Nero AI_Face.jpeg",
  },
  {
    id: 6,
    title: "Final Year Project titled Aqua Drone for Water Quality Assessment won first prize of worth Rs. 40000 in COMPPEC",
    image: "/team/awards/FYP_Gold_Medal.jpg",
  },
  
  
  {
    id: 7,
    title: "The project titled, Comabating Covid-19 using Internet of Medical Devices won Technology infusion grand challenge and awarded 200 AUD for developing their prototype at La Trobe University, Austria.",
    image: "/team/awards/latrobeuni.jpg",
  },
  {
    id: 8,
    title: "The project titled, Livestock monitoring using Internet of Things won 2 prize in 2021 Hult Prize Food for Good Challenge at NUST H-12.",
    image: "/team/awards/nust.jpg",
  },
  {
    id: 9,
    title: "The project titled, Air quality monitoring using IoT won Engineering Category prize (Rs.40K) at DICE-DUHS, Karachi",
    image: "/team/awards/dice.webp",
  },
  {
    id: 10,
    title: "Final Year Project titled crop scouting using AIIOT won best-adjudged industry project award of worth Rs. 25000 in open house 2022",
    image: "/team/awards/open house.jpg",
  },
  // Add more awards as needed
];

const Awards: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedAwards = showAll ? awards : awards.slice(0, 6);

  return (
    <section id="our-awards" className="p-5">
      <div className="flex">
        <h2
          className="text-3xl mt-10 font-bold mb-6 bg-gradient-to-r from-[#2878ad] to-[#1862b1] text-white px-8 py-4 rounded-md shadow-md"
          style={{ width: '50%', textAlign: 'center' }}
        >
          Awards
        </h2>
      </div>
      <div className="grid py-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-2 justify-items-center max-w-screen-xl mx-auto">
        {displayedAwards.map((award) => (
          <div
            key={award.id}
            className="bg-white shadow-md rounded-md overflow-hidden text-center transform transition-transform duration-300 hover:scale-105 cursor-pointer"
          >
            <img src={award.image} alt={award.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{award.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-6">
        {awards.length > 6 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="relative inline-flex items-center justify-center p-2 rounded-full bg-blue-500 text-white hover:bg-[#183f63] transition-colors duration-300"
          >
            <div className={`w-12 h-12 flex items-center justify-center ${showAll ? "animate-bounce" : ""}`}>
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </button>
        )}
      </div>
    </section>
  );
};

export default Awards;
