import axios from 'axios';

// Configure the Raindrop API client
export const raindropClient = axios.create({
  baseURL: 'https://api.raindrop.io/rest/v1',
  headers: {
    Authorization: `Bearer ${process.env.RAINDROP_TOKEN}`,
  },
});

// Function to get all bookmarks
export async function getBookmarks() {
  try {
    const response = await raindropClient.get('/raindrops/0'); // 0 is the "All bookmarks" collection
    return response.data.items; // Array of bookmark objects
  } catch (error) {
    console.error('Error fetching Raindrop bookmarks:', error);
    throw error;
  }
}

// Function to get a single bookmark by ID
export async function getBookmark(id: number) {
  try {
    const response = await raindropClient.get(`/raindrop/${id}`);
    return response.data.item; // Single bookmark object
  } catch (error) {
    console.error('Error fetching Raindrop bookmark:', error);
    throw error;
  }
}