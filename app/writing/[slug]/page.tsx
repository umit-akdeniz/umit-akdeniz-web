// app/writing/[slug]/page.tsx
import { contentfulClient } from '@/lib/contentful';

export async function generateStaticParams() {
  const entries = await contentfulClient.getEntries({ content_type: 'post' });
  return entries.items.map((entry) => ({
    slug: entry.fields.slug as string,
  }));
}

export default async function Post({ params }: { params: { slug: string } }) {
  const entries = await contentfulClient.getEntries({
    content_type: 'post',
    'fields.slug': params.slug,
  });
  const post = entries.items[0];

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{post.fields.title as string}</h1>
      <div>{post.fields.content as string}</div>
    </div>
  );
}