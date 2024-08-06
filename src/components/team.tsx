import React from 'react';

interface TeamMemberProps {
  name: string;
  title: string;
  imageSrc: string;
}

const CoreTeamMember: React.FC<TeamMemberProps> = ({ name, title, imageSrc }) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-64 transition-transform transform hover:scale-105 hover:shadow-lg">
      <img src={imageSrc} alt={name} className="w-full h-55 object-cover" />
      <div className="p-4 text-center">
        <h4 className="text-lg font-bold">{name}</h4>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
};

const CollaboratorTeamMember: React.FC<TeamMemberProps> = ({ name, title, imageSrc }) => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden w-48 transition-transform transform hover:scale-105 hover:shadow-lg">
      <img src={imageSrc} alt={name} className="w-full h-40 object-cover" />
      <div className="p-3 text-center">
        <h4 className="text-md font-bold">{name}</h4>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
};

const RnDTeamMember: React.FC<TeamMemberProps> = ({ name, title, imageSrc }) => {
  return (
    <div className="text-center">
      <img src={imageSrc} alt={name} className="w-24 h-24 rounded-full mx-auto mb-2 object-cover" />
      <h3 className="text-lg font-bold mb-1">{name}</h3>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );
};

const SectionHeading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="text-center mb-8 mt-8">
      <h3 className="text-xl font-bold bg-gradient-to-r bg-[#f5f5f5] p-2 rounded-md shadow-md inline-block">
        {title}
      </h3>
      <div className="w-1/4 h-1 bg-[#2878ad] mx-auto mt-2"></div>
    </div>
  );
};

const Team: React.FC = () => {
  return (
    <section className="bg-white py-1 px-4">
      <div className="container mx-auto text-center">
        <div className="flex">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#2878ad] to-[#0056b3] text-white px-8 py-4 rounded-md shadow-md" style={{ width: '50%', textAlign: 'left' }}>
            Meet Our Team
          </h2>
        </div>

        <SectionHeading title="Core Team" />
        <div className="mb-6">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
              <CoreTeamMember name="Prof. Dr. Rafia Mumtaz" title="IoT Research Lead" imageSrc="/team/core/WhatsApp Image 2024-08-05 at 3.41.33 PM.jpeg" />
              <CoreTeamMember name="Prof. Dr. Elena Gaura" title="IoT Research Co-Lead" imageSrc="/team/core/download.jpeg" />
            </div>
          </div>
        </div>

        <SectionHeading title="Collaborators" />
        <div className="mb-6">
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
              <CollaboratorTeamMember name="Dr. Daud Abdullah" title="IoT Research Co-Lead" imageSrc="/team/core/Dr Daud pic.png" />
              <CollaboratorTeamMember name="Dr. Ali Hassan" title="IoT Research Co-Lead" imageSrc="/team/core/Dr Ali Hassan.png" />
            </div>
          </div>
        </div>

        <SectionHeading title="R & D Team" />
        <div className="mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <RnDTeamMember name="Mr. Muhammad Mahad Khaliq" title="Machine Learning Engineer" imageSrc="/team/R&T/Mahad Pic.png" />
            <RnDTeamMember name="Mr. Jawad Bashir" title="Machine Learning Engineer" imageSrc="/team/R&T/b5Oc74iQ_2x.jpg" />
            <RnDTeamMember name="Mr. Shahbaz Baig" title="Remote Sensing & GIS Specialist" imageSrc="/team/R&T/J13KUVkY_2x.jpg" />
            <RnDTeamMember name="Rameen Aamir" title="Full Stack Web Developer" imageSrc="/team/R&T/IMG_0498_2.jpg" />
            <RnDTeamMember name="Mr. Abdullah" title="Embedded System Engineer" imageSrc="/team/R&T/abdullah pic.jpg" />
            <RnDTeamMember name="Mahnoor Zamir" title="AI Engineer" imageSrc="/team/R&T/IMG_0498_2.jpg" />
           
            <RnDTeamMember name="Hafiz Ahmed Hassan" title="AI Engineer" imageSrc="/team/R&T/WhatsApp Image 2024-08-06 at 10.07.54 PM.jpeg" />
            <RnDTeamMember name="Afifa Maryam" title="Graphic Designer" imageSrc="/team/R&T/afifa.png" />
            <RnDTeamMember name="Falah Naveed" title="Embedded System Engineer" imageSrc="/team/R&T/WhatsApp Image 2024-08-06 at 8.51.37 PM.jpeg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
