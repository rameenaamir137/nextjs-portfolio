import React from 'react';

const Patents: React.FC = () => {
  const patents = [
    {
      title: "AgriViU-Agri Vision Unit for Wheat Stripe Rust Disease Monitoring",
      id: "Application No. 21299-D"
    },
    {
      title: "Air Quality Monitoring and Predicting Service",
      id: "Application ID: 2690/2021"
    },
    {
      title: "CrasAir- Air Quality Monitoring Urban Unit",
      id: "Application ID: 20386-D"
    },
    {
      title: "AgriEye Mobile Unit",
      id: "Patent # 20405-D"
    },
    {
      title: "MAPTU - Mobile Atmospheric Pollutant Telemetry Unit",
      id: "Patent # 20058-D"
    },
    {
      title: "Livestock Monitoring Mobile Node",
      id: "Application ID: 21008-D"
    },
    {
      title: "Livestock Monitoring Fixed Node",
      id: "Application ID: 21009-D"
    },
    {
      title: "CroHMU-Crop Health Monitoring Unit",
      id: "Application ID: 20452-D"
    },
    {
      title: "SIEHS - Smart Indoor Environment Health Sensing PCB",
      id: "Application # 20408-D"
    },
    {
      title: "CroHMI- Crop Health Monitoring System using IoT",
      id: "Application ID: 2020/990"
    },
    // Add more patents as needed
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Title
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Application ID
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {patents.map((patent, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{patent.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{patent.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Patents;
