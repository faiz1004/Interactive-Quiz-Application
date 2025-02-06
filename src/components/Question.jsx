// src/components/Question.jsx
import React from "react";

const Question = ({ data, onAnswerClick }) => {
  if (!data) {
    return <div>Loading question...</div>; // Handle undefined `data`
  }

  const options = [...data.incorrect_answers, data.correct_answer];
  const shuffledOptions = options.sort(() => Math.random() - 0.5);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">{data.question}</h2>
      <div className="space-y-2">
        {shuffledOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswerClick(option)}
            className="w-full p-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 transition duration-300"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
