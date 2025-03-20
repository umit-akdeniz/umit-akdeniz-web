import { createClient, ContentfulClientApi, EntryCollection } from 'contentful';

export const contentfulClient: ContentfulClientApi = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

interface BlogPostFields {
  title: string;
  content: string;
  date: string;
}

export async function getBlogPosts(): Promise<BlogPostFields[]> {
  try {
    const response: EntryCollection<any> = await contentfulClient.getEntries({
      content_type: 'blogPost', // Content type adını kontrol et
    });
    return response.items.map((item) => item.fields as BlogPostFields) || [];
  } catch (error) {
    console.error('Contentful veri çekme hatası:', error);
    return [];
  }
}