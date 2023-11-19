import { useState } from "react";
import { quizQuestions } from "../data";

export default function QuestionsModal() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerClick = (isCorrect) => {
    setUserAnswers([...userAnswers, isCorrect]);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const renderQuestion = () => {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (!currentQuestion) {
      return <p>Quiz completed!</p>;
    }

    return (
      <div>
        <h2>
          {currentQuestionIndex + 1} - {currentQuestion.question}
        </h2>
        {currentQuestion.alternatives.map((alternative, index) => (
          <div key={index} onClick={() => handleAnswerClick(alternative.isCorrect)}>
            {alternative.text}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className=" w-[700px] h-[450px] z-50 p-6 shadow-gd-medium-shadow rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
      <div className="p-5">
        {renderQuestion()}
      </div>
    </div>
  );
}
