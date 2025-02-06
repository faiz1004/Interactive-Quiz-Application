import React from 'react'; // Add this line

const Result = ({ score, total }) => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
      <p className="text-lg mb-4">
        Your Score: <span className="font-bold">{score}</span> / {total}
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-4 bg-green-500 text-white p-2 rounded-md hover:bg-green-700"
      >
        Play Again
      </button>
    </div>
  );
};

export default Result;
