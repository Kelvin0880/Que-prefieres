
import React from 'react';
import { type Level } from '../types';

interface LevelSelectorProps {
  levels: Level[];
  activeLevel: Level;
  onSelectLevel: (level: Level) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ levels, activeLevel, onSelectLevel }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center p-2 bg-slate-800 rounded-full shadow-md gap-2">
      {levels.map((level) => (
        <button
          key={level}
          onClick={() => onSelectLevel(level)}
          className={`px-4 sm:px-6 py-3 text-sm sm:text-base font-semibold rounded-full transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-800 focus:ring-red-500
            ${
              activeLevel === level
                ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                : 'bg-transparent text-gray-400 hover:bg-slate-700/50 hover:text-white'
            }
          `}
        >
          {level}
        </button>
      ))}
    </div>
  );
};

export default LevelSelector;
