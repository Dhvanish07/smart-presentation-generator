import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Theme = () => {
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = useState("");

  // List of themes
  const themes = [
    { name: "Minimalist", color: "bg-gray-200" },
    { name: "Dark Mode", color: "bg-gray-800 text-white" },
    { name: "Corporate", color: "bg-blue-200" },
    { name: "Modern", color: "bg-green-200" },
    { name: "Creative", color: "bg-purple-200" },
  ];

  // Function to select a theme
  const handleThemeClick = (themeName) => {
    setSelectedTheme(themeName);
  };

  // Function to navigate to the next page
  const handleNext = () => {
    if (selectedTheme) {
      navigate("/category");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        
        {/* Step Indicator */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center space-x-2">
            <button onClick={() => navigate("/search")} className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold bg-purple-500">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold bg-purple-500">
              2
            </button>
            <button onClick={() => navigate("/category")} className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold bg-gray-300 hover:bg-gray-400">
              3
            </button>
          </div>

          {/* Close Button */}
          <button onClick={() => navigate("/")} className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center mb-2">Choose a Theme</h1>
        <p className="text-center text-gray-600 mb-6">
          Select a theme that best suits your presentation style.
        </p>

        {/* Theme Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {themes.map((theme, index) => (
            <button
              key={index}
              className={`p-4 border rounded-lg text-center transition ${
                selectedTheme === theme.name ? "border-4 border-purple-500" : "bg-gray-100 hover:bg-gray-200"
              } ${theme.color}`}
              onClick={() => handleThemeClick(theme.name)}
            >
              {theme.name}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button 
            className={`px-6 py-3 rounded-lg text-white transition ${
              selectedTheme ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={handleNext}
            disabled={!selectedTheme}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Theme;
