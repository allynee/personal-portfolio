import React from 'react';
import { FUN_ITEMS } from '../constants';
import HobbyCard from './HobbyCard';
import type { FunItem } from '../types';

interface FunProps {
    onItemClick: (item: FunItem) => void;
}

const Fun: React.FC<FunProps> = ({ onItemClick }) => {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-bold text-center text-slate-800 mb-12">more about me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {FUN_ITEMS.map(item => (
          <HobbyCard key={item.id} hobby={item} onClick={() => onItemClick(item)} />
        ))}
      </div>
    </section>
  );
};

export default Fun;