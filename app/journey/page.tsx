export default function Journey() {
  const timelineEvents = [
    {
      year: '2000',
      title: 'Born',
      description: 'I was born, my journey began.',
    },
    {
      year: '2009',
      title: 'Chess',
      description: 'I discovered chess, sparking my curiosity.',
    },
    {
      year: '2013',
      title: 'Istanbul',
      description: 'I relocated to Istanbul, a big change in my life.',
    },
    {
      year: '2014',
      title: 'Programming',
      description: 'I met programming, opening a new world for me.',
    },
    {
      year: '2018',
      title: 'Graduation',
      description: 'I graduated from high school, ready for the next step.',
    },
    {
      year: '2018',
      title: 'Metallica',
      description: 'I first listened to Metallica, opening a new window to my world.',
    },
    {
      year: '2018',
      title: 'Books',
      description: 'I started ordering books, later owning 650, a new world for me.',
    },
    {
      year: '2019',
      title: 'Restaurant',
      description: 'I worked at a restaurant, my first real job.',
    },
    {
      year: '2019',
      title: 'Art Films',
      description: 'I moved from shallow cinema to art films, discovering my love for art.',
    },
    {
      year: '2021',
      title: 'Physics',
      description: 'I started studying physics at Istanbul University.',
    },
    {
      year: '2022',
      title: 'Guitar',
      description: 'I bought my first guitar, a step into music.',
    },
    {
      year: '2024',
      title: 'Physics & ML',
      description: 'I began studying particle physics and machine learning.',
    },
    {
      year: '2025',
      title: 'Website',
      description: 'I built and launched my own website, a proud milestone.',
    },
  ];

  return (
    <div className="min-h-screen bg-white p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8 sm:mb-12 text-center">
        My Journey
      </h1>

      {/* Timeline */}
      <div className="relative max-w-full sm:max-w-3xl mx-auto md:ml-12">
        {/* Ana Çizgi */}
        <div className="absolute left-2 sm:left-4 top-0 bottom-0 w-0.5 bg-black" />

        {/* Olaylar */}
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="relative flex flex-col sm:flex-row items-start">
              {/* Çizgi Noktası */}
              <div className="absolute left-0 sm:left-2 z-10" />

              {/* 1. Çıkıntı: Olay Başlığı */}
              <div className="ml-6 sm:ml-8 w-full sm:w-32 flex-shrink-0">
                <span className="text-sm text-gray-800">{event.title}</span>
                <h2 className="text-base font-semibold text-gray-800 mt-1">{event.year}</h2>
              </div>

              {/* 2. Çıkıntı: Açıklama */}
              <div className="ml-6 sm:ml-12 mt-2 sm:mt-0 flex-1">
                <div className="relative bg-white p-3 rounded-md border border-gray-200">
                  {/* Yatay Bağlantı Çizgisi */}
                  <div className="" />
                  <p className="text-sm text-gray-800">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}