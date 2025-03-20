'use client';

import { useState } from 'react';

export default function Essays() {
  const [selectedEssay, setSelectedEssay] = useState<string | null>(null);

  const essays = [
    {
      id: '1',
      title: 'The Art of Simplicity',
      date: 'March 15, 2025',
      content: 'Simplicity is not just about removing clutter—it’s about finding clarity. In a world overflowing with noise, I’ve learned that less can indeed be more.',
    },
    {
      id: '2',
      title: 'A Walk Through Time',
      date: 'March 10, 2025',
      content: 'Time moves forward, but our minds wander back. This is a short reflection on moments that shaped me—some loud, some quiet, all significant.',
    },
  ];

  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-full sm:max-w-5xl mx-auto">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Essays</h1>
      <div className="grid grid-cols-1 gap-2 sm:gap-4">
        {/* Yazı Listesi */}
        <div className="space-y-2 sm:space-y-4">
          {essays.map((essay) => (
            <div
              key={essay.id}
              className="bg-white p-2 sm:p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setSelectedEssay(selectedEssay === essay.id ? null : essay.id)}
            >
              <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">{essay.title}</h2>
              <p className="text-xs sm:text-sm text-gray-600">{essay.date}</p>
              {selectedEssay === essay.id && (
                <p className="text-xs sm:text-sm md:text-base text-gray-700 mt-2">{essay.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}