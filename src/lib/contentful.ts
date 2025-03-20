import { createClient, ContentfulClientApi } from 'contentful';
import { Document } from '@contentful/rich-text-types';

// Blog yazısı için tip tanımı
interface BlogPostFields {
  title: string;
  content: Document; // Rich Text için Contentful’un Document tipi
  date: string;
}

export const contentfulClient: ContentfulClientApi = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getBlogPosts(): Promise<BlogPostFields[]> {
  try {
    const response = await contentfulClient.getEntries<BlogPostFields>({
      content_type: 'blogPost', // Content type adını kontrol et
    });
    return response.items.map((item) => item.fields) || [];
  } catch (error) {
    console.error('Contentful veri çekme hatası:', error);
    return [];
  }
}