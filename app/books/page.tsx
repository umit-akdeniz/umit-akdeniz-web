import Link from 'next/link';
import Image from 'next/image';

interface Book {
  slug: string;
  title: string;
  author: string;
  published: string;
  language: string;
  cover: string;
  mcover: string;
  summary: string;
}

export default function Books() {
  const books: Book[] = [
    {
      slug: 'to-kill-a-mockingbird',
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      published: '1960',
      language: 'EN',
      cover: '/kmb.jpg',
      mcover: '/mkmb.png',
      summary: 'A powerful story about justice, morality, and growing up in a racially divided town.',
    },
    {
      slug: '1984',
      title: '1984',
      author: 'George Orwell',
      published: '1949',
      language: 'EN',
      mcover: '/m1984.png',
      cover: '/1984.jpg',
      summary: 'A dystopian classic exploring surveillance, control, and individuality.',
    },
    {
      slug: 'sapiens',
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      published: '2011',
      language: 'TR',
      mcover: '/msapiens.png',
      cover: '/sapiens.jpg',
      summary: 'İnsanlığın tarihine dair etkileyici bir yolculuk.',
    },
    {
      slug: 'the-great-gatsby',
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      published: '1925',
      language: 'EN',
      mcover: '/mkmb.png',
      cover: '/tgg.jpg',
      summary: 'A tale of love, wealth, and the American Dream.',
    },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-full sm:max-w-6xl mx-auto min-h-screen bg-gray-50">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Books I’ve Read</h1>

      {/* Dinamik Grid: Mobil için Auto-Fit, PC için 4-5’li */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] md:grid-cols-4 lg:grid-cols-5 gap-2">
        {books.map((book) => (
          <Link key={book.slug} href={`/books/${book.slug}`} className="block">
            <div className="bg-white rounded-md hover:shadow-sm transition-all duration-200">
              <Image
                src={book.cover}
                alt={book.title}
                width={100}
                height={133}
                className="w-full h-auto object-cover rounded-t-md aspect-[3/4]"
              />
              <div className="p-2">
                <h2 className="text-xs font-medium text-gray-800 line-clamp-2">{book.title}</h2>
                <p className="text-[10px] text-gray-600 mt-0.5">by {book.author}</p>
                <div className="mt-1 flex gap-1">
                  <span className="inline-block px-1.5 py-0.5 text-[10px] font-medium text-gray-600 bg-gray-100 rounded">
                    {book.language}
                  </span>
                  <span className="inline-block px-1.5 py-0.5 text-[10px] font-medium text-gray-600 bg-gray-100 rounded">
                    {book.published}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}