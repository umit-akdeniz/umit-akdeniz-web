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

      {
        slug: 'to-kill-a-mockingbird',
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        published: 'July 11, 1960',
        language: 'EN',
        mcover: '/tkmb.png',
        cover: '/tkm.jpg',
        summary: 'A story of justice, morality, and racial inequality in the South.'
      },
      {
        slug: '1984',
        title: '1984',
        author: 'George Orwell',
        published: 'June 8, 1949',
        language: 'EN',
        mcover: '/1984m.png',
        cover: '/1984.jpg',
        summary: 'A dystopian tale of surveillance, control, and resistance.'
      },
      {
        slug: 'pride-and-prejudice',
        title: 'Pride and Prejudice',
        author: 'Jane Austen',
        published: 'January 28, 1813',
        language: 'EN',
        mcover: '/papm.png',
        cover: '/pap.jpg',
        summary: 'A romantic journey through societal expectations and love.'
      },
      {
        slug: 'the-catcher-in-the-rye',
        title: 'The Catcher in the Rye',
        author: 'J.D. Salinger',
        published: 'July 16, 1951',
        language: 'EN',
        mcover: '/tcitr.png',
        cover: '/tcitr.jpg',
        summary: 'A young man’s rebellion against the phoniness of the adult world.'
      },
      {
        slug: 'dune',
        title: 'Dune',
        author: 'Frank Herbert',
        published: 'August 1, 1965',
        language: 'EN',
        mcover: '/dunem.png',
        cover: '/dune.jpg',
        summary: 'An epic of politics, religion, and survival on a desert planet.'
      },
      {
        slug: 'the-shadow-of-the-wind',
        title: 'The Shadow of the Wind',
        author: 'Carlos Ruiz Zafón',
        published: 'April 1, 2001',
        language: 'ES',
        mcover: '/tsotw.png',
        cover: '/tsotw.jpg',
        summary: 'A mystery unraveling through books and forgotten secrets.'
      },
      {
        slug: 'lord-of-the-rings',
        title: 'The Lord of the Rings',
        author: 'J.R.R. Tolkien',
        published: 'July 29, 1954',
        language: 'EN',
        mcover: '/lotr.png',
        cover: '/lotr.jpg',
        summary: 'A quest to destroy a powerful ring and save Middle-earth.'
      },
      {
        slug: 'the-alchemist',
        title: 'The Alchemist',
        author: 'Paulo Coelho',
        published: 'January 1, 1988',
        language: 'PT',
        mcover: '/alchm.png',
        cover: '/alch.jpg',
        summary: 'A journey of self-discovery and following one’s dreams.'
      },
      {
        slug: 'brave-new-world',
        title: 'Brave New World',
        author: 'Aldous Huxley',
        published: 'January 1, 1932',
        language: 'EN',
        mcover: '/bnwm.png',
        cover: '/bnw.jpg',
        summary: 'A futuristic society built on control and conformity.'
      },
      {
        slug: 'the-name-of-the-wind',
        title: 'The Name of the Wind',
        author: 'Patrick Rothfuss',
        published: 'March 27, 2007',
        language: 'EN',
        mcover: '/tnotw.png',
        cover: '/tnotw.jpg',
        summary: 'A tale of magic, music, and a legendary hero’s rise.'
      },
      {
        slug: 'moby-dick',
        title: 'Moby-Dick',
        author: 'Herman Melville',
        published: 'October 18, 1851',
        language: 'EN',
        mcover: '/mobym.png',
        cover: '/moby.jpg',
        summary: 'A whaler’s obsessive hunt for a great white whale.'
      },
      {
        slug: 'the-hobbit',
        title: 'The Hobbit',
        author: 'J.R.R. Tolkien',
        published: 'September 21, 1937',
        language: 'EN',
        mcover: '/hobm.png',
        cover: '/hob.jpg',
        summary: 'An adventure of a hobbit, a wizard, and a dragon’s treasure.'
      },
      {
        slug: 'fahrenheit-451',
        title: 'Fahrenheit 451',
        author: 'Ray Bradbury',
        published: 'October 19, 1953',
        language: 'EN',
        mcover: '/f451m.png',
        cover: '/f451.jpg',
        summary: 'A world where books are burned to suppress thought.'
      },
      {
        slug: 'the-old-man-and-the-sea',
        title: 'The Old Man and the Sea',
        author: 'Ernest Hemingway',
        published: 'September 1, 1952',
        language: 'EN',
        mcover: '/tomasm.png',
        cover: '/tomas.jpg',
        summary: 'A fisherman’s battle with nature and resilience.'
      },
      {
        slug: 'crime-and-punishment',
        title: 'Crime and Punishment',
        author: 'Fyodor Dostoevsky',
        published: 'January 1, 1866',
        language: 'RU',
        mcover: '/capm.png',
        cover: '/cap.jpg',
        summary: 'A psychological exploration of guilt and redemption.'
      },
      {
        slug: 'the-road',
        title: 'The Road',
        author: 'Cormac McCarthy',
        published: 'September 26, 2006',
        language: 'EN',
        mcover: '/roadm.png',
        cover: '/road.jpg',
        summary: 'A father and son’s journey through a post-apocalyptic world.'
      },
      {
        slug: 'one-hundred-years-of-solitude',
        title: 'One Hundred Years of Solitude',
        author: 'Gabriel García Márquez',
        published: 'May 30, 1967',
        language: 'ES',
        mcover: '/ohyosm.png',
        cover: '/ohyos.jpg',
        summary: 'A multi-generational saga of magical realism.'
      },
      {
        slug: 'the-kite-runner',
        title: 'The Kite Runner',
        author: 'Khaled Hosseini',
        published: 'May 29, 2003',
        language: 'EN',
        mcover: '/tkrm.png',
        cover: '/tkr.jpg',
        summary: 'A story of friendship, betrayal, and redemption in Afghanistan.'
      },
      {
        slug: 'wuthering-heights',
        title: 'Wuthering Heights',
        author: 'Emily Brontë',
        published: 'December 1, 1847',
        language: 'EN',
        mcover: '/whm.png',
        cover: '/wh.jpg',
        summary: 'A dark tale of love, revenge, and obsession.'
      },
      {
        slug: 'the-martian',
        title: 'The Martian',
        author: 'Andy Weir',
        published: 'February 11, 2014',
        language: 'EN',
        mcover: '/martm.png',
        cover: '/mart.jpg',
        summary: 'An astronaut’s struggle to survive alone on Mars.'
      },
      {
        slug: 'a-game-of-thrones',
        title: 'A Game of Thrones',
        author: 'George R.R. Martin',
        published: 'August 1, 1996',
        language: 'EN',
        mcover: '/agotm.png',
        cover: '/agot.jpg',
        summary: 'A battle for power in a world of kings and dragons.'
      },
      {
        slug: 'the-bell-jar',
        title: 'The Bell Jar',
        author: 'Sylvia Plath',
        published: 'January 14, 1963',
        language: 'EN',
        mcover: '/tbjm.png',
        cover: '/tbj.jpg',
        summary: 'A woman’s descent into mental illness and recovery.'
      },
      {
        slug: 'the-handmaids-tale',
        title: 'The Handmaid’s Tale',
        author: 'Margaret Atwood',
        published: 'February 1, 1985',
        language: 'EN',
        mcover: '/thtm.png',
        cover: '/tht.jpg',
        summary: 'A dystopian struggle for freedom in a repressive regime.'
      },
      {
        slug: 'sapiens',
        title: 'Sapiens: A Brief History of Humankind',
        author: 'Yuval Noah Harari',
        published: 'January 1, 2011',
        language: 'HE',
        mcover: '/sapm.png',
        cover: '/sap.jpg',
        summary: 'A sweeping history of humanity’s evolution and impact.'
      },
      {
        slug: 'the-outsiders',
        title: 'The Outsiders',
        author: 'S.E. Hinton',
        published: 'April 24, 1967',
        language: 'EN',
        mcover: '/outm.png',
        cover: '/out.jpg',
        summary: 'A tale of youth, loyalty, and class conflict.'
      }
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