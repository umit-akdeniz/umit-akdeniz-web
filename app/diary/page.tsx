"use client";

import Image from 'next/image';
import Link from 'next/link';

interface DiaryEntry {
  date: string;
  content: string[];
  image?: string;
  audio?: string;
  video?: string;
}

export default function Diary() {
  const entries: DiaryEntry[] = [
    {
      date: 'April 1',
      content: [
        'Today I felt inspired by the sunrise.',
        'A new beginning.',
        'The sky was a mix of orange and pink.',
      ],
    },
    {
      date: 'April 2',
      content: ['Walked through the park today.', 'The flowers were blooming.'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-3 px-2 sm:px-4 sm:py-6">
      <h1 className="text-xl sm:text-3xl font-serif text-gray-900 mb-4 sm:mb-6">
        My 2025 Diary
      </h1>

      {/* Günlük Girişleri */}
      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-sm p-2 sm:p-3 border-l-4 border-blue-200"
          >
            <div className="flex items-baseline justify-between mb-0.5 sm:mb-1">
              <span className="text-[10px] sm:text-sm font-medium text-gray-600">
                {entry.date}
              </span>
            </div>
            <div className="space-y-0.5 sm:space-y-1">
              {entry.content.map((line, lineIndex) => (
                <p
                  key={lineIndex}
                  className="text-gray-800 text-xs sm:text-base"
                >
                  {line.replace(/^#\d+\s/, '')}
                </p>
              ))}
              {entry.image && (
                <Image
                  src={entry.image}
                  alt="Diary Image"
                  width={80}
                  height={53}
                  className="rounded-md mt-1 w-full max-w-[80px] sm:max-w-[120px] h-auto"
                />
              )}
              {entry.audio && (
                <audio controls className="w-full max-w-[150px] sm:max-w-[200px] mt-1">
                  <source src={entry.audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              )}
              {entry.video && (
                <div className="mt-1 w-full max-w-[150px] sm:max-w-[200px]">
                  <iframe
                    width="100%"
                    height="60"
                    src={entry.video}
                    title="Diary Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-md sm:h-[120px]"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Archive Link */}
      <div className="w-full max-w-4xl mt-4 sm:mt-6">
        <Link href="/archive">
          <button className="w-full sm:w-auto px-3 py-1.5 bg-blue-500 text-white text-xs sm:text-sm rounded-md hover:bg-blue-600 transition-colors">
            Go to Archive
          </button>
        </Link>
      </div>
    </div>
  );
}