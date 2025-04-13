import { Tweet } from 'react-tweet';

interface TweetEntry {
  id: string;
  date: string;
}

export default function Tweets() {
  const tweets: TweetEntry[] = [
    { id: '1911214935415070815', date: '' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 md:p-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-8 sm:mb-12 text-center">
        Tweets
      </h1>

      {/* Tweet Listesi */}
      <div className="max-w-full sm:max-w-3xl mx-auto space-y-6">
        {tweets.map((tweet, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-4 sm:p-6">
              {/* Tarih */}
              <div className="mb-2">
                <span className="text-sm sm:text-base font-semibold text-gray-800">{tweet.date}</span>
              </div>

              {/* Tweet */}
              <div className="react-tweet-theme">
                <Tweet id={tweet.id} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}