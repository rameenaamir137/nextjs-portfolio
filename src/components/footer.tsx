import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E5E9F2] text-[#3B3B3B] py-8">
      <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
          <img src="/national-university.png" alt="NUST Logo" className="w-32 mb-4 mx-auto md:mx-0" />
          <p>SEECS is committed to providing high-quality engineering education in Pakistan with a focus on the socio-economic uplift of the country.</p>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0 text-center">
          <h3 className="text-xl font-semibold mb-2">About Us</h3>
          <ul className="list-none p-0">
            <li className="my-2"><a href="#" className="hover:underline">About Us</a></li>
            <li className="my-2"><a href="#" className="hover:underline">Courses</a></li>
            <li className="my-2"><a href="#" className="hover:underline">Events</a></li>
            <li className="my-2"><a href="#" className="hover:underline">Blogs</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0 text-center">
          <h3 className="text-xl font-semibold mb-2">Useful Lnks</h3>
          <ul className="list-none p-0">
            <li className="my-2"><a href="#" className="hover:underline">Home</a></li>
            <li className="my-2"><a href="#" className="hover:underline">Contact</a></li>
            <li className="my-2"><a href="#" className="hover:underline">Login</a></li>
            <li className="my-2"><a href="#" className="hover:underline">Events</a></li>
            <li className="my-2"><a href="#" className="hover:underline">Student Registeration</a></li>
          </ul>
        </div>

        <div className="w-full md:w-1/5 mb-8 md:mb-0 text-center">
          <h3 className="text-xl font-semibold mb-2">Address</h3>
          <div className="flex justify-center md:justify-start">
            <p>NUST SEECS H-12 Sector Islamabad

Email: info@seecs.edu.pk

Call Us: +(51) 9085 240</p>
          </div>
        </div>

        <div className="w-full md:w-1/4 text-center">
          <h3 className="text-xl font-semibold mb-2">Subscription</h3>
          <div className="flex justify-center items-center">
            <input type="email" placeholder="Enter your email" className="p-2 rounded-l-md border border-gray-300" />
            <button className="bg-[#3B3B3B] text-white p-2 rounded-r-md">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-center md:text-left">
            <p>&copy; 2024 NUST SEECS</p>
          </div>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
