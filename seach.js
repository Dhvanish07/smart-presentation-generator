import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  
  // State for user input and slide selection
  const [topic, setTopic] = useState("");
  const [slides, setSlides] = useState("8-12");

  // Predefined suggestions
  const suggestions = [
    { title: "History of the Universe", description: "A journey from the Big Bang to the formation of galaxies." },
    { title: "The History of NASA", description: "Discover NASA's most important achievements." }
  ];

  // Function to handle user selecting a suggestion
  const handleSuggestionClick = (suggestion) => {
    setTopic(suggestion);
  };

  // Function to handle slide selection
  const handleSlideSelection = (slideCount) => {
    setSlides(slideCount);
  };

  // Function to navigate to the next page
  const handleNext = () => {
    if (topic.trim() !== "") {
      navigate("/theme");  // Navigate only if text box is filled
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
            <button onClick={() => navigate("/theme")} className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold bg-gray-300">
              2
            </button>
            <button onClick={() => navigate("/category")} className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold bg-gray-300">
              3
            </button>
          </div>
          
          {/* Close Button */}
          <button onClick={() => navigate("/")} className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center mb-2">AI Presentation Maker 
          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">BETA</span>
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Level up your slides game with our AI Presentation Maker. Generate a professional presentation in seconds!
        </p>

        {/* Text Input */}
        <div className="mb-6">
          <textarea
            className="w-full p-4 border border-gray-300 rounded-lg"
            rows="4"
            placeholder="Tell us your topic or goal"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          ></textarea>
        </div>

        {/* Buttons: Next & Slide Selection */}
        <div className="flex justify-between items-center mb-6">
          <button 
            className={`px-6 py-3 rounded-lg flex items-center space-x-2 text-white transition ${
              topic.trim() !== "" ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={handleNext}
            disabled={topic.trim() === ""}
          >
            <span>Next</span>
            <i className="fas fa-arrow-right"></i>
          </button>

          {/* Slide Selection Dropdown */}
          <div className="relative">
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2">
              <i className="fas fa-layer-group"></i>
              <span>{`Slides (${slides})`}</span>
              <i className="fas fa-chevron-down"></i>
            </button>
            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-lg shadow-lg">
              <ul className="text-gray-700">
                {[5, 8, 10, 12].map((num) => (
                  <li 
                    key={num} 
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer" 
                    onClick={() => handleSlideSelection(num)}
                  >
                    {num} Slides
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="text-center text-gray-600 mb-4">
          <i className="fas fa-lightbulb text-purple-500"></i>
          <span className="ml-2">Need some ideas?</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index} 
              className="p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-100 transition"
              onClick={() => handleSuggestionClick(suggestion.title + "\n" + suggestion.description)}
            >
              <h2 className="font-semibold mb-1">{suggestion.title}</h2>
              <p className="text-gray-600 text-sm">{suggestion.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
