'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Essays() {
  const [selectedEssay, setSelectedEssay] = useState<string | null>(null);

  const essays = [
    {
      id: '1',
      title: 'The Art of Simplicity',
      date: 'March 15, 2025',
      content: (
        <div className="space-y-2 sm:space-y-4">
          <p className="text-xs sm:text-sm md:text-base text-gray-700">
            Simplicity is not just about removing clutter—it’s about finding clarity. In a world overflowing with noise, I’ve learned that less can indeed be more.
          </p>
          <Image
            src="https://via.placeholder.com/300x200"
            alt="Simplicity Illustration"
            width={300}
            height={200}
            className="w-full h-auto max-h-32 sm:max-h-48 md:max-h-64 object-cover rounded-md"
          />
        </div>
      ),
    },
    {
      id: '2',
      title: 'A Walk Through Time',
      date: 'March 10, 2025',
      content: (
        <div className="space-y-2 sm:space-y-4">
          <p className="text-xs sm:text-sm md:text-base text-gray-700">
            Time moves forward, but our minds wander back. This is a short reflection on moments that shaped me—some loud, some quiet, all significant.
          </p>
          <iframe
            className="w-full h-32 sm:h-48 md:h-64 rounded-md"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Reflection Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ),
    },
  ];

  return (
    <div className="p-2 sm:p-4 md:p-6 max-w-full mx-auto">
      <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">Essays</h1>
      <div className="space-y-2 sm:space-y-4">
        {essays.map((essay) => (
          <div
            key={essay.id}
            className="bg-white p-2 sm:p-3 md:p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-50 transition-colors duration-200"
            onClick={() => setSelectedEssay(selectedEssay === essay.id ? null : essay.id)}
          >
            <div className="flex justify-between items-center">
              <h2 className="text-sm sm:text-base md:text-lg font-semibold text-gray-800">{essay.title}</h2>
              <p className="text-xs sm:text-sm text-gray-600">{essay.date}</p>
            </div>
            {selectedEssay === essay.id && (
              <div className="mt-2 sm:mt-3">{essay.content}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}