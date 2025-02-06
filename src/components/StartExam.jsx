// src/components/StartExam.jsx
import React from 'react';

const StartExam = ({ onStart }) => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96 text-center">
        <h1 className="text-3xl font-bold text-blue-500 mb-4">Welcome to the Quiz</h1>
        <p className="text-lg mb-6">
          Test your knowledge! You will have a limited time for each question. Good luck!
        </p>
        <button
          onClick={onStart}
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Start Exam
        </button>
      </div>
    </div>
  );
};

export default StartExam;
