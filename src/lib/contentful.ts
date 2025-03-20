import { createClient } from 'contentful';

const space = process.env.CONTENTFUL_SPACE_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

if (!space || !accessToken) {
  throw new Error(
    'Contentful configuration error: Missing SPACE_ID or ACCESS_TOKEN in environment variables'
  );
}

export const contentfulClient = createClient({
  space: space,
  accessToken: accessToken,
});

export async function getEntryById(entryId: string) {
  console.log(`Fetching entry with ID: ${entryId}`);
  try {
    const entry = await contentfulClient.getEntry(entryId);
    console.log(`Entry fetched:`, entry);
    return entry;
  } catch (error) {
    console.error(`Error fetching entry ${entryId}:`, error);
    throw error;
  }
}

export async function getEntriesByContentType(contentType: string) {
  console.log(`Fetching entries for content type: ${contentType}`);
  try {
    const entries = await contentfulClient.getEntries({ content_type: contentType });
    console.log(`Entries fetched:`, entries);
    return entries;
  } catch (error) {
    console.error(`Error fetching entries for ${contentType}:`, error);
    throw error;
  }
}