import React from 'react';

const Connections = () => {
  return (
    <section id="my-connections" className="p-5 bg-white">
     <div className="flex ">
  <h2
    className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2878ad] to-[#1862b1] text-white px-8 py-4 rounded-md shadow-md"
    style={{ width: '50%', textAlign: 'center' }}
  >
    Our Connections
  </h2>
</div>

      <div className="overflow-hidden py-8 relative">
        <div className="flex space-x-4 animate-scroll">
          <img src="/team/connections/coventry_university.png" alt="Company 1" className="w-32 h-32 object-contain"/>
          <img src="/team/connections/download (1).jpeg" alt="Company 2" className="w-32 h-32 object-contain"/>
          <img src="/team/connections/download (1).png" alt="Company 3" className="w-32 h-32 object-contain"/>
          <img src="/team/connections/download (2).jpeg" alt="Company 4" className="w-32 h-32 object-contain"/>
          <img src="/team/connections/download (2).png" alt="Company 5" className="w-32 h-32 object-contain"/>
          {/* Repeat the logos to create a seamless loop */}
          <img src="/team/connections/download (3).jpeg" alt="Company 1" className="w-32 h-32 object-contain"/>
          <img src="/team/connections/download (3).png" alt="Company 2" className="w-32 h-32 object-contain"/>
          <img src="/team/connections/download (4).png" alt="Company 3" className="w-32 h-32 object-contain"/>
          <img src="/team/connections/download (5).png" alt="Company 4" className="w-32 h-32 object-contain"/>
          <img src="/team/connections/download.png" alt="Company 5" className="w-32 h-32 object-contain"/>
          <img src="/team/connections/images.png" alt="Company 5" className="w-32 h-32 object-contain"/>
          <img src="/team/connections/NARC LOGO.jpg" alt="Company 5" className="w-32 h-32 object-contain"/>
          <img src="/team/connections/ugent.png" alt="Company 5" className="w-32 h-32 object-contain"/>
        </div>
      </div>
    </section>
  );
};

export default Connections;
