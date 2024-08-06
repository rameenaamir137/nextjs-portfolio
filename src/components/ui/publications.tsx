import React from 'react';

const Publications: React.FC = () => {
  const publications = [
    {
      title: "Publication 1",
      authors: "Author A, Author B",
      journal: "Journal X",
      year: 2023
    },
    {
      title: "Publication 2",
      authors: "Author C, Author D",
      journal: "Journal Y",
      year: 2022
    },
    // Add more publications as needed
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
              Authors
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Journal
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Year
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {publications.map((pub, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pub.title}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pub.authors}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pub.journal}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{pub.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Publications;
