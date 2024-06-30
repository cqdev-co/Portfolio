import React from 'react';

const Projects = () => {
  return (
    <div className="min-h-screen bg- flex flex-col items-center">
      <h1 className="text-4xl font-sans font-bold mt-20 gradient-text"> Projects </h1>
      <p className="text-center text-gray-600">
        Coding Projects Showcase
      </p>
      {/* Project Cards */}
      <div className="flex overflow-x-auto space-x-4 ml-24 w-full mt-6">
        <div className="flex-shrink-0 rounded-lg shadow-md w-80 h-[28rem] bg-cover bg-center 
                        p-4 flex flex-col justify-end font-sans bg-white relative border border-gray-200">
        <div className="absolute inset-0 flex items-center justify-center rounded-lg overflow-hidden bottom-40">
            <img src='./images/trypearai_logo.jpeg' alt='PearAI Logo' className="max-w-full max-h-full object-contain" />
        </div>
          {/* Title / Description */}
          <h2 className="relative text-2xl font-bold gradient-text">PearAI</h2>
          <p className="relative mt-2">The Open Source AI‑Powered Code Editor</p>
          <div className="flex space-x-2 mt-4 text-white">
            {/* Tags */}
            <span className="bg-gray-700 rounded-full px-3 py-1">CI/CD</span>
            <span className="bg-gray-700 rounded-full px-3 py-1">Backend</span>
            <span className="bg-gray-700 rounded-full px-3 py-1">Python</span>
          </div>
        </div>
        {/* Add more project cards as needed */}
        <div className="flex-shrink-0 rounded-lg shadow-md w-80 h-[28rem] bg-cover bg-center 
                        p-4 flex flex-col justify-end font-sans bg-white relative border border-gray-200">
        <div className="absolute inset-0 flex items-center justify-center rounded-lg overflow-hidden bottom-40">
            <img src='./images/trypearai_logo.jpeg' alt='PearAI Logo' className="max-w-full max-h-full object-contain" />
        </div>
          {/* Title / Description */}
          <h2 className="relative text-2xl font-bold gradient-text">PearAI</h2>
          <p className="relative mt-2">The Open Source AI‑Powered Code Editor</p>
          <div className="flex space-x-2 mt-4 text-white">
            {/* Tags */}
            <span className="bg-gray-700 rounded-full px-3 py-1">CI/CD</span>
            <span className="bg-gray-700 rounded-full px-3 py-1">Backend</span>
            <span className="bg-gray-700 rounded-full px-3 py-1">Python</span>
          </div>
        </div>
        <div className="flex-shrink-0 rounded-lg shadow-md w-80 h-[28rem] bg-cover bg-center 
                        p-4 flex flex-col justify-end font-sans bg-white relative border border-gray-200">
        <div className="absolute inset-0 flex items-center justify-center rounded-lg overflow-hidden bottom-40">
            <img src='./images/trypearai_logo.jpeg' alt='PearAI Logo' className="max-w-full max-h-full object-contain" />
        </div>
          {/* Title / Description */}
          <h2 className="relative text-2xl font-bold gradient-text">PearAI</h2>
          <p className="relative mt-2">The Open Source AI‑Powered Code Editor</p>
          <div className="flex space-x-2 mt-4 text-white">
            {/* Tags */}
            <span className="bg-gray-700 rounded-full px-3 py-1">CI/CD</span>
            <span className="bg-gray-700 rounded-full px-3 py-1">Backend</span>
            <span className="bg-gray-700 rounded-full px-3 py-1">Python</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
