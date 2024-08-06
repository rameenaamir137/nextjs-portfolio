"use client";

import React, { useState } from 'react';

type Project = {
  id: number;
  title: string;
  image: string;
  categories?: string[];
  description: string;
  date?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Air Quality Monitoring Using Industry 4.0",
    image: "/team/projects/air-quality.jpg",
    description: "An IoT based solution designed to monitor the air contaminants such as PM2.5, Carbon dioxide, Carbon monoxide, NItrogen dioxide, Methane. The system is capable of reporting air quality status to the web portal in real-time and generates alerts accordingly. The system not only classifies the quality of indoor air but also projects its future instances with competitive accuracy.",
    
  },
  
  {
    id: 2,
    title: "Multifaceted crop scouting using Industry 4.0",
    image: "/team/projects/Screenshot 2024-08-06 at 12.46.46 PM.png",
    description: "Precision agriculture is a growing field that uses technology to manage crops more efficiently and accurately. One promising solution is a multimodal study that leverages machine vision, spectral imagery, and IoT to achieve autonomous farm management. By using RGB and hyper-spectral cameras mounted over plant beds, farmers can capture multi-temporal images for analysis, which can be used to calculate various vegetation indices, predict plant health, and estimate yield. Soil sensors can also be implemented to measure soil quality and fuse data with the imagery captured. This technology has the potential to revolutionize agriculture and make it more sustainable in the long term.",
    
  },
  {
    id: 3,
    title: "Livestock Monitoring using IoT and AI",
    image: "/team/projects/lifestock.jpeg",
    description: "Livestock producers lose approximately $21 billion annually due to animal diseases (UN). This carries over to consumers of dairy products in the form of malnutrition and bacterial diseases. The challenge remains to come up with an ingenious solution to remove inefficiencies in the livestock industry. Collar is attached to animal that has different sensors to detect temperature, humidity, heart rate, body conditions, lameness, behaviour activity etc. Animal collar sent data to fixed unit that is loacted into farm using Lora Module. Fixed unit is used to sent data to cloud for processing using Machine Learning model and results displayed on mobile app in form of alert and suggestions. ",
    
  },
  {
    id: 10,
    title: "Water Quality Data Extraction From Handwritten Documents Using Deep Learning",
    image: "/team/projects/water-quality.jpeg",
    description: "The aim of this project is to develop a deep learning system for digitizing tabular data containing handwritten text. The system is primarily targeted at digitizing the water quality recordings at the Rawal Lake filtration plant in Islamabad, erasing the dependency on the large volumes of physical records and making the data accessible for analytics and machine learning. A web portal along with a mobile application is also developed. Through these applications, end users can access the system and digitize their own documents, which are then stored in the cloud and can be retrieved any time.",
    
  },
  {
    id: 12,
    title: "Time-series Analysis and Prediction of Water Quality through Remote Sensing, GIS and IoT",
    image: "/team/projects/waterqulitydata.jpeg",
    description: "The periodic time series analysis of different aspects of urban areas is essential owing to an increase in population, stressed resources, and lack of technology-based solutions for effective resource management. In this regard, the temporal analysis of water quality holds paramount importance as it is a key ingredient to sustain life on earth. Water quality depends on many factors like precipitation, climate, soil type, vegetation, geology, flow conditions, groundwater, PH level, etc. For this purpose, the remote sensing data from satellites (Sentinel and Landsat), Geographic Information System (GIS) data, and IoT data will be collected to perform water quality trend analysis. ",
    
  },
  {
    id: 7,
    title: "Wheat Rust Disease Detection and Classification with IoT, Edge Computing, and Deep Learning",
    image: "/team/projects/wheat-disease.jpeg",
    description: "Wheat leaf rust is one of the widespread fungal diseases which can cause a severe drop in wheat production and a major threat to food security in Pakistan where wheat covers almost 40% of the cultivated land. The detection of wheat rust can be possible through the naked eye, but this method is unsuccessful and time-consuming when we have to monitor the large farming lands. Towards such ends, there is a need to develop a system that can detect wheat rust and classify its severity accurately in the early and subsequent stages in real-time by exploiting technologies such as edge computing, IoT, and deep learning.",
    
  },
  {
    id: 4,
    title: "Internet of Things (IoT) enabled surface water pollution detection for predictive healthcare",
    image: "/team/projects/surfsace water mionitir.jpeg",
    description: "An IoT based water quality monitoring solution that monitors water quality parameters such as pH level, turbidity, temperature, conductivity, and dissolved oxygen in real-time. The system generates the Water Quality Index (WQI) map of the region of interest. The system performs classification as well as bacteria prediction using machine learning algorithms. A web portal is developed to archive the collected data and perform basic and advanced data analytics."
  },
  {
    id: 5,
    title: "Crop health monitoring and early warning system using Internet of Things (IoT) enabled precision agriculture",
    image: "/team/projects/Screenshot 2024-08-06 at 12.47.06 PM.png",
    description: "An IoT based solution for crop health monitoring using multiple sensors to collect real-time data from the fields. In addition to this, a drone is used with a multi-spectral camera mounted on it to acquire spectral images. The spectral images are used for Normalized Differences Vegetation Index (NDVI) mapping, The data from IoT sensors and NDVI images are integrated to generate crop health maps to provide rich and enhanced information about crop health status, which is not achievable while using only NDVI data. A web portal is developed with a dashboard of web services for image & data analysis, visualization, and data retrieval. The prototype was deployed in NARC, Islamabad, for real-time data acquisition.",
    
  },
  {
    id: 6,
    title: "Capacity Building for Digital Health Monitoring and Care Systems in Asia - DigiHealth-Asia",
    image: "/team/projects/health.jpeg",
    description: "An IoT based solution for crop health monitoring using multiple sensors to collect real-time data from the fields. In addition to this, a drone is used with a multi-spectral camera mounted on it to acquire spectral images. The spectral images are used for Normalized Differences Vegetation Index (NDVI) mapping, The data from IoT sensors and NDVI images are integrated to generate crop health maps to provide rich and enhanced information about crop health status, which is not achievable while using only NDVI data. A web portal is developed with a dashboard of web services for image & data analysis, visualization, and data retrieval. The prototype was deployed in NARC, Islamabad, for real-time data acquisition.",
    
  },
  
  {
    id: 8,
    title: "Enhanced Water Quality Monitoring and Estimation by Exploiting Multi-modal Approach",
    image: "team/projects/water.jpeg",
    description: "With the advent of new technologies such as the Internet of Things (IoT), the water quality can be measured and reported in real-time. However, the limitation of this approach is that it provides point data which is insufficient to represent the entire water body quality unless the water samples are collected from a large number of points and for long durations. The collection of data from multiple points in a water body is not feasible particularly if the data collection sites are difficult to access due to complex terrain or other resources. In contrast to this approach, the data collected from remotely sensed satellite imagery provide ample details about the entire water body, however, the data acquisition is constrained by satellite revisit time and the quality of estimates is effected by image resolution. ",
    
  },
  {
    id: 9,
    title: "Indoor Air Quality Monitoring Using IoT and Predictive Analytic",
    image: "/team/projects/indooor-aooir.jpeg",
    description: "An IoT based solution designed to monitor the air contaminants such as PM2.5, Carbon dioxide, Carbon monoxide, NItrogen dioxide, Methane. The system is capable of reporting air quality status to the web portal in real-time and generates alerts accordingly. The system not only classifies the quality of indoor air but also projects its future instances with competitive accuracy.",
    
  },
  
  {
    id: 11,
    title: "Combating COVID-19 Using Internet of Medical Devices (IoMD) and AI",
    image: "/team/projects/corona.jpeg",
    description: "World is facing pandemic due widespread of Novel Corona Virus COVID-19. This pandemic has already infected approx 130 Million people and 2.83 Million people died. Ambient sensors and multiple wearable is used to collect data of patient and his/her environment. Body parameters includes body temperature, heart rate, and body saturation. Environmental parameters includes CO, CO2, Dust and O3 to generate air quality index. The data sent to gateway node where edge computing performed and Machine Learning algorithms deployed to perform dicison making. ",
    
  },
  
  
  
  
  
  // Add more projects as needed
];


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden text-center transform transition-transform duration-300 hover:scale-105 cursor-pointer">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-sm text-gray-700">
          {showMore ? project.description : `${project.description.slice(0, 100)}...`}
        </p>
        <button
          onClick={toggleShowMore}
          className="mt-2 text-blue-500 hover:underline"
        >
          {showMore ? "Show Less" : "Learn More"}
        </button>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="our-projects" className="p-5">
      <div className="flex ">
        <h2
          className="text-3xl mt-10 font-bold mb-6 bg-gradient-to-r from-[#2878ad] to-[#0056b3] text-white px-8 py-4 rounded-md shadow-md"
          style={{ width: '50%', textAlign: 'left' }}
        >
          Projects
        </h2>
      </div>

      <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-2 justify-items-center max-w-screen-xl mx-auto">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      <div className="text-center mt-6">
        {projects.length > 6 && (
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

export default Projects;
