import { useState } from "react";
import { quizQuestions } from "../data";
import { Button } from "./Button";
import PropTypes from 'prop-types';
//import clsx from 'clsx';


export default function QuestionsModal({ quizStarted, setQuizStarted }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);


  const handleAnswerClick = (isCorrect) => {
    setUserAnswers([...userAnswers, isCorrect]);
    setIsAnswerCorrect(isCorrect);
  
    setTimeout(() => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsAnswerCorrect(null);
    }, 1500);
  };

  const currentQuestion = quizStarted ? quizQuestions[currentQuestionIndex] : null;

  const numberOfCorrectAnswers = userAnswers.filter(answer => answer === true).length;

  // const getAnswerColorClass = (index) => {
  //   if (isAnswerCorrect !== null && index === userAnswers.length - 1) {
  //     return isAnswerCorrect ? 'bg-green-500' : 'bg-red-500';
  //   }
  //   return '';
  // };

  const renderQuestion = () => {
    if (!currentQuestion) {
      return (
        <div className="flex flex-col items-center justify-center gap-5">
          <div>
            <h2>Sua pontuação: </h2>
            <span>{numberOfCorrectAnswers}</span>
          </div>
          <Button
            buttonText="Jogar Novamente"
            className="text-purple-900 hover:bg-purple-200 hover:border-purple-200"
            onClick={() => {
              setCurrentQuestionIndex(0);
              setUserAnswers([]);
            }}
          />
          <Button
            buttonText="Voltar ao início"
            className="text-purple-900 hover:bg-purple-200 hover:border-purple-200"
            onClick={() => setQuizStarted(false)}
          />
        </div>
      );
    }

    return (
      <div>
        <h2>
          {currentQuestionIndex + 1} - {currentQuestion.question}
        </h2>
        {currentQuestion.alternatives.map((alternative, index) => (
          <div
          key={index}
          onClick={() => handleAnswerClick(alternative.isCorrect, index)}
          className={`${
            isAnswerCorrect !== null && alternative.isCorrect
              ? 'bg-green-500'
              : isAnswerCorrect !== null && !alternative.isCorrect
              ? 'bg-red-500'
              : ''
          } p-2 mb-2 rounded cursor-pointer transition-colors duration-500`}
          >
            {alternative.option}) {alternative.text}
          </div>
        ))}

      </div>
    );
  };

  return (
    <div className=" w-[600px] h-[300px] z-50 p-6 shadow-gd-medium-shadow rounded-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white">
      <div className={!currentQuestion ? "flex items-center justify-center h-full p-5" : "p-5"}>
        {renderQuestion()}
      </div>
    </div>
  );
}


QuestionsModal.propTypes = {
  setQuizStarted: PropTypes.func.isRequired,
  quizStarted: PropTypes.bool.isRequired,
};