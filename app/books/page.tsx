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
      published: 'July 11, 1960',
      language: 'EN',
      cover: '/kmb.jpg',
      mcover: '/mkmb.png',
      summary: 'A powerful story about justice, morality, and growing up in a racially divided town.',
    },
    {
      slug: '1984',
      title: '1984',
      author: 'George Orwell',
      published: 'June 8, 1949',
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
      published: 'April 10, 1925',
      language: 'EN',
      mcover: '/mkmb.png',
      cover: '/tgg.jpg',
      summary: 'A tale of love, wealth, and the American Dream.',
    },
    
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8 max-w-full sm:max-w-6xl mx-auto min-h-screen bg-gray-50">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">Books I’ve Read</h1>

      {/* Mobil: Liste, Arka Planda Çok Soluk Kapak */}
      <div className="block sm:hidden space-y-3 ">
        {books.map((book) => (
          <Link key={book.slug} href={`/books/${book.slug}`} className="block ">
            <div
              className="border-gray-200 shadow-sm rounded-md p-3 flex items-center space-x-3 bg-cover bg-center"
              style={{ backgroundImage: `url(${book.mcover})`, backgroundColor: 'rgba(197, 206, 213, 0.9)' }}
            >
              <Image
                src={book.cover}
                alt={book.title}
                width={50}
                height={75}
                className="w-12 h-16 object-cover rounded-md "
              />
              <div className="">
                <h2 className="inline text-base font-bold">{book.title}</h2>
                <p className="inline text-sm"> by {book.author}</p>
              </div>
            </div>
            
          </Link>
        ))}
      </div>

      {/* PC: Kartlar, 3’lü Grid, Dinamik 3:4 */}
      <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {books.map((book) => (
          <Link key={book.slug} href={`/books/${book.slug}`} className="block">
            <div className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 w-full">
              <Image
                src={book.cover}
                alt={book.title}
                width={150}
                height={200}
                className="w-full h-auto object-cover rounded-t-lg aspect-[3/4]"
              />
              <div className="p-3">
                <h2 className="text-sm font-semibold text-gray-800 line-clamp-2">{book.title}</h2>
                <p className="text-xs text-gray-600 mt-1">by {book.author}</p>
                <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
                  {book.language} 
                </span>
                <span className="inline-block mt-2 px-2 py-0.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-full">
                  {book.published} 
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}