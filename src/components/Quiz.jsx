import { useState, useEffect } from "react";
import axios from "axios";
import React from 'react';
import Question from "./Question";
import Result from "./Result";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  const fetchQuestions = async () => {
    setLoading(true);  // Set loading state to true before fetching data
    let retries = 5;
    let delay = 2000;
    while (retries > 0) {
      try {
        const response = await fetch('https://opentdb.com/api.php?amount=10');
        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.statusText}`);
        }
        const data = await response.json();
        setQuestions(data.results);
        console.log(data.results);
        setLoading(false);  // Set loading to false after data is fetched
        break;
      } catch (error) {
        if (retries === 1) {
          setError('Failed to fetch questions after multiple attempts.');
          setLoading(false);  // Ensure loading is stopped even after failure
        } else {
          retries -= 1;
          console.log(`Retrying... ${retries} attempts left`);
          await new Promise(resolve => setTimeout(resolve, delay));
          delay *= 2;
        }
      }
    }
  };
  
  
  
  
    useEffect(() => {
    fetchQuestions();
  }, []);

  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowResult(true);
    }
  };

  // Add conditional rendering for loading and error
  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (error) {
    return <div>{error}</div>; // Show detailed error message
  }

  // Ensure `questions` is not empty before rendering
  if (!questions.length) {
    return <div>No questions available</div>;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-96">
      {showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <Question
          data={questions[currentQuestion]}
          onAnswerClick={handleAnswerClick}
        />
      )}
    </div>
  );
};

export default Quiz;
