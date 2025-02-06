// src/App.jsx
import React, { useState } from 'react';
import StartExam from './components/StartExam';
import Quiz from './components/Quiz';

function App() {
  const [quizStarted, setQuizStarted] = useState(false);

  const startQuiz = () => {
    setQuizStarted(true);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      {quizStarted ? (
        <Quiz />
      ) : (
        <StartExam onStart={startQuiz} />
      )}
    </div>
  );
}

export default App;
