export default function Journey() {
  const journey = [
    {
      date: '1995',
      title: 'Born',
      description: 'Came into the world with a curious mind.',
    },
    {
      date: '2010',
      title: 'High School',
      description: 'Started exploring tech and music.',
    },
    {
      date: '2013',
      title: 'University',
      description: 'Enrolled in a CS program and fell in love with coding.',
    },
    {
      date: '2017',
      title: 'First Gig',
      description: 'Landed my first freelance coding project.',
    },
    {
      date: '2020',
      title: 'Full-Time Job',
      description: 'Joined a tech company as a developer.',
    },
    {
      date: '2023',
      title: 'Side Hustle',
      description: 'Launched my own app and started a blog.',
    },
    {
      date: '2025',
      title: 'This Site',
      description: 'Built this sleek personal website.',
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-full sm:max-w-3xl mx-auto min-h-screen flex flex-col">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-900 mb-6 sm:mb-8 text-center">My Journey</h1>

      {/* Zaman Çizelgesi */}
      <div className="relative flex-1">
        {/* Ana Çizgi */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-blue-600 h-full" aria-hidden="true"></div>

        {/* Olaylar */}
        <div className="space-y-8 sm:space-y-10">
          {journey.map((event, index) => (
            <div key={index} className="relative flex flex-col sm:flex-row items-center sm:items-start">
              {/* Yıl (Sol) */}
              <div className="sm:w-1/2 sm:pr-4 text-right">
                <p className="text-sm sm:text-base md:text-lg font-medium text-gray-700">{event.date}</p>
              </div>

              {/* Nokta */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-600 z-10"></div>

              {/* Olay Başlığı ve Açıklama (Sağ) */}
              <div className="sm:w-1/2 sm:pl-4 mt-2 sm:mt-0 text-center sm:text-left">
                <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">{event.title}</h2>
                <div className="relative mt-2">
                  {/* Kıvrılmış Ok */}
                  <svg
                    className="absolute left-0 top-0 w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8" />
                    <path d="M12 16l4-4-4-4" />
                  </svg>
                  <p className="pl-8 sm:pl-10 text-xs sm:text-sm md:text-base text-gray-600">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}