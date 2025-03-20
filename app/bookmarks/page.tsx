import { getBookmarks } from '@/lib/raindrop';
import Link from 'next/link';

export default async function Bookmarks() {
  const bookmarks = await getBookmarks();
  return (
    <div>
      <h1 className="text-2xl font-bold">Bookmarks</h1>
      <ul>
        {bookmarks.map((bookmark) => (
          <li key={bookmark._id}>
            <Link href={`/bookmarks/${bookmark._id}`}>
              {bookmark.cover}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}