import Image from 'next/image';

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
          '#1 Today I felt inspired by the sunrise.',
          '#2 A new beginning.',
          '#3 The sky was a mix of orange and pink.',
        ]   
      },
      
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-2 sm:p-4 md:p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 sm:mb-8 text-center">
        Diary - 2025
      </h1>

      {/* Diary Girişleri */}
      <div className="max-w-full sm:max-w-3xl mx-auto space-y-4">
        {entries.map((entry, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-start bg-white rounded-md border border-gray-200 shadow-sm"
          >
            {/* Tarih (Sol) */}
            <div className="w-full sm:w-24 flex-shrink-0 bg-gray-100 p-2 rounded-t-md sm:rounded-l-md sm:rounded-tr-none border-b sm:border-b-0 sm:border-r border-gray-200">
              <span className="text-xs sm:text-sm font-medium text-gray-800">{entry.date}</span>
            </div>

            {/* İçerik (Sağ) */}
            <div className="flex-1 p-2">
              {entry.content.map((line, lineIndex) => (
                    <p key={lineIndex} className="mb-1">{line}</p>
                  ))}
              {entry.image && (
                <Image
                  src={entry.image}
                  alt="Diary Image"
                  width={200}
                  height={133}
                  className="w-full max-w-[200px] h-auto rounded-md mb-1"
                />
              )}
              {entry.audio && (
                <audio controls className="w-full max-w-[200px] mb-1">
                  <source src={entry.audio} type="audio/mp3" />
                  Your browser does not support the audio element.
                </audio>
              )}
              {entry.video && (
                <div className="w-full max-w-[200px] mb-1">
                  <iframe
                    width="100%"
                    height="133"
                    src={entry.video}
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-md"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}