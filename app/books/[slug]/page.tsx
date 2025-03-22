import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Book {
  slug: string;
  title: string;
  author: string;
  published: string;
  language: string;
  cover: string;
  summary: string;
}

export default async function BookDetail({ params }: { params: Promise<{ slug: string }> }) {
  const books: Book[] = [
    {
        slug: 'to-kill-a-mockingbird',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        published: 'July 11, 1960',
        language: 'EN',
        cover: '/kmb.jpg',
        summary: 'A powerful story about justice, morality, and growing up in a racially divided town.',
      },
      {
        slug: '1984',
        title: '1984',
        author: 'George Orwell',
        published: 'June 8, 1949',
        language: 'EN',
        cover: '/1984.jpg',
        summary: 'A dystopian classic exploring surveillance, control, and individuality.',
      },
      {
        slug: 'sapiens',
        title: 'Sapiens',
        author: 'Yuval Noah Harari',
        published: '2011',
        language: 'TR',
        cover: '/sapiens.jpg',
        summary: 'İnsanlığın tarihine dair etkileyici bir yolculuk.',
      },
      {
        slug: 'the-great-gatsby',
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        published: 'April 10, 1925',
        language: 'EN',
        cover: '/tgg.jpg',
        summary: 'A tale of love, wealth, and the American Dream.',
      },
  ];

  // params'ı await ile çözüyoruz
  const resolvedParams = await params;

  if (!resolvedParams || !resolvedParams.slug) {
    notFound();
    return null;
  }

  const book = books.find((b) => b.slug === resolvedParams.slug);

  if (!book) {
    notFound();
    return null;
  }

  return (
    <div className="relative min-h-screen bg-gray-50">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none"
        style={{ backgroundImage: `url(${book.cover})` }}
      />
      <div className="relative z-10 p-4 sm:p-6 md:p-8 max-w-full sm:max-w-6xl mx-auto">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
          {book.title}
        </h1>
        <div className="bg-white border-gray-200 shadow-md rounded-lg p-4 sm:p-6 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          <div className="flex justify-center md:justify-start">
            <Image
              src={book.cover}
              alt={book.title}
              width={150}
              height={200}
              className="w-full max-w-[150px] sm:max-w-[200px] md:max-w-[250px] h-auto object-cover rounded-md shadow-md"
            />
          </div>
          <div className="md:col-span-2 flex flex-col justify-center text-center md:text-left">
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base md:text-lg text-gray-800">
                <span className="font-medium">Yazar:</span> {book.author}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-800">
                <span className="font-medium">Yayınlanma Tarihi:</span> {book.published}
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-800">
                <span className="font-medium">Dil:</span>
                <span className="inline-block ml-0 sm:ml-2 px-2 py-1 text-xs sm:text-sm font-medium text-gray-700 bg-gray-100 rounded-full">
                  {book.language}
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white border-gray-200 shadow-md rounded-lg p-4 sm:p-6 mt-4 sm:mt-6">
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-gray-800 mb-2 text-center md:text-left">
            Özet
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed text-center md:text-left">
            {book.summary}
          </p>
        </div>
        <div className="mt-4 sm:mt-6 text-center">
          <Link
            href="/books"
            className="text-blue-600  text-sm sm:text-base md:text-lg"
          >
            Return to Books
          </Link>
        </div>
      </div>
    </div>
  );
}