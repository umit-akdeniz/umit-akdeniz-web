import { createClient, ContentfulClientApi } from 'contentful';


// Blog yazısı için tip tanımı
interface BlogPostFields {
  title: string;
  longtext: string; // Rich Text için Contentful’un Document tipi
  date: string;
  contentTypeId: string; // Required by EntrySkeletonType
}

export const contentfulClient: ContentfulClientApi<undefined> = createClient({
  space: process.env.CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
});

export async function getBlogPosts(): Promise<BlogPostFields[]> {
  try {
    const response = await contentfulClient.getEntries<{ fields: BlogPostFields; contentTypeId: string }>({
      content_type: 'blogPost', // Content type adını kontrol et
    });
    return response.items.map((item) => item.fields) || [];
  } catch (error) {
    console.error('Contentful veri çekme hatası:', error);
    return [];
  }
}