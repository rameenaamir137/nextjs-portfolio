import React from 'react';
import Cards from './card';

const AboutUs: React.FC = () => {
  return (
    <section className="bg-white  py-12 px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img src="/Digital technology01.jpg" alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
        <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <p className="text-lg leading-relaxed mb-6">
          NUST SEECS has launched a series of IoT events since August 2017, ranging from symposia, basic and advanced workshops to IoT research boot camp.

Consequently, a number of smart solutions addressing the local problems have been developed.
To advance IoT projects and to further extend the research in this domain, this dedicated lab came into being in August 2018.
          </p>
         
        </div>
      </div>
      <div className="mt-12">
        <Cards />
      </div>
    </section>
  );
};

export default AboutUs;
