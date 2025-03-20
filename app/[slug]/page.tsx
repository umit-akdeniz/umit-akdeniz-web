import { contentfulClient } from '@/lib/contentful';

export async function generateStaticParams() {
  const entries = await contentfulClient.getEntries({ content_type: 'page' });
  return entries.items.map((entry) => ({
    slug: entry.fields.slug as string,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const entries = await contentfulClient.getEntries({
    content_type: 'page',
    'fields.slug': params.slug,
  });
  const page = entries.items[0];

  if (!page) return <div>Page not found</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold">{page.fields.title as string}</h1>
      <div>{page.fields.content as string}</div>
    </div>
  );
}