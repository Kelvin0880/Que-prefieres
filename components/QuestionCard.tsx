
import React from 'react';
import { type Question } from '../types';

interface QuestionCardProps {
  question: Question;
  onNextQuestion: () => void;
}

const OptionButton: React.FC<{ text: string, onClick: () => void }> = ({ text, onClick }) => (
  <button 
    onClick={onClick}
    className="relative flex-1 w-full md:w-auto p-6 bg-slate-800/70 rounded-2xl text-left border-2 border-transparent hover:border-red-500/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 group"
  >
    <p className="text-lg md:text-xl text-gray-200 group-hover:text-white">{text}</p>
  </button>
);

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onNextQuestion }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-fade-in flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4 p-4">
      <OptionButton text={question.optionA} onClick={onNextQuestion} />
      
      <div className="flex-shrink-0 my-4 md:my-0 w-16 h-16 bg-slate-900 border-2 border-red-600/70 rounded-full flex items-center justify-center text-2xl font-black text-red-500 shadow-lg">
        O
      </div>

      <OptionButton text={question.optionB} onClick={onNextQuestion} />
    </div>
  );
};

export default QuestionCard;
