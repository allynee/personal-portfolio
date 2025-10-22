import React from 'react';
import type { FunItem } from '../types';

interface FunPageProps {
  item: FunItem;
  onBack: () => void;
}

const FunPage: React.FC<FunPageProps> = ({ item, onBack }) => {
  return (
    <div className="min-h-screen bg-stone-100 font-sans leading-relaxed">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <button 
          onClick={onBack} 
          className="inline-flex items-center gap-2 text-indigo-900 font-semibold hover:underline mb-8"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Back to Portfolio</span>
        </button>

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-indigo-900 mb-4">{item.name}</h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-700">{item.details.text}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {item.details.images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <img src={image.url} alt={`${item.name} photo ${index + 1}`} className="w-full aspect-square object-cover" />
              <div className="p-4">
                <p className="text-slate-700 text-center">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FunPage;