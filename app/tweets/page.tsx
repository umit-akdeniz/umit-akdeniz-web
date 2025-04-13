import { Tweet } from 'react-tweet';

interface TweetEntry {
  id: string;
  date: string;
}

export default function MinimalTweets() {
  const tweets: TweetEntry[] = [
    { id: '1911214935415070815', date: '' },

  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-2xl font-medium text-gray-800 mb-6 text-center">
        Tweets
      </h1>

      {/* Tweet Grid - PC için yan yana, mobil için alt alta */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
        {tweets.map((tweet, index) => (
          <div
            key={index}
            className="bg-white rounded shadow-sm hover:shadow transition-shadow duration-200"
          >
            {/* Tarih - Minimal başlık */}
            <div className="p-2 border-b text-xs text-gray-500">
              {tweet.date}
            </div>

            {/* Tweet - İçerik bölümü */}
            <div className="p-3">
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