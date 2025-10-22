import React from 'react';
import type { FunItem } from '../types';

interface HobbyCardProps {
  hobby: FunItem;
  onClick: () => void;
}

const HobbyCard: React.FC<HobbyCardProps> = ({ hobby, onClick }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={onClick}>
      <img src={hobby.imageUrl} alt={hobby.name} className="w-full aspect-square object-cover transform group-hover:scale-110 transition-transform duration-500" />
      <div className="absolute inset-0 bg-indigo-900 bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-500 flex flex-col justify-end p-6">
        <h3 className="text-2xl font-bold text-white mb-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">{hobby.name}</h3>
        <p className="text-stone-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
          {hobby.description}
        </p>
      </div>
    </div>
  );
};

export default HobbyCard;