import { getBlogPosts } from '../../src/lib/contentful';


export default async function Home() {
  const posts = await getBlogPosts();

  if (!Array.isArray(posts)) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Blog Yazılarım</h1>
        <p className="text-red-600">Blog yazıAları yüklenirken bir hata oluştu.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Yazılarım</h1>
      <ul className="space-y-4">
        {posts.map((post, index) => (
          <li key={index} className="border p-4 rounded-md">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-600">{new Date(post.date).toLocaleDateString()}</p>
            <p className="text-base">{post.longtext}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}