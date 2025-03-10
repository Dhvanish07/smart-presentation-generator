import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");

  // List of categories
  const categories = [
    "Business",
    "Technology",
    "Education",
    "Health",
    "Science",
    "Marketing"
  ];

  // Function to select category
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Function to navigate to the next page
  const handleNext = () => {
    if (selectedCategory) {
      navigate("/final");
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
            <button onClick={() => navigate("/theme")} className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold bg-purple-500">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full text-white font-bold bg-purple-500">
              3
            </button>
          </div>

          {/* Close Button */}
          <button onClick={() => navigate("/")} className="text-gray-500 hover:text-gray-700">
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-semibold text-center mb-2">Choose a Category</h1>
        <p className="text-center text-gray-600 mb-6">
          Select a category that best fits your presentation topic.
        </p>

        {/* Category Selection */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {categories.map((category, index) => (
            <button 
              key={index} 
              className={`p-4 border rounded-lg text-center transition ${
                selectedCategory === category ? "bg-purple-600 text-white" : "bg-gray-100 hover:bg-gray-200"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Next Button */}
        <div className="flex justify-end">
          <button 
            className={`px-6 py-3 rounded-lg text-white transition ${
              selectedCategory ? "bg-purple-600 hover:bg-purple-700" : "bg-gray-400 cursor-not-allowed"
            }`}
            onClick={handleNext}
            disabled={!selectedCategory}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Category;
