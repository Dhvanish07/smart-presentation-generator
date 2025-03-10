import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">AI Presentation Maker</h1>
        <p className="text-gray-600 mb-6">
          Generate high-quality presentations in seconds with AI.
        </p>

        {/* Get Started Button */}
        <button
          onClick={() => navigate("/search")}
          className="bg-purple-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-purple-700 transition"
        >
          Get Started
        </button>

        {/* How It Works Button */}
        <div className="mt-4">
          <button
            onClick={() => setShowPopup(true)}
            className="text-purple-600 text-lg font-medium flex items-center justify-center"
          >
            <i className="fas fa-question-circle mr-2"></i> How does it work?
          </button>
        </div>
      </div>

      {/* How It Works Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-2">How It Works</h2>
            <ol className="list-decimal list-inside text-gray-700">
              <li>Enter your topic or select a suggestion.</li>
              <li>Choose a theme for your slides.</li>
              <li>Select a category for better structuring.</li>
              <li>Generate and download your AI-powered presentation.</li>
            </ol>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
