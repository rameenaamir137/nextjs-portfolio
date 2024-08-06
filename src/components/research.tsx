"use client";
import React, { useState } from 'react';

const Research: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('2023');

  const publications = {
    '2023': [
      {
        title: "U. Shafi, Rafia Mumtaz, Muhammad Deedahwar Mazhar Qureshi, Zahid Mahmood, Sikander Khan Tanveer, Ihsan Ul Haq, Syed Mohammad Hassan Zaidi, \"Embedded AI for Wheat Yellow Rust Infection Type Classification,\" in IEEE Access, pp: 1-13, March 2023, IF: 3.476 doi: 10.1109/ACCESS.2023.3254430",
      },
      {
        title: "Muhammad Naqi Haider, Rafia Mumtaz, Syed Mohammad Hassan Zaidi, Crime Classification Using Machine Learning and Data Analytic, 2022 IEEE 19th International Conference on Smart Communities: Improving Quality of Life Using ICT, IoT and AI (HONET), December 19-21, 2022 [Published on IEEE explorer, 23rd January, 2023]",
      },
      {
        title: "Syed Mohammad Hassan Zaidi, Muhammad Annas Khan, Maham Iftikhar, Rafia Mumtaz, Parsah Rukhsar, Hafiza Zunera, Muhammad Abdul Aleem, \"Quantum Internet: A Revolutionary Disruption”, 2022 IEEE 19th International Conference on Smart Communities: Improving Quality of Life Using ICT, IoT and AI (HONET), December 19-21, 2022 [Published on IEEE explorer, 23rd January, 2023]",
      },
      {
        title: "Uferah Shafi, Rafia Mumtaz, Zahid Mahmood, Muhammad Deedahwar Mazhar Qureshi, Raza Ullah Khan, Syed Ishtiaq Hyder and Sikander Khan Tanveer, [Accepted and presented] Assessment of Wheat Productivity Enhancement by Integrated Nutrient Management (INM) using Remote Sensing, IEEE International Conference on Machine Intelligence for GeoAnalytics and Remote Sensing (MIGARS), 2023",
      }
    ],
    '2022': [
      {
        title: "Muhammad Mahad Khaliq, Rafia Mumtaz, “Enhancing NDVI Calculation of Low-Resolution Imagery using ESRGANs”, 24th International Multi Topic Conference 2022 (INMIC 2022), October 21-22, 2022 [Published on IEEE explorer, 13th December, 2022]",
      },
      {
        title: "Mehreen Ahmed, Rafia Mumtaz, Zahid Anwar, Arslan Shaukat, Omar Arif, and Faisal Shafait , A Multi–Step Approach for Optically Active and Inactive Water Quality Parameter Estimation Using Deep Learning and Remote Sensing, Water, Vol. 14 , No. 13, PP. 1-22, Jul, 2022. IF: 3.530",
      },
      {
        title: "Muhammad Deedahwar Mazhar Qureshi, Rafia Mumtaz, Timo De Waele, Daniel Peralta C'Amara, Adnan Shahid, Eli De Poorter and Ingrid Moerman, Multiclass Heartbeat Classification Using ECG Signals and Convolutional Neural Networks, 2nd International Conference on Digital Futures and Transformative Technologies (ICoDT2), May 24-26, 2022, NUST-EME, Rawalpindi , Pakistan, [Published on IEEE explorer, 08th June 2022]",
      },
      {
        title: "Uferah Shafi · Rafia Mumtaz · Zunaira Shafaq · Syed Mohammad Hassan Zaidi · Muhammad Owais Kaifi · Zahid Mahmood · Syed Ali Raza Zaidi , Wheat rust disease detection techniques: a technical perspective, Journal of Plant Diseases and Protection, Vol. 129 , No. 4, PP. 489–504, Aug, 2022. IF: 1.847",
      },
      {
        title: "Zarlish Ashfaq, Abdur Rafay, Mumtaz, Syed Mohammad Hassan Zaidi, Hadia Saleem Syed Ali Raza Zaidi, Sadaf Mumtaz, Ayesha Haque , A Review of Enabling Technologies for Internet of Medical Things (IoMT) Ecosystem, Ain Shams Engineering Journal, Vol. 13 , No. 4, PP. 101660-101678, Jun, 2022. IF: 3.18",
      },
      {
        title: "Muhammad Deedahwar Mazhar Qureshi, Rafia Mumtaz, Timo De Waele, Daniel Peralta C'Amara, Adnan Shahid, Eli De Poorter and Ingrid Moerman, [Accepted]Multiclass Heartbeat Classification Using ECG Signals and Convolutional Neural Networks, 2nd International Conference on Digital Futures and Transformative Technologies (ICoDT2), May, 2022, NUST-EME, Rawalpindi , Pakistan"
      },
      {
        title: "Fahad Akbar, Mehdi Hussain, Rafia Mumtaz, Qaiser Riaz, Ainuddin Wahid Abdul Wahab, Ki-Hyun Jung, Permissions-Based Detection of Android Malware Using Machine Learning, Symmetry, Vol. 14 , No. 4, PP. 1-19, Apr, 2022. IF: 2.713",
      },
      {
        title: "Aamir Farooq Khan, Rafia Mumtaz, Muhammad Usama, Taimoor Khan Mahsud , Enhanced Water Quality Monitoring and Estimation Using a Multi-Modal Approach, IGI Global , ISBSN 9781799892014, Apr 2022",
      },
      {
        title: "Afaq Ahmed, Ahmad Ali Khan, Ismail Shah, Muhammad Ali Tahir, Rafia Mumtaz , A Rural Healthcare Mobile App: Urdu Voice-Enabled Mobile App for Disease Diagnosis, IGI Global , ISBSN 9781799892014, Apr 2022"
      },
      {
        title: "Hafsa Zubair, Rafia Mumtaz, Hassan Kumail Ali, Abdullah Nasir , Time-Series Analysis and Prediction of Water Quality Through Multisource Data, IGI Global , ISBSN 9781799892014, Apr 2022",
      },
      {
        title: "Aymen Bashir, Abdullah Mughal, Rafia Mumtaz, Muhammad Ali Tahir , Temporal Analysis and Prediction of Ambient Air Quality Using Remote Sensing, Deep Learning, and Geospatial Technologies, IGI Global , ISBSN , Apr 2022",
      },
      {
        title: "Abdul Aziz Chaudhry, Rafia Mumtaz, Usman Ahmad Siddiqui, Syed Hassan Muzammil, Muhammad Ali Tahir , Automated Multi-Sensor Board for IoT and ML-Enabled Livestock Monitoring, IGI Global , ISBSN 9781799892014, Apr 2022",
      },
      {
        title: "Ihsan Ul Haq, Rafia Mumtaz, Muhammad Talha, Zunaira Shafaq and Muhammad Owais , [Accepted]Wheat Rust Disease Classification using Edge-AI, 2nd International Conference of Artificial Intelligence (ICAI-22), Mar, 2022, NUST-NCAI, Islamabad , Pakistan",
      },
      {
        title: "Hamza Khurshid, Rafia Mumtaz, Noor Alvi, Ayesha Haque, Sadaf Mumtaz, Faisal Shafait, Sheraz Ahmed, Muhammad Imran Malik, Andreas Dengel , Bacterial Prediction using Internet of Things (IoT) and Machine Learning, Environmental Monitoring and Assessment., Vol. 194 , No. -, PP. 1-20, Jan, 2022. IF: 2.513",
      },
      {
        title: "Mehreen Ahmed,Rafia Mumtaz, Shahbaz baig, Syed Mohammad Hassan Zaidi , Assessment of correlation amongst physico-chemical, topographical, geological, lithological and soil type parameters for measuring water quality of Rawal watershed using remote sensing, Water Supply, Vol. - , No. -, PP. -, Jan, 2022. IF: 1.275",
      },
      {
        title: "Zarlish Ashfaq, Rafia Mumtaz, Abdur Rafay , Syed Mohammad Hassan Zaidi, Hadia Saleem, Sadaf Mumtaz, Adnan Shahid , Eli De Poorter and Ingrid Moerman , Embedded AI-Based Digi-Healthcare, Applied Sciences, Vol. 12 , No. 1, PP. 1-17, Jan, 2022. IF: 2.679",
      },
      {
        title: "Uferah Shafi, Rafia Mumtaz *, Ihsan Ul Haq, Maryam Hafeez, Naveed Iqbal, Arslan Shaukat, Syed Mohammad Hassan Zaidi, Zahid Mahmood , Wheat Yellow Rust Disease Infection Type Classification using Texture Features, Sensors, Vol. - , No. -, PP. -, Jan, 2022. IF: 3.576",
      },

    ],
    '2021': [
      {
        title: "Hassan Raza Bukhari; Rafia Mumtaz; Salman Inayat; Uferah Shafi; Ihsan Ul Haq; Syed Mohammad Hassan Zaidi; Maryam Hafeez , Assessing the Impact of Segmentation on Wheat Stripe Rust Disease Classification using Computer Vision and Deep Learning, IEEE Access, Vol. - , No. -, PP. -, Dec, 2021. IF: 3.367",
      },
      {
        title: "Muhammad Hassan Maqsood, Rafia Mumtaz , Ihsan Ul Haq, Uferah Shafi, Syed Mohammad Hassan Zaidi and Maryam Hafeez , Super Resolution Generative Adversarial Network (SRGANs) for Wheat Stripe Rust Classification., Sensors, Vol. 21 , No. 23, PP. 1-12, Nov, 2021. IF: 3.576",
      },
      {
        title: "M. Rani, S. Latif, M. A. Tahir and R. Mumtaz, A Survey of Sentiment Analysis of Internet Textual Data and Application to Pakistani YouTube User Comments, 2021 International Conference on Digital Futures and Transformative Technologies (ICoDT2), 2021, pp. 1-6, doi: 10.1109/ICoDT252288.2021.9441524",
      },
      {
        title: "Naveed Iqbal, Rafia Mumtaz, Uferah Shafi, Syed Mohammad Hassan Zaidi, Gray level co-occurrence matrix (GLCM) texture based crop classification using low altitude remote sensing platforms, PeerJ Computer Science, May, 2021. IF: 3.02",
      },
      {
        title: "Leow Wei Qin, Muneer Ahmad, Ihsan Ali, Rafia Mumtaz, Syed Mohammad Hassan Zaidi, Sultan S. Alshamrani, Muhammad Ahsan Raza, and Muhammad Tahir , Precision Measurement for Industry 4.0 Standards towards Solid Waste Classification through Enhanced Imaging Sensors and Deep Learning Model, Wireless Communications and Mobile Computing, May, 2021. IF: 1.819",
      },
      {
        title: "Ayesha Haque, Sadaf Mumtaz, Rafia Mumtaz, Farheen Masood, Hudebia Allah Buksh, Amal Ahmed, Osama Khattak , Assessment of Knowledge, Perceptions and Perceived Risk Concerning COVID-19 in Pakistan, Journal of Epidemiology and Global Health, Jan, 2021. IF: 2.22",
      },
      {
        title: "Uferah Shafi, Rafia Mumtaz *, Ihsan Ul Haq, Maryam Hafeez, Naveed Iqbal, Arslan Shaukat, Syed Mohammad Hassan Zaidi, Zahid Mahmood , Wheat Yellow Rust Disease Infection Type Classification using Texture Features, Sensors, Vol. - , No. -, PP. -, Jan, 2022. IF: 3.576",
      },
      {
        title: "Rafia Mumtaz, Syed Mohammad Hassan Zaidi, Muhammad Zeeshan Shakir,Uferah Shafi, Muhammad Moeez Malik, Ayesha Haque, Sadaf Mumtaz, Syed Ali Raza Zaidi , Internet of Things (IoT) based Indoor Air Quality Sensing and Predictive Analytic: A COVID-19 Perspective, Electronics, Vol. 10 , PP. 1-26, Jan, 2021. IF: 2.412",
      },
    ],
    '2020': [
      {
        title: "Abdul Aziz Chaudry, Rafia Mumtaz, Syed Mohammad Hassan Zaidi, Muhammad Ali Tahir, Syed Hassan Muzammil, Internet of Things (IoT) and Machine Learning (ML) enabled Livestock Monitoring, 17th International IEEE HONET-ICT, Dec 2020, USA",
      },
      {
        title: "Osama Nadeem, Muhammad Shajee Saeed, Muhammad Ali Tahir, Rafia Mumtaz, A Survey of Artificial Intelligence and Internet of Things (IoT) based approaches against Covid-19, 17th International IEEE HONET-ICT, Dec 2020, USA",
      },
      {
        title: "Talha Ikram, Abdullah Saeed, Noor Ul Ayn, Muhammad Ali Tahir, Rafia Mumtaz A review of the prevalent ICT techniques used for COVID-19 SOP violation detection, 17th International IEEE HONET-ICT, Dec 2020, USA",
      },
      {
        title: "Ahmed, M.; Mumtaz, R.; Zaidi, S.M.H.; Hafeez, M.; Zaidi, S.A.R.; Ahmad, M. Distributed Fog Computing for Internet of Things (IoT) Based Ambient Data Processing and Analysis. Electronics, October, 2020, 9, 1756. IF: 2.412",
      },
      {
        title: "Ayesha Haque, Sadaf Mumtaz, Osama Khattak, Rafia Mumtaz, Amal Ahmed, Comparing the preventive behaviour of medical students and physicians in the era of COVID-19; novel medical problems demand novel-curricular interventions, Biochemistry and Molecular Biology Education, Vol. 48, No. 5, October, 2020. IF: 0.947",
      }
      ,
      {
        title: "Uferah Shafi, Rafia Mumtaz, Naveed Iqbal, S M Zaidi, Syed Ali Raza Zaidi, Imtiaz Hussain, Zahid Mahmood , A Multi-modal Approach for Crop Health Mapping using low altitude Remote Sensing, Internet of Things (IoT) and Machine Learning, IEEE Access, Vol. 8 , No. -, PP. 112708-112724, Jun, 2020. IF: 4.64",
      },
      {
        title: "Saqib Kazmi, Mehreen Ahmed, Rafia Mumtaz, Zahid Anwar, Spatiotemporal Clustering and Analysis of Road Accident Hotspots by Exploiting GIS Technology and Kernel Density Estimation, The Computer Journal, May, 2020. IF: 1.35",
      },
      {
        title: "Abbas, Qamar; Zeb, Shah; Hassan, Syed Ali; Mumtaz, Rafia; Zaidi, Syed Ali Raza; , Joint Optimization of Age of Information and Energy Efficiency in IoT Networks, Proceedings of the IEEE Vehicular Technology Conference, May, 2020, Antwerp , Belgium.",
      },
      {
        title: "Umair Ahmed, Rafia Mumtaz, Hirra Anwar, Sadaf Mumtaz, Ali Mustafa Qamar , Water Quality Monitoring: From Conventional to Emerging Technologies , Water Supply, Vol 20, No.1, pp-28-45, 1st Feb, 2020 IF: 0.922",
      }
    ],
    '2019': [
      {
        title: "Uferah Shafi, Rafia Mumtaz,Syed Ali Hassan, Syed Ali Raza Zaidi, Awais Akhtar, Muhammad Moeez Malik , Crop health monitoring using IOT-enabled precision agriculture, IGI Global , ISBSN 9781799812531, Dec 2019",
      },
      {
        title: "Umair Ahmed, Rafia Mumtaz *, Hirra Anwar, Asad Ali Shah, Rabia Irfan, José García-Nieto , Efficient Water Quality Prediction Using Supervised Machine Learning, Water, Vol. 11 , No. 11, PP. 1-14, Oct, 2019. IF: 2.524",
      },
      {
        title: "Uferah Shafi , Rafia Mumtaz , José García-Nieto, Syed Ali Hassan , Syed Ali Raza Zaidi, and Naveed Iqbal , Precision Agriculture Techniques and Practices: From Considerations to Applications, Sensors, Vol. 19 , No. 17, PP. 1-25, Sep, 2019. IF: 3.031",
      },
      {
        title: "Rafia Mumtaz, Shahbaz Baig, Syed Saqib Ali Kazmi, Iram Fatima, Farooq Ahmad, Badar Ghauri , Delineation of Groundwater Prospective Resources by Exploiting Geo-spatial Decision Making Techniques for the Kingdom of Saudi Arabia, Journal of neural computing & applications, Vol. 31 , No. 9, PP. 5379–5399, Sep, 2019. IF: 4.662",
      },
      {
        title: "Zeb, Shah; Abbas, Qamar; Hassan, Syed Ali; Mahmood, Aamir; Mumtaz, Rafia; Zaidi, SM; Zaidi, Syed Ali Raza; Gidlund, Mikael , NOMA Enhanced Backscatter Communication for Green IoT Networks, Proceedings of the 16th International Symposium on Wireless Communication Systems (ISWCS), Aug, 2019, University of Oulu , Finland",
      },
      {
        title: "Iram Fatima, Burhan Ud Din Abbasi, Sharifullah Khan, Majed Al‐Saeed, Hafiz Farooq Ahmad, Rafia Mumtaz , Prediction of postpartum depression using machine learning techniques from social media text, Expert Systems, PP. 1-13, Apr, 2019. IF: 1.505",
      }
    ],
    '2018': [
      {
        title: "Zafar Iqbal, Zahid Anwar, Rafia Mumtaz , STIXGEN - A novel framework for Automatic Generation of Structured Cyber Threat Information, Proceedings of the Frontiers of Information Technology, Dec, 2018, Comsats university , Pakistan",
      },
      {
        title: "Yumna Ghazi, Zahid Anwar, Rafia Mumtaz, Shahzad Saleem and Ali Tahir, A Supervised Machine Learning Based Approach for Automatically Extracting High-Level Threat Intelligence from Unstructured Sources, Proceedings of the Frontiers of Information Technology, Dec, 2018, COMSATS University, Pakistan",
      },
      {
        title: "Uferah Shafi, Rafia Mumtaz, Hirra Anwar, Mustafa Ali Qammar, Hamza Khurshed, Surface Water Pollution Detection using Internet of Things, Proceedings of the 15th International IEEE HONET-ICT, 2018, Pakistan",
      },
      {
        title: "Hammad Amir, Rafia Mumtaz, Hirra Anwar, Stefan Poslad, A Very Low Cost, Open, Wireless, Internet of Things (IoT) Air Quality Monitoring Platform, Proceedings of the 15th International IEEE HONET-ICT, 2018, Pakistan",
      },
      {
        title: "Uferah Shafi, Muhammad Zeeshan, Naveed Iqbal, Nadia Kalsoom, Rafia Mumtaz, An Optimal Distributed Algorithm for Best AP Selection and Load Balancing in WiFi, Proceedings of the 15th International IEEE HONET-ICT, 2018, Pakistan",
      },
      {
        title: "Rabia Latif, Sadaf Mumtaz, Rafia Mumtaz, Amir Hussain , Comparison of Debate and Role Play during Problem Based Learning, Biochemistry and Molecular Biology Education, Vol. 46 , No. 4, PP. 336-342, Apr, 2018. IF: 0.627",
      },
      {
        title: "Rafia Mumtaz, Muddasser Hussain, Saba Sarwar, Komal Khan, Sadaf Mumtaz, Mustafa Mumtaz, Automatic Detection of Retinal Hemorrhages by Exploiting Image Processing Techniques for Screening Retinal Diseases in Diabetic Patients doi:10.1007/s13410-017-0561-6, International Journal of Diabetes in Developing Countries, Vol. 38, No. 1, pp. 80-87, Mar, 2018. IF: 0.585"
      }
    ],
    // Add more years as needed
  };

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
  ];

  return (
    <section id="research" className="p-5">
      <h2
        className="text-3xl mt-10 mb-20 font-bold mb-6 bg-gradient-to-r from-[#2878ad] to-[#0056b3] text-white px-8 py-4 rounded-md shadow-md"
        style={{ width: '50%', textAlign: 'left' }}
      >
        Publications
      </h2>

      <div className="flex justify-center mb-5">
        {Object.keys(publications).map((year) => (
          <button
            key={year}
            className={`mx-2 py-2 px-4 rounded ${activeTab === year ? 'bg-blue-500 text-white' : 'bg-gray-200'} transition-colors duration-300`}
            onClick={() => setActiveTab(year)}
          >
            {year}
          </button>
        ))}
        <button
          className={`mx-2 py-2 px-4 rounded ${activeTab === 'patents' ? 'bg-blue-500 text-white' : 'bg-gray-200'} transition-colors duration-300`}
          onClick={() => setActiveTab('patents')}
        >
          Patents
        </button>
      </div>

      <div className="flex justify-center">
        <div className="overflow-x-auto max-w-screen-md">
          {activeTab === 'patents' ? (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Application ID</th>
                </tr>
              </thead>
              <tbody>
                {patents.map((patent, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                    <td className="px-6 py-4 text-sm text-gray-900">{patent.title}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{patent.id}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Title</th>
                </tr>
              </thead>
              <tbody>
                {publications[activeTab].map((pub, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                    <td className="px-6 py-4 text-sm text-gray-900">{pub.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </section>
  );
};

export default Research;
