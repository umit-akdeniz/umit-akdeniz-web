console.log('CONTENTFUL_SPACE_ID:', process.env.CONTENTFUL_SPACE_ID);
console.log('CONTENTFUL_ACCESS_TOKEN:', process.env.CONTENTFUL_ACCESS_TOKEN);

import { getEntriesByContentType, getEntryById } from '@/lib/contentful';
import Link from 'next/link';

export default async function Writing() {
  try {
    const specificEntry = await getEntryById('5PeGS2SoZGSa4GuiQsigQu');
    console.log('Specific entry processed:', specificEntry);

    const entries = await getEntriesByContentType('post');
    console.log('Posts entries processed:', entries);

    if (!entries?.items || !Array.isArray(entries.items)) {
      throw new Error('Invalid response: entries.items is not an array');
    }

    return (
      <div>
        <section>
          <h1 className="text-2xl font-bold">
            {specificEntry.fields.title as string || 'Featured Entry'}
          </h1>
          <p>{specificEntry.fields.body as string || 'No content'}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold">All Writing</h2>
          <ul>
            {entries.items.map((post) => {
              if (!post?.fields?.slug || !post?.fields?.title) {
                console.warn('Skipping invalid post:', post);
                return null;
              }
              return (
                <li key={post.sys.id}>
                  <Link href={`/writing/${post.fields.slug}`}>
                    {post.fields.title as string}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    );
  } catch (error) {
    console.error('Error in Writing component:', error);
    return (
      <div>
        <h1 className="text-2xl font-bold">Error</h1>
        <p>Error loading content: {error instanceof Error ? error.message : 'Unknown error'}</p>
      </div>
    );
  }
}