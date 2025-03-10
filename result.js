import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const navigate = useNavigate();
  const [pptFile, setPptFile] = useState("AI_Presentation.pptx");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md text-center">

        {/* Success Message */}
        <h1 className="text-2xl font-semibold text-green-600 mb-2">
          🎉 Presentation Generated!
        </h1>
        <p className="text-gray-600 mb-6">
          Your AI-powered presentation is ready for download.
        </p>

        {/* Download Button */}
        <div className="mb-6">
          <a
            href={`/downloads/${pptFile}`}
            download={pptFile}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700"
          >
            📥 Download PPT
          </a>
        </div>

        {/* Actions */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate("/")}
            className="bg-gray-400 text-white px-6 py-3 rounded-lg hover:bg-gray-500"
          >
            Create New Presentation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
