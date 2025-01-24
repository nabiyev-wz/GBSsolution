import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h3 className="text-xl font-bold mb-2">Green Life</h3>
          <p>&copy; 2025 Green Life. All Rights Reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 mt-4 md:mt-0">
          <a href="#" className="text-white hover:text-gray-400 mb-2 md:mb-0">
            Facebook
          </a>
          <a href="#" className="text-white hover:text-gray-400 mb-2 md:mb-0">
            Instagram
          </a>
          <a href="#" className="text-white hover:text-gray-400 mb-2 md:mb-0">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
