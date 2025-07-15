import React, { useState, useEffect, useCallback } from 'react';
import { type Level, type Question } from './types';
import { QUESTIONS, LEVELS } from './data/questions';
import LevelSelector from './components/LevelSelector';
import QuestionCard from './components/QuestionCard';
import FireIcon from './components/icons/FireIcon';

const App: React.FC = () => {
  const [level, setLevel] = useState<Level>('Calentando Motores');
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [viewedQuestions, setViewedQuestions] = useState<number[]>([]);

  const selectRandomQuestion = useCallback((selectedLevel: Level) => {
    const levelQuestions = QUESTIONS[selectedLevel];
    let availableQuestions = levelQuestions.filter(q => !viewedQuestions.includes(q.id));

    if (availableQuestions.length === 0) {
      // All questions viewed for this level, reset viewed list for this level
      const levelQuestionIds = levelQuestions.map(q => q.id);
      setViewedQuestions((prev: number[]) => prev.filter((id: number) => !levelQuestionIds.includes(id)));
      availableQuestions = levelQuestions;
    }
    
    const randomIndex = Math.floor(Math.random() * availableQuestions.length);
    const newQuestion = availableQuestions[randomIndex];

    setCurrentQuestion(newQuestion);
    setViewedQuestions((prev: number[]) => [...prev, newQuestion.id]);
  }, [viewedQuestions]);


  useEffect(() => {
    selectRandomQuestion(level);
     // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [level]);

  const handleNextQuestion = useCallback(() => {
    selectRandomQuestion(level);
  }, [level, selectRandomQuestion]);

  const handleLevelChange = (newLevel: Level) => {
    if (newLevel !== level) {
      setLevel(newLevel);
      // Reset viewed questions when changing level to start fresh
      setViewedQuestions([]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-4 selection:bg-red-500/30">
      <main className="w-full max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex items-center justify-center gap-3 mb-2">
          <FireIcon className="w-10 h-10 text-orange-400" />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-center bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-red-600">
            Fuego a Fuego
          </h1>
          <FireIcon className="w-10 h-10 text-orange-400" />
        </div>
        <p className="text-gray-400 text-center mb-8 text-lg">El Juego de las Decisiones Ardientes</p>
        
        <LevelSelector 
          levels={LEVELS}
          activeLevel={level}
          onSelectLevel={handleLevelChange}
        />

        <div className="w-full mt-8 min-h-[300px] md:min-h-[250px]">
          {currentQuestion && (
            <QuestionCard 
              key={currentQuestion.id}
              question={currentQuestion}
              onNextQuestion={handleNextQuestion}
            />
          )}
        </div>
        
        <div className="mt-8 text-center">
            <button 
                onClick={handleNextQuestion}
                className="bg-slate-700 hover:bg-slate-600 text-gray-200 font-semibold py-3 px-8 rounded-full transition-all duration-300 ease-in-out shadow-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
                Siguiente Pregunta
            </button>
        </div>
      </main>
      <footer className="absolute bottom-4 text-xs text-slate-600">
        Creado para noches inolvidables. Juega con confianza y respeto.
      </footer>
    </div>
  );
};

export default App;
