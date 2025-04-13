"use client";

import { useState } from 'react';

interface DiaryEntry {
  date: string;
  content: string[];
  image?: string;
  audio?: string;
  video?: string;
}

export default function Archive() {
  // Archive için örnek veri (sadece Nisan 2025)
  const archiveEntries: Record<string, DiaryEntry[]> = {
    '2025-April': [
      {
        date: 'April 1, 2025',
        content: [
          'Sunrise was breathtaking.',
          'Started a new journal.',
        ],
      },
      {
        date: 'April 2, 2025',
        content: ['Park walk was refreshing.'],
      },
    ],
  };

  // Her ay için açık/kapalı durumu
  const [openMonths, setOpenMonths] = useState<Record<string, boolean>>({});

  const toggleMonth = (monthKey: string) => {
    setOpenMonths((prev) => ({
      ...prev,
      [monthKey]: !prev[monthKey],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-4 px-3 sm:px-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-sans text-gray-800 mb-6 sm:mb-8">
        Diary Archive
      </h1>

      {/* Archive İçeriği */}
      <div className="w-full max-w-4xl space-y-3">
        {Object.keys(archiveEntries).map((monthKey) => (
          <div
            key={monthKey}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            {/* Ay Başlığı */}
            <button
              onClick={() => toggleMonth(monthKey)}
              className="w-full flex justify-between items-center p-3 sm:p-4 bg-indigo-50 text-left"
            >
              <span className="text-sm sm:text-lg font-semibold text-indigo-800">
                {monthKey.replace('2025-', '')} 2025
              </span>
              <span className="text-xs sm:text-sm text-indigo-500">
                {openMonths[monthKey] ? '−' : '+'}
              </span>
            </button>

            {/* Ayın Girişleri (sadece açıkken göster) */}
            {openMonths[monthKey] && (
              <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
                {archiveEntries[monthKey].map((entry, index) => (
                  <div
                    key={index}
                    className="border-b border-gray-200 pb-2 sm:pb-3 last:border-b-0"
                  >
                    <div className="mb-1 sm:mb-2">
                      <span className="text-xs sm:text-sm font-medium text-gray-600">
                        {entry.date}
                      </span>
                    </div>
                    <div className="space-y-1 sm:space-y-2">
                      {entry.content.map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          className="text-gray-700 text-sm sm:text-base"
                        >
                          {line}
                        </p>
                      ))}
                      {entry.image && (
                        <img
                          src={entry.image}
                          alt="Archive Image"
                          className="rounded-md mt-2 w-full max-w-[100px] sm:max-w-[120px] h-auto"
                        />
                      )}
                      {entry.audio && (
                        <audio controls className="w-full max-w-[180px] sm:max-w-[200px] mt-2">
                          <source src={entry.audio} type="audio/mp3" />
                          Your browser does not support the audio element.
                        </audio>
                      )}
                      {entry.video && (
                        <div className="mt-2 w-full max-w-[180px] sm:max-w-[200px]">
                          <iframe
                            width="100%"
                            height="80"
                            src={entry.video}
                            title="Archive Video"
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
            )}
          </div>
        ))}
      </div>

      {/* Geri Dön Linki */}
      <div className="w-full max-w-4xl mt-6 sm:mt-8">
        <a href="/diary">
          <button className="w-full sm:w-auto px-4 py-2 bg-indigo-500 text-white text-sm sm:text-base rounded-md hover:bg-indigo-600 transition-colors">
            Back to Diary
          </button>
        </a>
      </div>
    </div>
  );
}