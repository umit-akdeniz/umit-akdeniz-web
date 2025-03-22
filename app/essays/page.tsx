import Link from 'next/link';

interface Essay {
  slug: string;
  title: string;
  description: string;
  date: string;
}

export default function Essays() {
  const essays: Essay[] = [
    {
      slug: 'art-of-simplicity',
      title: 'Art of Simplicity',
      description: 'An exploration of clarity and minimalism in life and design.',
      date: 'March 21, 2025',
    },
    // Daha fazla essay ekleyebilirsin
    
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-8 sm:mb-12 text-center">
        Essays
      </h1>

      {/* Essay Listesi */}
      <div className="max-w-full sm:max-w-4xl mx-auto space-y-6 md:grid md:grid-cols-2 md:gap-6 md:space-y-0">
        {essays.map((essay) => (
          <Link key={essay.slug} href={`/essays/${essay.slug}`} className="block">
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800">{essay.title}</h2>
              <p className="text-sm sm:text-base text-gray-600 mt-2">{essay.description}</p>
              <p className="text-xs text-gray-500 mt-3">{essay.date}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}