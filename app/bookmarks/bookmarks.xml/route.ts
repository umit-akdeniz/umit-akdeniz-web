import { raindropClient } from '@/lib/raindrop';

export async function GET() {
  const bookmarks = await raindropClient.getBookmarks();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>My Bookmarks</title>
    ${bookmarks
      .map(
        (b) => `
    <item>
      <title>${b.title}</title>
      <link>${b.link}</link>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}