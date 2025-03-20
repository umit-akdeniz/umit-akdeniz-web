
// app/bookmarks/[slug]/page.tsx
import { raindropClient } from '@/lib/raindrop';

export async function generateStaticParams() {
  const bookmarks = await raindropClient.getBookmarks();
  return bookmarks.map((bookmark) => ({
    slug: bookmark._id.toString(),
  }));
}

export default async function Bookmark({ params }: { params: { slug: string } }) {
  const bookmark = await raindropClient.getBookmark(parseInt(params.slug));
  if (!bookmark) return <div>Bookmark not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{bookmark.title}</h1>
      <a href={bookmark.link} target="_blank" rel="noopener noreferrer">
        Visit Link
      </a>
    </div>
  );
}