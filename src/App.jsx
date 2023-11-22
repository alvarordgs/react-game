import { useState } from "react";
import { Button } from "./components/Button";
import QuestionsModal from "./components/QuestionsModal";

function App() {

  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div className="main-bg-color h-screen w-full">
      <div className="flex flex-col gap-8 items-center justify-between p-6 h-full">
        <header className="flex flex-col gap-5 items-center justify-center">
          <span className="text-sm text-gray-100 font-semibold">
            Álvaro Rodrigues, Iago Luciano, Jean Carlos e Marllon Bruno
          </span>
          <h1 className="text-4xl font-bold text-purple-300">JS Bests Practices Quiz</h1>
        </header>
        <main className="flex flex-col gap-6">
          <Button buttonText="Novo jogo" className="text-purple-900 hover:bg-purple-200 hover:border-purple-200" onClick={() => setQuizStarted(true)}/>
          <Button buttonText="Sobre" className="text-purple-900 hover:bg-purple-200 hover:border-purple-200"/>
        </main>
        <footer className="flex flex-col justify-center items-center text-gray-200">
          <h4>IFTM - CAUPT</h4>
          <p>Análise e Desenvolvimento de Sistemas</p>
          <p>Tecnologias e Interfaces para Aplicações Web</p>
        </footer>
      </div>
      {quizStarted && <QuestionsModal quizStarted={quizStarted} setQuizStarted={setQuizStarted} />}
    </div>
  );
}

export default App;
