import { notFound } from 'next/navigation';
import Link from 'next/link';

interface Essay {
  slug: string;
  title: string;
  date: string;
  paragraphs: string[];
}

export default async function EssayDetail({ params }: { params: Promise<{ slug: string }> }) {
  const essays: Essay[] = [
    {
      slug: 'art-of-simplicity',
      title: 'Art of Simplicity',
      date: 'March 21, 2025',
      paragraphs: [
        "In a world that is increasingly complex, the art of simplicity stands as a powerful and timeless concept. It is an approach to life and creativity that emphasizes clarity, elegance, and minimalism. The pursuit of simplicity is not about doing less for the sake of it but about achieving more with less, focusing on what truly matters. This essay explores the significance of simplicity in various aspects of life, from design to personal well-being, and argues that embracing simplicity can lead to greater fulfillment and effectiveness.",
        "Simplicity in design is one of the most visible applications of this art. Many of the greatest works of architecture and product design are celebrated for their clean lines, functional elegance, and absence of unnecessary complexity. Think of the iconic designs of Apple products or the architectural mastery of buildings like the Parthenon. These creations are not cluttered with extraneous elements; rather, they focus on purpose and form, offering a sense of harmony and ease. Simplicity in design allows for better functionality and a more intuitive user experience, reducing confusion and enhancing usability.",
        "Similarly, simplicity plays a crucial role in our personal lives. In a society constantly filled with distractions, the pursuit of simplicity can help individuals focus on what is most important—relationships, health, and personal growth. Simplifying one’s environment, for example, can reduce stress and increase productivity. When we declutter our physical and mental spaces, we create room for clarity and peace of mind. This philosophy is evident in practices like minimalism, which encourages individuals to rid themselves of material excess in favor of a life centered around experiences and meaningful connections.",
        "Moreover, simplicity in communication is a vital component of effective interaction. Whether in writing, speech, or art, clear and concise communication often resonates more deeply than complex jargon or convoluted expressions. The art of simplicity lies in conveying profound ideas in a straightforward manner. Some of the most influential writers and thinkers in history, such as Leonardo da Vinci or Albert Einstein, have emphasized the importance of simplicity in their work, stating that the ability to distill complex ideas into simple forms is a mark of true genius.",
        "The art of simplicity is also intertwined with mindfulness. When we simplify our lives, we become more aware of the present moment. This shift towards simplicity fosters a deeper appreciation for the world around us and allows us to find beauty in the everyday. Instead of rushing through life in search of more, we learn to be content with less and enjoy the moments that truly matter.",
        "In conclusion, the art of simplicity is not about avoiding complexity, but rather about recognizing the beauty and power of clarity. In design, communication, and daily life, simplicity allows us to focus on what is truly important and to approach challenges with grace and efficiency. By embracing simplicity, we create space for more meaningful experiences, deeper connections, and a more fulfilling life. In a world that constantly demands more, the art of simplicity offers a welcome reminder that sometimes, less is indeed more.",
      ],
    },
    // Daha fazla essay ekleyebilirsin
  ];

  const resolvedParams = await params;

  if (!resolvedParams || !resolvedParams.slug) {
    notFound();
    return null;
  }

  const essay = essays.find((e) => e.slug === resolvedParams.slug);

  if (!essay) {
    notFound();
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      {/* Başlık ve Tarih */}
      <div className="max-w-full sm:max-w-3xl mx-auto md:ml-8 md:mx-0">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-4 text-center md:text-left">
          {essay.title}
        </h1>
        <p className="text-sm text-gray-500 mb-8 text-center md:text-left">{essay.date}</p>

        {/* Paragraflar */}
        <div className="space-y-6">
          {essay.paragraphs.map((paragraph, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed">{paragraph}</p>
            </div>
          ))}
        </div>

        {/* Geri Dön Linki */}
        <div className="mt-8 text-center md:text-left">
          <Link href="/essays" className="text-blue-600 hover:underline text-sm sm:text-base">
            Back to Essays
          </Link>
        </div>
      </div>
    </div>
  );
}