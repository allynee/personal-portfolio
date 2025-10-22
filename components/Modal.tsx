import React, { useEffect, useRef } from 'react';
import type { FunItem } from '../types';

interface ModalProps {
  item: FunItem | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };

    if (item) {
      document.addEventListener('keydown', handleKeydown);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'auto';
    };
  }, [item, onClose]);

  if (!item) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 transition-opacity duration-300" role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div ref={modalRef} className="bg-stone-50 rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-500 hover:text-indigo-800 transition-colors z-10" aria-label="Close dialog">
          <i className="fas fa-times fa-2x"></i>
        </button>
        
        <h2 id="modal-title" className="text-3xl md:text-4xl font-bold text-indigo-900 mb-4">{item.name}</h2>
        <p className="text-slate-700 mb-6">{item.details.text}</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {item.details.images.map((img, index) => (
            // Fix: Pass `img.url` to the `src` attribute and use `img.caption` for `alt` text, as `img` is an object.
            <img key={index} src={img.url} alt={img.caption} className="w-full h-48 object-cover rounded-md shadow-md" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
